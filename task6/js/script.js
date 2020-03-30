"use strict";
let body = document.getElementsByTagName("body")[0],
  adv = document.querySelectorAll(".adv"),
  divPrompt = document.getElementById("prompt");

// Восстановить порядок в меню, добавить пятый пункт
const menu = document.querySelector(".menu"),
  ul_menu_items_list = document.querySelectorAll(".menu-item"),
  ul_menu_items_arr = Array.prototype.slice.call(ul_menu_items_list),
  ul_menu_item = document.createElement("div");

ul_menu_items_arr.sort((a, b) => {
  const order = [
    "Первый пункт",
    "Второй пункт",
    "Третий пункт",
    "Четвертый пункт"
  ];

  const index_a = order.indexOf(a.textContent),
    index_b = order.indexOf(b.textContent);

  return index_a - index_b;
});
ul_menu_items_arr.forEach(el => menu.appendChild(el));
ul_menu_item.classList.add("menu-item");
ul_menu_item.textContent = "Пятый пункт";
menu.appendChild(ul_menu_item);

// Заменить картинку заднего фона на другую из папки img
document.body.style.background = "url(../img/apple_true.jpg) center no-repeat";

// Поменять заголовок, добавить слово "подлинную"
const title = document.getElementById("title");
title.textContent = title.textContent.replace("только", "подлинную");

// Удалить рекламу со страницы
document.querySelectorAll(".adv").forEach(el => el.remove());

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
divPrompt.textContent = prompt("Ваше отношение к технике apple?", "");
