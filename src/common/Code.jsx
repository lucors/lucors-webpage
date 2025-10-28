import {useEffect} from "react";

export default function Code({lang, children}) {
  useEffect(() => {
    window.Prism.highlightAll();
  });

  return (
    <pre>
        <code className={`language-${lang} line-numbers`}>
          {children}
        </code>
    </pre>
  )
}
