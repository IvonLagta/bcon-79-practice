// Task 1
// const inp1 = document.querySelector("#input");
const btn = document.querySelector("button");

// btn.addEventListener("click", e => {
//   inp1.value = "Hello Wrld";
// });

// Task 2
// const inp2 = document.querySelector("#input");
// const btn2 = document.querySelector("button");
// // btn2.addEventListener("click", e => {
// //   alert(inp2.value);
// // });
// btn2.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   alert(inp2.value);
// }

// Task 3
// const inp31 = document.querySelector("#first-input");
// const inp32 = document.querySelector("#second-input");
// const btn3 = document.querySelector("button");
// btn3.addEventListener("click", e => {
//   const tmp = inp31.value;
//   inp31.value = inp32.value;
//   inp32.value = tmp;
// });

// Task 4
// const pArr = document.querySelectorAll("p");
// btn.addEventListener("click", e => {
//   //   for (let i = 0; i < pArr.length; i++) {
//   //     pArr[i].textContent = i;
//   //   }
//   pArr.forEach((el, index) => {
//     el.textContent = index + 1;
//   });
// });

// Task 5
// const inp51 = document.querySelector("#test");
// const inp52 = document.querySelector("#result");
// btn.addEventListener("click", e => {
//   const tmp = +inp51.value;
//   inp52.value = "";
//   if (Number.isNaN(tmp)) {
//     alert("Ввели не число");
//     inp52.disabled = true;
//   } else {
//     inp52.value = tmp ** 2;
//     inp52.disabled = false;
//   }
//   inp51.value = "";
// });

// Task 6
// const uList = document.createElement("ul");
// document.body.append(uList);
// do {
//   (() => {
//     const tmp = prompt("Enter ur data!!!");
//     if (tmp === null) {
//       return 0;
//     } else if (tmp === "") {
//     } else {
//       const itemStr = `<li>${tmp}</li>`;
//       document.querySelector("ul").insertAdjacentElement("beforeend", itemStr);
//     }
//   })();
// } while (true);

// Task 7
// const arr = document.querySelectorAll("a");
// arr.forEach(link => {
//   link.addEventListener("mouseenter", event => {
//     link.title = link.textContent;
//   });
// });

// Task 8
// const spans = document.querySelectorAll("span");
// spans.forEach(span => {
//   span.addEventListener("click", addRedColor);
// });

// function addRedColor(event) {
//   //   event.target.style.backgroundColor = "tomato";
//   this.style.backgroundColor = "tomato";
//   this.removeEventListener("click", addRedColor);
//   this.addEventListener("click", addGreenColor);
// }

// function addGreenColor(event) {
//   //   event.target.style.backgroundColor = "tomato";
//   this.style.backgroundColor = "lightgreen";
//   this.removeEventListener("click", addGreenColor);
//   this.addEventListener("click", addRedColor);
// }
const ol = document.querySelector("#ol");

btn.onclick = addLiItem;
ol.onclick = onLiClick;
function onLiClick(event) {
  if (event.target.tagName === "OL") {
    return;
  }
  event.target.textContent += " Nigger!!!";
}
function addLiItem() {
  const liEl = document.createElement("li");
  liEl.textContent = "Hello";
  ol.append(liEl);
}
// Task 9

// Task 10

// Task 11

// Task 12

// Task 13

// Task 14
