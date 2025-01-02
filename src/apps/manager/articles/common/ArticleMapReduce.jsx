
import QueryButton from "#apps/manager/QueryButton.jsx";
import { useEffect } from "react";

export default function ArticleMapReduce() {

  useEffect(() => {
    window.Prism.highlightAll();
  })

  return (
    <>
      <div className="section">
        <nav>
          <ul>
            <QueryButton
              title="Статьи"
              query="articles"
              subActionAllow={false}
              inline={true}
            >
              Статьи
            </QueryButton>
            <li className="sep"></li>
            <QueryButton
              title="Общее"
              query="article-category-common"
              subActionAllow={false}
              inline={true}
            >
              Общее
            </QueryButton>
            <li className="sep"></li>
            <QueryButton
              title="Технология MapReduce"
              query="article-map-reduce"
              subActionAllow={false}
              inline={true}
            >
              Технология MapReduce
            </QueryButton>
          </ul>
        </nav>

        <h1>Технология MapReduce</h1>
        <h2>Проблема</h2>
        <p className="indent">
          Часто cпециалистам Data Science приходится иметь дело с огромными
          объемами данных. В таких случаях многие подходы к обработке не
          работают или неосуществимы.
        </p>
        <p>
          Мы рассмотрим метод, представляющий собой технику, которая
          используется для обработки огромного количества данных, вплоть до
          нескольких петабайт, метод MapReduce. Реализаций существует множество,
          в том числе знаменитый Apache Hadoop. Однако в данной работе, мы
          посвятим свое внимание не реализациям, а концепции, попытавшись
          представить её наиболее интуитивно понятным способом.
        </p>
        <p>
          Начнем с простой задачи. Дан список строк, необходимо определить самую
          длинную строку. Решения довольно просто добиться в Python:
        </p>

        <pre>
          <code className="language-python line-numbers">
            {`
        def find_longest_string(list_of_strings):
        longest_string = None
        longest_string_len = 0
        for s in list_of_strings:
            if len(s) > longest_string_len:
                longest_string_len = len(s)
                longest_string = s
        return longest_string
    `}
          </code>
        </pre>

        <p>
          Перебирая строки одну за другой, мы вычисляем длину текущей и
          сохраняем самую длинную в переменную, пока не закончим.
        </p>
        <p>Это работает довольно быстро при небольших списках:</p>
        <pre>
          <code className="language-python line-numbers">
            {`
    list_of_strings = ['abc', 'python', 'dima']
  %time max_length = print(find_longest_string(list_of_strings))
    `}
          </code>
        </pre>

        <pre>
          <code className="language-bash">
            {`
OUTPUT:
python
CPU times: user 0 ns, sys: 0 ns, total: 0 ns
Затраченное время: 75.8 µs
`}
          </code>
        </pre>

        <p>
          И даже для списков с более чем 3-мя элементами это работает все еще
          приемлемо. Вот к примеру результат при 3-х тысячах:
        </p>

        <pre>
          <code className="language-python line-numbers">
            {`
large_list_of_strings = list_of_strings*1000
%time print(find_longest_string(large_list_of_strings))
`}
          </code>
        </pre>

        <pre>
          <code className="language-bash">
            {`
OUTPUT:
python
CPU times: user 0 ns, sys: 0 ns, total: 0 ns
Затраченное время: 307 µs
`}
          </code>
        </pre>

        <p>Но что, если мы возьмем 300 миллионнов элементов?</p>

        <pre>
          <code className="language-python line-numbers">
            {`
large_list_of_strings = list_of_strings*100000000
%time max_length = max(large_list_of_strings, key=len)
`}
          </code>
        </pre>

        <pre>
          <code className="language-bash">
            {`
OUTPUT:
python
CPU times: user 21.8 s, sys: 0 ns, total: 21.8 s
Затраченное время: 21.8 s
`}
          </code>
        </pre>

        <p>
          Теперь это проблема. В большистве приложений время отклика более 20-ти
          секунд недопустимо. Один из вариантов сократить время вычислений —
          купить более мощный и быстрый процессор. Такое масштабирование системы
          за счет внедрения нового оборудования называется вертикальным.
          Конечно, это лишь временное решение. Мало того, что задача найти в
          наше время процессор в 10 раз мощнее текущего совершенно не
          тривиально, так и данные, вероятно, со временем станут больше, и мы не
          захотим обновлять оборудование каждый раз, когда код становится
          слишком медленным. Вместо этого мы можем прибегнуть к горизонтальному
          масштабированию. Мы спроектируем наш код так, чтобы он мог работать
          параллельно, что позволит ему стать быстрее, как только мы добавим
          процессоров.
        </p>

        <h2>Фрагментация</h2>
        <p className="indent">
          Для этого нам нужно фрагментировать код на компоненты и посмотреть,
          как имменно они могут выполнять вычисления параллельно. Идея такая:
        </p>
        <ol>
          <li>Разбить данные на множество блоков;</li>
          <li>
            Параллельно выполнить функцию <code>find_longest_string</code> для
            каждого блока;
          </li>
          <li>Найти самую длинную строку среди собранных воедино блоков.</li>
        </ol>
        <p>
          Наш код слишком сложно раздробить из-за узкой направленности, поэтому
          вместо функции
          <code>find_longest_string</code> мы разработаем более общую структуру,
          которая поможет нам выполнять различные вычисления с большими объемами
          данных параллельно.
        </p>
        <p>
          В коде мы делаем две основные вещи: вычисляем <code>len</code> строки
          и сравниваем это значение с самым большим на данным момент. Раздлем
          код на два шага: 1)Вычислим <code>len</code>
          всех строк списка; 2)Выберем <code>max</code> значение.
        </p>

        <pre>
          <code className="language-python line-numbers">
            %%time # Шаг 1: list_of_string_lens = [len(s) for s in
            list_of_strings] list_of_string_lens = zip(list_of_strings,
            list_of_string_lens) #Шаг 2: max_len = max(list_of_string_lens,
            key=lambda t: t[1]) print(max_len)
          </code>
        </pre>

        <pre>
          <code className="language-bash">
            OUTPUT: ('python', 6) CPU times: user 51.6 s, sys: 804 ms, total:
            52.4 s Затраченное время: 52.4 s
          </code>
        </pre>
        <div className="foot">
          Мы воспользуемся функцией zip, для сборки обработанных данных в
          кортеж, поскольку это быстрее, чем делать это в одной строке и
          дублировать список строк.
        </div>

        <p>
          В этом состоянии код работает на самом деле медленнее, чем раньше,
          потому что вместо того, чтобы выполнить один проход для всех наших
          строк, мы делаем это 2 раза, сначала для вычисления <code>len</code>,
          а затем для поиска <code>max</code> значения. Почему это хорошо для
          нас? Потому что теперь наш "шаг 2" получает на вход не исходный
          список, а некоторые предварительно обработанные данные. Это позволяет
          нам выполнить второй шаг, используя выходные данные другого "шаг 2".
          Давайте дадим названия этим шагам. Мы будем называть первый шаг{" "}
          <code>mapper</code>, потому что он отображает какое-то одно значение в
          какое-то другое значение, а второй шаг мы будем называть{" "}
          <code>reductor</code>, поскольку он получает список значений и
          возвращает единственное значение. Вот две вспомогательные функции для
          mapper и reductor:
        </p>
        <pre>
          <code className="language-python line-numbers">
            {`
mapper = len
def reducer(p, c):
    if p[1] > c[1]:
        return p
    return c
    `}
          </code>
        </pre>

        <p>
          Mapper — это просто функция <code>len</code>. Он получает строку и
          возвращает её длину. Reducer — это функция, получающая на вход два
          кортежа и возвращающая тот, который имеет большую длину (строки).
        </p>
        <p>
          Перепишем наш код, испольщуя <code>map</code> и <code>reduce</code>,
          которые являются встроенными функциями в Python. (В Python 3 нам нужно
          импортировать их из библиотеки <code>functools</code>).
        </p>
        <pre>
          <code className="language-python line-numbers">
            %%time #Шаг 1: mapped = map(mapper, list_of_strings) mapped =
            zip(list_of_strings, mapped) #Шаг 2: reduced = reduce(reducer,
            mapped) print(reduced)
          </code>
        </pre>

        <pre>
          <code className="language-bash">
            OUTPUT: ('python', 6) CPU times: user 57.9 s, sys: 0 ns, total: 57.9
            s Затраченное время: 57.9 s
          </code>
        </pre>

        <p>
          Код делает все то же самое, но выглядит немного красивее и также
          является более общим, что способствует дальнейшему распараллеливанию.
          Давайте рассмотрим его внимательнее:
        </p>
        <ul>
          <li>
            Шаг 1 отображает наш список строк в список кортежей с помощью
            функции mapper.
          </li>
          <li>
            Шаг 2 использует функцию reducer, перебирает кортежи из первого шага
            и применяет их один за другим. В результате получается кортеж с
            максимальной длиной.
          </li>
        </ul>
        <p>
          Теперь разделим наши входные данные на блоки и разберемся, как это
          работает, прежде чем выполнять какое-либо распараллеливание: Now let's
          break our input into chunks and understand how it works before we do
          any parallelization (we’ll use the <code>chunkify</code> that breaks a
          large list into chunks of equal size):
        </p>

        <pre>
          <code className="language-python line-numbers">
            data_chunks = chunkify(list_of_strings, number_of_chunks=30) #Шаг 1:
            reduced_all = [] for chunk in data_chunks: mapped_chunk =
            map(mapper, chunk) mapped_chunk = zip(chunk, mapped_chunk)
            reduced_chunk = reduce(reducer, mapped_chunk)
            reduced_all.append(reduced_chunk) #Шаг 2: reduced = reduce(reducer,
            reduced_all) print(reduced)
          </code>
        </pre>

        <pre>
          <code className="language-bash">OUTPUT: ('python', 6)</code>
        </pre>
        <div className="foot">
          Мы воспользуемся функцией <code>chunkify</code>, которая разбивает
          большой список на части равного размера, в нашем случае{" "}
          <code>number_of_chunks=36</code>.
        </div>

        <p>
          На первом шаге мы просматриваем наши блоки и находим самую длинную
          строку в текущем, используя mapper и reducer. На втором шаге мы берем
          результат первого шага, который представляет собой список обработанных
          значений, и выполняем окончательное сокращение, чтобы получить самую
          длинную строку.
        </p>

        <h2>Параллельные вычисления</h2>
        <p className="indent">
          Мы почти готовы запустить наш код параллельно. Единственное, что мы
          можем улучшить, так это добавить первый шаг <code>reduce</code> в
          mapper. Мы делаем это потому, что хотим разбить наш код на два простых
          шага, а первый <code>reduce</code> работает на одном блоке, и мы хотим
          его распараллелить. Вот как это выглядит:
        </p>

        <pre>
          <code className="language-python line-numbers">
            def chunks_mapper(chunk): mapped_chunk = map(mapper, chunk)
            mapped_chunk = zip(chunk, mapped_chunk) return reduce(reducer,
            mapped_chunk) %%time data_chunks = chunkify(list_of_strings,
            number_of_chunks=30) #Шаг 1: mapped = map(chunks_mapper,
            data_chunks) #Шаг 2: reduced = reduce(reducer, mapped)
            print(reduced)
          </code>
        </pre>

        <pre>
          <code className="language-bash">
            OUTPUT: ('python', 6) CPU times: user 58.5 s, sys: 968 ms, total:
            59.5 s Затраченное время: 59.5 s
          </code>
        </pre>

        <p>
          Теперь у нас есть изящный двухшаговый код. Если мы выполним это как
          есть, мы получим то же время вычисления, но теперь мы можем
          распараллелить шаг 1, используя модуль <code>multiprocessing</code>,
          просто заменив фунцию <code>map</code> на <code>pool.map</code>:
        </p>

        <pre>
          <code className="language-python line-numbers">
            from multiprocessing import Pool pool = Pool(8) data_chunks =
            chunkify(large_list_of_strings, number_of_chunks=8) #Шаг 1: mapped =
            pool.map(mapper, data_chunks) #Шаг 2: reduced = reduce(reducer,
            mapped) print(reduced)
          </code>
        </pre>

        <pre>
          <code className="language-bash">
            OUTPUT: ('python', 6) CPU times: user 7.74 s, sys: 1.46 s, total:
            9.2 s Затраченное время: 10.8 s
          </code>
        </pre>

        <p>
          Мы видим, что оно работает в 5 раз быстрее. Это не большое достижение,
          однако теперть мы можем ускорить код, увеличив количество процессов.
          Мы даже можем делать это распределенно, используя несколько машин.
          Если наши данные очень большие, мы можем использовать десятки или даже
          тысячи машин, чтобы сократить время вычислений до требуемого.
        </p>

        <h2>Итоги</h2>
        <p className="indent">
          Архитектура построенная нами включает в себя две функций:{" "}
          <code>map</code> и <code>reduce</code>. Каждый вычислительный блок
          отображает входные данные и выполняет начальное уменьшение. Наконец,
          некоторое централизованное устройство (мастер) выполняет окончательное
          уменьшение и возвращает вывод. Схема выглядит так:
        </p>
        <div className="example">
          <img className="img" src="img/mapreduce.png" />
          <div className="foot">
            Рисунок 1 — Схема параллельных вычислений посредством MapReduce
          </div>
        </div>

        <p>Эта архитектура имеет два важных преимущества:</p>
        <ol>
          <li>
            Она масштабируема: если у нас есть больше данных, единственное, что
            нам нужно сделать, это добавить больше вычислительных единиц, не
            изменяя исходный код.
          </li>
          <li>
            Она универсальна: эта архитектура поддерживает широкий спектр задач,
            мы можем изменить функционал наших <code>map</code> и{" "}
            <code>reduce</code> так, как захотим.
          </li>
        </ol>
        <p>
          Важно отметить, что в большинстве случаев наши данные будут очень
          большими и статичными. Это означает, что разбиение на куски каждый раз
          неэффективно и, по сути, избыточно. Таким образом, в реальной жизни в
          большинстве приложений мы с самого начала будем хранить наши данные
          блоками. Затем мы сможем выполнять различные вычисления, используя
          технику MapReduce.
        </p>

        <br />
        <br />
        <p>
          Использованный источник: <br />A Beginners Introduction into MapReduce
          [Электронный ресурс] : [сайт]. – URL:{" "}
          <a href="https://towardsdatascience.com/a-beginners-introduction-into-mapreduce-2c912bb5e6ac">
            https://towardsdatascience.com/
          </a>
          (дата обращения: 20.11.2021). — Загл. с экрана. — Яз. англ
        </p>
      </div>
    </>
  );
}
