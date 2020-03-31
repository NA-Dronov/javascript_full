const btn = document.querySelectorAll("button"),
  wrapper = document.querySelector(".wrapper"),
  link = document.querySelector("a");

// btn[0].onclick = () => {
//   alert("Вы нажали первую кнопку");
// };

let eventLog = e =>
  console.log(`Произошло событие ${e.type} на элементе ${e.target}`);

btn[0].addEventListener("click", function(event) {
  eventLog(event);
});

wrapper.addEventListener("click", function(event) {
  eventLog(event);
});

link.addEventListener("click", function(event) {
  event.preventDefault();
  eventLog(event);
});

btn.forEach(item => {
  item.addEventListener("mouseleave", () => {
    console.log("leave");
  });
});
// btn[0].addEventListener("mouseenter", function() {
//   alert("Вы навелись накнопку");
// });
