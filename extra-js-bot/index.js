let vvod = document.getElementById("vvod");

// я понимаю, что по заданию нужно проанализировать с помощью фильтра или подобных функций входящее сообщение и на основании накопленных совпадений выдавать тот или иной ответ. Но без подключения бд это всё жалко будет выглядеть. то что здесь делаю я эффектнее для пользователя).
let dic = '  И в не он на я что тот быть с а весь это как она по но они к у ты из мы за вы так же от сказать этот который мочь человек о один еще бы такой только себя свое какой когда уже для вот кто да говорить год знать мой до или если время рука нет самый стать большой даже другой наш свой ну под где дело есть сам раз чтобы два там чем глаз жизнь первый день тута во ничто потом очень со хотеть ли при голова надо без видеть идти теперь тоже стоять друг дом сейчас можно после слово здесь думать место спросить через лицо что тогда ведь хороший каждый новый жить должный смотреть почему потому сторона просто нога сидеть понять иметь конечный делать вдруг над взять никто сделать дверь перед нужный понимать казаться работа три ваш уж земля конец несколько час голос город последний пока хорошо давать вода более хотя всегда второй куда пойти стол ребенок увидеть сила отец женщина машина случай ночь сразу мир совсем остаться об вид выйти дать работать любить старый почти ряд оказаться начало твой вопрос много война снова ответить между подумать опять белый деньги значить про лишь минута жена посмотреть правда главный страна свет ждать мать будто никогда товарищ дорога однако лежать именно окно никакой найти писать комната Москва часть вообще книга маленький улица решить далекий душа чуть вернуться утро некоторый считать сколько помнить вечер вечер пол таки получить народ плечо хоть сегодня бог вместе взгляд ходить зачем советский русский бывать полный прийти палец Россия любой история наконец мысль узнать назад общий заметить словно прошлый уйти известный давно слышать слушать бояться сын нельзя прямо долго быстро лес похожий пора пять глядеть оно сесть имя ж разговор тело молодой стена красный читать право старик ранний хотеться мама оставаться высокий путь поэтому совершенно кроме тысяча месяц брать написать целый огромный начинать спина настоящий пусть язык точно среди чувствовать сердце вести иногда мальчик успеть небо живой смерть продолжать '.split(' ');

let dic2 = " девушка образ ко забыть вокруг письмо власть черный пройти появиться воздух разный выходить просить брат собственный отношение затем пытаться показать вспомнить система четыре квартира держать также любовь солдат откуда чтоб называть третий хозяин вроде уходить подойти поднять особенно спрашивать начальник оба бросить школа парень кровь двадцать солнце неделя послать находиться ребята поставить встать например шаг мужчина равно нос мало внимание капитан ухо туда сюда играть следовать рассказать великий действительно слишком тяжелый спать оставить войти длинный чувство молчать рассказывать отвечать становиться остановиться берег семья искать искать генерал момент десять начать следующий личный труд верить группа немного впрочем видно являться муж разве движение порядок ответ тихо знакомый газета помощь сильный скорый собака дерево снег сон смысл смочь против бежать двор форма простой приехать иной кричать возможность общество зеленый грудь угол открыть происходить ладно черный век карман ехать немец наверное губа дядя приходить часто домой огонь писатель армия состояние зуб очередь кой подняться камень гость показаться ветер собираться попасть принять сначала либо поехать услышать уметь случиться странный единственный рота закон короткий море добрый темный гора врач край стараться лучший ".split(' ')


let dop = ['. Так оно и будет!', '. Но это не точно... ', '?', '. Но ты не бери в голову! ', '.',  '.  самому аж страшно стало' , '?', '?', '!', '?', '!', '?', '?', '.  Кек!' , '. Как то так...' ]



const btn1 = document.getElementById("inputbody__btn");





function ran(min, max) {
  return  Math.round(Math.random() * (max - min) + min);
}

btn1.addEventListener("click", () => {
let input = document.getElementById("vvod").value;
let strtrans = ""
let sl = ran(1, 5)

for (let i = 0; i <= sl; i++) {

console.log(dic.length);




  strtrans = strtrans + dic[ran(0, dic.length-1)] + "  " 

  strtrans = strtrans + dic2[ran(0, dic2.length-1)] + "  " 


}


console.log(dop.length);

strtrans = strtrans + dop[ran(0, dop.length-1)]




  // if (!arrin.length) return;

  // arrin.forEach((index) => {
  //   if (alphrus.indexOf(index) > 0) {
  //     strtrans = strtrans + alphtrans[alphrus.indexOf(index)];
  //   } else {
  //     strtrans = strtrans + index;
  //   }
  // });





  dic.push({ count: dic.length + 1, textru: vvod.value, texttra: strtrans }); //на всякий случай базочка сессии + использую её длинну для сквозных айдишников

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


// рисоватор
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
  div2.innerHTML = document.getElementsByClassName("table__count").length + 1; //count
  div2.classList.add("table__count");
  div2.id = "table__count";
  document.getElementById("table__left" + count).append(div2);

  const mediaQuery = window.matchMedia('(max-width: 1200px)')

  if (input.length > 27 && !mediaQuery.matches) {
    let div3 = document.createElement("div");
    div3.innerHTML = input.slice(0, 27) + " ...";
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

  if (strtrans.length > 27 && !mediaQuery.matches) {
    let div5 = document.createElement("div");
    div5.innerHTML = strtrans.slice(0, 37) + " ..."; // translit znachenie
    div5.classList.add("text");
    div5.classList.add("table__text__trans");
    div5.id = "table__text__trans" + count;
    document.getElementById("table__right" + count).append(div5);

    let div7 = document.createElement("div");
    div7.innerHTML = strtrans; // translit znachenie
    div7.classList.add("texthidden");
    div7.id = "table__text__trans" + count;
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
      y[i].innerHTML = i+1;
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
