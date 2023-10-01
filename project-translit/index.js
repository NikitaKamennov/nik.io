let vvod = document.getElementById("vvod");

let alphrus = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ы",
  "Э",
  "Ю",
  "Я",
];

let alphtrans = [
  "a",
  "b",
  "v",
  "g",
  "d",
  "e",
  "ye",
  "zh",
  "z",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "f",
  "x",
  "c",
  "ch",
  "sh",
  "shch",
  '"',
  "y",
  "'",
  "e",
  "yu",
  "ya",
  "A",
  "B",
  "C",
  "G",
  "D",
  "E",
  "YE",
  "ZH",
  "Z",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "F",
  "X",
  "C",
  "CH",
  "SH",
  "SHCH",
  "Y",
  "E",
  "YU",
  "YA",
];

let dic = [];

const btn1 = document.getElementById("inputbody__btn");

btn1.addEventListener("click", () => {
  let input = document.getElementById("vvod").value;
  let arrin = Array.from(input);
  let strtrans = "";

  if (!arrin.length) return;

  arrin.forEach((index) => {
    if (alphrus.indexOf(index) > 0) {
      strtrans = strtrans + alphtrans[alphrus.indexOf(index)];
    } else {
      strtrans = strtrans + index;
    }
  });

  dic.push({ count: dic.length + 1, textru: vvod.value, texttra: strtrans }); //на всякий случай базочка сессии + использую её длинну для сквозных айдишников сессии

  risovator(input, strtrans);
  vvod.value = "";
});

// то же что клик только на ентер

const ent = document.body;

ent.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    let input = document.getElementById("vvod").value;
    let arrin = Array.from(input);
    let strtrans = "";

    arrin.forEach((index) => {
      if (alphrus.indexOf(index) > 0) {
        strtrans = strtrans + alphtrans[alphrus.indexOf(index)];
      } else {
        strtrans = strtrans + index;
      }
    });

    dic.push({ count: dic.length + 1, textru: vvod.value, texttra: strtrans });

    risovator(input, strtrans);
    vvod.value = "";
  }
});

function risovator(input, strtrans) {
  let count = dic.length;

  let div = document.createElement("div");
  div.classList.add("unit");
  div.id = "alert" + count;
  document.getElementById("wr_yd").append(div);

  let div1 = document.createElement("div");
  div1.classList.add("table__left");
  div1.id = "table__left" + count;
  document.getElementById("alert" + count).append(div1);

  let div2 = document.createElement("div");
  div2.innerHTML = document.getElementsByClassName("table__count").length + 2; //count
  div2.classList.add("table__count");
  div2.id = "table__count";
  document.getElementById("table__left" + count).append(div2);

  const mediaQuery = window.matchMedia('(max-width: 1200px)')

  if (input.length > 7 && !mediaQuery.matches) {
    let div3 = document.createElement("div");
    div3.innerHTML = input.slice(0, 7) + " ...";
    div3.classList.add("text");
    div3.id = "table__text__rusv" + count;
    document.getElementById("table__left" + count).append(div3);

    let div6 = document.createElement("div");
    div6.innerHTML = input; // vvedennoe znachenie
    div6.classList.add("texthidden");
    div6.id = "table__text__rusv" + count;
    document.getElementById("table__left" + count).append(div6);
  } else {
    let div3 = document.createElement("div");
    div3.innerHTML = input; // vvedennoe  znachenie
    div3.classList.add("text");
    div3.id = "table__text__rusv" + count;
    document.getElementById("table__left" + count).append(div3);
  }

  let div4 = document.createElement("div");
  div4.classList.add("table__right");
  div4.id = "table__right" + count;
  document.getElementById("alert" + count).append(div4);

  if (strtrans.length > 7 && !mediaQuery.matches) {
    let div5 = document.createElement("div");
    div5.innerHTML = strtrans.slice(0, 7) + " ..."; // translit znachenie
    div5.classList.add("text");
    div5.classList.add("table__text__trans");
    div5.id = "table__text__trans" + count;
    document.getElementById("table__right" + count).append(div5);

    let div7 = document.createElement("div");
    div7.innerHTML = strtrans; // translit znachenie
    div7.classList.add("texthidden");
    div7.id = "table__text__trans" + count;
    div7.style.zIndex = 2 + count;
    document.getElementById("table__right" + count).append(div7);
  } else {
    let div5 = document.createElement("div");
    div5.innerHTML = strtrans; // translit znachenie
    div5.classList.add("text");
    div5.classList.add("table__text__trans");
    div5.id = "table__text__trans" + count;
    document.getElementById("table__right" + count).append(div5);
  }

  let button = document.createElement("button");
  button.innerHTML = '<img class="imgright" src="./icons/knopka krestik.svg">';
  button.classList.add("table__right__btn");
  button.id = "table__right__btn" + count;
  document.getElementById("table__right" + count).append(button);

  let btn = document.getElementById("table__right__btn" + count);

  // подфанкшн удолятор-нумератор

  btn.addEventListener("click", function () {
    let child = document.getElementById("alert" + count);
    child.remove(child);
    let y = document.getElementsByClassName("table__count");
    console.log(y);
    console.log(y.length);

    for (let i = 0; i < y.length; i++) {
      y[i].innerHTML = i + 2;
    }
  });
} // конец рисоватора

const btn2 = document.getElementById("dictionary__btn");

btn2.addEventListener("click", () => {
  let child = document.getElementById("wr_yd");
  child.remove(child);

  let div = document.createElement("div");
  div.classList.add("wrapper__ydalyaper");
  div.id = "wr_yd";
  document.getElementById("dictionary__table").append(div);
});
