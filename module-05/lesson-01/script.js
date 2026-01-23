//TODO: Join, Split, ForEach
// Task 1
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
btn1.onclick = fn1;

function fn1() {
  const arr1_res = [];
  arr1.forEach(item => {
    arr1_res.push(item * 2);
  });
  console.log("🚀 ~ fn1 ~ arr1_res:", arr1_res);
}

// Task 2
const arr2 = [2, 3, 4, 5, 10, 11, 12];
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");
btn2.onclick = fn2;

function fn2() {
  const arr2_res = [];
  arr2.forEach(item => {
    arr2_res.push(item / 2);
  });
  console.log("🚀 ~ fn2 ~ arr2_res:", arr2_res);
}
// Task 3
const arr3 = [2, "hello", 3, "hi", 4, "Mazai"];
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");
btn3.onclick = fn3;

function fn3() {
  const arr3_res = [];
  arr3.forEach(item => {
    if (typeof item === "number") {
      arr3_res.push(item);
    }
  });
  out3.textContent = arr3_res.join(" - ");
}
// Task 4
const arr4 = [];
const out4 = document.querySelector(".out-4");

fn4();

function fn4() {
  const arr4_res = [];
  const spans = document.querySelectorAll(".task-4");
  // console.log("🚀 ~ fn4 ~ spans:", spans);
  spans.forEach(span => {
    console.log(span.dataset.value);
    arr4_res.push(span.dataset.value);
  });
  out4.textContent = arr4_res;
}

// Task 5
const arr5_res = [];
const out5 = document.querySelector(".out-5");
const paragraphs = document.querySelectorAll(".task-5");

paragraphs.forEach(paragraph => {
  paragraph.onclick = fn5;
});

function fn5(event) {
  const paragraph = event.target;
  const dataValue = paragraph.getAttribute("data");
  arr5_res.push(dataValue);
  out5.textContent = arr5_res;
}

// Task 6
const str6 = "helloworld";
const out6 = document.querySelector(".out-6");
const btn6 = document.querySelector(".b-6");

const fn6 = () => {
  const arr6_res = str6.split("");
  // console.log("🚀 ~ fn6 ~ arr6_res:", arr6_res);
  out6.innerHTML = arr6_res.join("_");
};

btn6.onclick = fn6;

// Task 7
const str7 = "hello world hi mazai";
const out7 = document.querySelector(".out-7");
const btn7 = document.querySelector(".b-7");

const fn7 = () => {
  const arr7_res = str7.split(" ");
  out7.innerHTML = arr7_res.join("***");
};

btn7.onclick = fn7;

// Task 8
const arr8 = [1, 2, 66, 77, 15];
const out8 = document.querySelector(".out-8");
const btn8 = document.querySelector(".b-8");

const fn8 = () => {
  out8.innerHTML = arr8.join("-");
};

btn8.onclick = fn8;
// Task 9
const arr9 = [
  ["hi", "mahai"],
  ["test", "best"],
];
const out9 = document.querySelector(".out-9");
const btn9 = document.querySelector(".b-9");

const fn9 = () => {
  const arr9_res = arr9.flat().join("-");
  console.log("🚀 ~ fn9 ~ arr9_res:", arr9_res);
  out9.innerHTML = arr9_res;
};

btn9.onclick = fn9;

// Task 10
const arr10 = { name: "ivan", age: 15, sex: 1, id: 45 };
const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");

// const fn10 = () => {
//   let queryString = "";
//   for (const key in arr10) {
//     queryString += `${key}=${arr10[key]}&`;
//   }
//   out10.innerHTML = queryString;
// };

function fn10() {
  out10.textContent = new URLSearchParams(arr10).toString();
}

btn10.onclick = fn10;
//TODO: MAP FILTER
// Task 11
// const arr11 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
// const out10 = document.querySelector(".out-10");
// const btn10 = document.querySelector(".b-10");

// function fn10() {}

// Task 12
const arr12 = [2, 3, 4, 5, 10, 11, 12];
const out12 = document.querySelector(".out-12");
const btn12 = document.querySelector(".b-12");

btn12.onclick = fn12;

function fn12() {
  const arr12_res = arr12.map(number => number ** 2);
  out12.textContent = arr12_res;
}

// Task 13
const arr13 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
const out13 = document.querySelector(".out-13");
const btn13 = document.querySelector(".b-13");

btn13.onclick = fn13;

function fn13() {
  const arr13_res = arr13.map(Number);
  out13.textContent = arr13_res;
}

// Task 14
const arr14 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
const out14 = document.querySelector(".out-14");
const btn14 = document.querySelector(".b-14");

btn14.onclick = fn14;

function fn14() {
  const arr14_res = arr14.filter(num => typeof num === "number");
  out14.textContent = arr14_res;
}

// Task 15
const arr15 = [3, 14, 15, 92, "6"];
const out15 = document.querySelector(".out-15");
const btn15 = document.querySelector(".b-15");

btn15.onclick = fn15;

function fn15() {
  const arr15_res = arr15.filter(
    num => typeof num === "number" && num % 2 === 0
  );
  out15.textContent = arr15_res;
}
// Task 16
const arr16 = [3, 14, 15, 92, "6", "5", "hello", 32];
const out16 = document.querySelector(".out-16");
const btn16 = document.querySelector(".b-16");

btn16.onclick = fn16;

function fn16() {
  // const arr16_res = arr16.filter(num => typeof num === "number" && num > 14);
  const arr16_res = arr16.filter(num => Number.isInteger(num) && num > 14);
  out16.textContent = arr16_res;
}

// Task 17
const arr17 = [
  "Alto`s Adventure",
  "Angry Birds 2",
  "Anno 2205",
  "Assassin`s Creed Chronicles",
];
const out17 = document.querySelector(".out-17");
const btn17 = document.querySelector(".b-17");

btn17.onclick = fn17;

function fn17() {
  const arr17_res = arr17.map(str => str.toLowerCase());
  out17.textContent = arr17_res;
}

// Task 18
const arr18 = [3, 14, 15, 92, 7, 32, 59];
// 18
const out18 = document.querySelector(".out-18");
const btn18 = document.querySelector(".b-18");

btn18.onclick = fn18;

function fn18() {
  const arr18_res = arr18
    .map((number, index) => {
      if (number % 2 === 0) {
        return index;
      }
    })
    .filter(num => num);
  out18.textContent = arr18_res;
}

// Task 19
const arr19 = [
  "Quantum Break",
  "Gears of War 4",
  "Mass Effect: Andromeda",
  "Far Cry Primal",
];
// 19
const out19 = document.querySelector(".out-19");
const btn19 = document.querySelector(".b-19");

btn19.onclick = fn19;

function fn19() {
  arr19.forEach((element, index, array) => {
    const el = element.toLowerCase();
    array[index] = el;
  });
  out19.textContent = arr19;
}

const result = arr19.join(".").toLowerCase().split(".");
console.log("🚀 ~ result:", result);

// Task 20
const arr20 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
// 20
const out20 = document.querySelector(".out-20");
const btn20 = document.querySelector(".b-20");

btn20.onclick = fn20;

function fn20() {
  arr20.forEach((number, index, array) => {
    if (number < 0) {
      array[index] = "***";
    }
  });
  out20.textContent = `[${arr20}]`;
}

// Task 21
const arr21 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
// 21
const out21 = document.querySelector(".out-21");
const btn21 = document.querySelector(".b-21");

btn21.onclick = fn21;

function fn21() {
  const arr21_res = arr21;
  out21.textContent = arr21_res;
}

// Task 22
const arr22 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

// Task 23
const arr23 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const arr23_num = 9;

// Task 24
const arr24 = ["c", "C", "d", "e", "E"];
const arr14_sum = "e";

// Task 25
const arr25 = [
  {
    name: "Mango",
    pnum: "tr7862",
  },
  {
    name: "Poly",
    pnum: "",
  },
  {
    name: "Ajax",
    pnum: "im7961",
  },
  {
    name: "Didi",
    pnum: "tr786259",
  },
];

//? RESULT:
// [
//   {
//     name: "Mango",
//     pnum: "tr7862",
//   },
//   {
//     name: "Ajax",
//     pnum: "im7961",
//   },
// ];
