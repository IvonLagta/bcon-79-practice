// Task 01
function fn1() {
  document.querySelector(".out-1").textContent = 1;
}
document.querySelector(".b-1").onclick = fn1;

// Task 02
function fn2() {
  document.querySelector(".out-2").textContent = 2;
}
document.querySelector(".i-2").onclick = fn2;

// Task 03
function fn3() {
  document.querySelector(".out-3").textContent = 3;
}
document.querySelector(".p-3").onclick = fn3;

// Task 04
function fn4() {
  const inputEl = document.querySelector("i-4");
  document.querySelector(".out-4").textContent;
}
document.querySelector(".b-4").onclick = fn4;

// Task 05
function fn5() {
  const inputEl = document.querySelector("i-5");
  const out5 = document.querySelector(".out-5");
  out5.textContent = inputEl.checked ? inputEl.value : false;
}
document.querySelector(".b-5").onclick = fn5;

// Task 06
const out6 = document.querySelector(".out-6");
const btn6 = document.querySelector(".b-6");
const input6 = document.querySelector(".i-6");

const fn6 = () => {
  out6.textContent = input6.value;
};

btn6.onclick = fn6;

// Task 07
const out71 = document.querySelector(".out-71");
const out72 = document.querySelector(".out-72");
const btn7 = document.querySelector(".b-7");
const input7 = document.querySelector(".i-7");

const fn7 = () => {
  out71.textContent = input7.value;

  //   if (input7.value.length >= 6) {
  //     out72.textContent = 1;
  //   } else {
  //     out72.textContent = 0;
  //   }

  out72.textContent = input7.value.length >= 6 ? 1 : 0;
};
btn7.onclick = fn7;

// Task 08
const out8 = document.querySelector(".out-8");
const btn8 = document.querySelector(".b-8");

const fn8 = () => {
  out8.innerHTML = '<div class="js2">New Div </div>';
};

btn8.onclick = fn8;

// Task 09
const out9 = document.querySelector(".out-9");
const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");

const fn9 = () => {
  out9.textContent = input9.checked && input9.value;
};
btn9.onclick = fn9;

// Task 10
const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");
const input10 = document.querySelector(".i-10");

const fn10 = () => {
  out10.textContent = input10.checked && input10.value;
};
btn10.onclick = fn10;
// Task 11

// Task 12

// Task 13

// Task 14

// Task 15

// Task 16

// Task 17

// Task 18

// Task 19

// Task 20
