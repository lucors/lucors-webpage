<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	    <title>Стохастичность</title>
    	<link rel="shortcut icon" href="../source/favicon.png" type="image/x-icon" />
	    <meta name="viewport" content="width=device-width, initial-scale=1" />

	    <link href="../old_ui/main.css" rel="stylesheet" />
	    <link href="../old_ui/footer.css" rel="stylesheet" />
	    <link href="../old_ui/header.css" rel="stylesheet" />
	    <link href="../old_ui/blank.css" rel="stylesheet" />

<!-- 	    <script type="text/javascript"
		  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
		</script> -->
		<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
		<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

	    <style type="text/css">
	    	main,
	    	.pythonResult{
	    		font-size: 18px;
	    	}
	    	.critical-info {
	    		padding-bottom: 20px;
	    	}
	    	.python {
	    		margin: 20px;
	    	}
	    </style>
	</head>
	<body>
		<div class="base-box">
			<!--Начало шапки-->
			<header>
				<a href="https://lucors.ru/" title="На главную страницу">
					<img class="head-logo" src="../source/luco-logo.svg" alt="На главную">
				</a>
			</header>
			<main>
				<div class="critical-info">
					<div>
						<b>Информация:</b> Данный скрипт создан для вычисления параметра стохастичности \(s\).
					</div>
					<div>
						<b>Задание:</b> Дано множество \(Г(n)\) взаимно простых остатков по модулю \(n\) и 
						динамическая система \(f(x) = 2 \cdot x \cdot mod(n)\). Вычислить параметр стохастичности \(s\)
						для орбиты \(\{2^t \cdot mod(n)\}\). 
					</div>
				</div>

				<form class="send-form" action="" method="POST">
					Введите n: 
					<input class="form-name" type="number" name="arg">
					<input class="form-button" type="submit" name="button" value="Посчитать" title="Посчитать" >
				</form>

				<div class="python">
					<?php 
					if ($_POST['button']){
						if (isset($_POST['arg'])){
							$arg = $_POST['arg'];
						}
					}
					echo '<span class="pythonResult">';
					echo $arg;
					echo system("python2 stochasticity.py $arg");
					echo '</span>';
					?>
				</div>
			</main>
			<footer>
				<span class="Copy-and-Year">2018-2019, Lucors</span>
			</footer>
		</div>
	</body>
</html>