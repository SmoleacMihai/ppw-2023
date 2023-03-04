import {task_7_constructor} from "./dom_constructor.js";

// Добавить в документ 10 ссылок (внешние которые начинаются на `https://` и внутренние в которых не содержится `https://`)
// Цвет текста внешних ссылок сделать красным.
// Примеры:
// внешняя ссылка `http://google.com`
// внутренняя ссылка `directory/page.html`

task_7_constructor();

document.querySelectorAll('.link').forEach((link) => {
  if (link.innerHTML.indexOf("http://") === 0 || link.innerHTML.indexOf("https://") === 0) {
    link.style.color = "red";
    console.log("ea debil");
  }
}); 