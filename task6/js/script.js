let body = document.getElementsByTagName("body")[0],
  menu = document.querySelector(".menu"),
  ul_menu_item = document.createElement("div"),
  title = document.getElementById("title"),
  adv = document.querySelectorAll(".adv"),
  divPrompt = document.getElementById("prompt");

ul_menu_item.classList.add("menu-item");
ul_menu_item.textContent = "Пятый пункт";
menu.appendChild(ul_menu_item);
body.style.background = "url(../img/apple_true.jpg) center no-repeat";
title.textContent = title.textContent.replace("только", "подлинную");
adv.forEach(el => el.remove());
divPrompt.textContent = prompt("Ваше отношение к технике apple?", "");
