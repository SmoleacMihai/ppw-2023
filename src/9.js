// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification">{{ message }}</div>
//  с заданным содержимым. 
// Уведомление должно автоматически исчезнуть через 1,5 секунды.

// Пример объекта options:

// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// showNotification({
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 10, // 10px от правого края окна (по умолчанию 0px)
//   message: "Hello!", // HTML-уведомление
//   className: "welcome" // дополнительный класс для div (необязательно)
// });

// Используйте CSS-позиционирование для отображения элемента в заданных координатах. 

const showNotification = ({top = 0, right = 0, className = "notification", message = "Hi"}) => {
  const notification = document.createElement('div');
  
  if (className) {
      notification.classList.add(className);
  }
  if (message) {
      notification.innerHTML = message;
  }

  notification.style.top = top + 'px';
  notification.style.right = right + 'px';
  notification.style.backgroundColor = 'green';
  notification.style.width = '200px';

  document.body.append(notification);

  setTimeout(() => {
    notification.remove()
  }, 1500);
}

const option = {
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  message: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
}

showNotification({top : 10, right : 10, className : "welcome", message : "hello" });