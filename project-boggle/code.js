
const letters = [
  'AAEEGN',
  'ABBJOO',
  'ACHOPS',
  'AFFKPS',
  'AOOTTW',
  'CIMOTU',
  'DEILRX',
  'DELRVY',
  'DISTTY',
  'EEGHNW',
  'EEINSU',
  'EHRTVW',
  'EIOSST',
  'ELRTTY',
  'HIMNUQ',
  'HLNNRZ'
];
 const checkWordButton = document.getElementById('check-word');
 checkWordButton.addEventListener('click', checkWord);

const composedWordsContainer = document.getElementById('composed-words');
const scoreDisplay = document.getElementById("totalsorevalue");
// const total = document.getElementById('score');


 const shuffleButton = document.getElementById('shuffleButton');
 const cubes = document.querySelectorAll('.cube');
 const wordDisplay = document.getElementById('word');
 let selectedCubes = [];
 const countdownDisplay = document.getElementById('countdown');
 let countdown;
//  let base = [ {name:BUBA, score:999} ];
 let wordmoreten = [];

 
 shuffleButton.addEventListener('click', shuffleCubes);
 
 cubes.forEach(cube => {
   cube.addEventListener('click', selectCube);
 });
 
 function shuffleCubes() {

  composedWordsContainer.innerHTML = '';
  scoreDisplay.textContent = '0';
  clearInterval(countdown);
  startCountdown();
   cubes.forEach(cube => {
     const randomIndex = Math.floor(Math.random() * letters.length);
     const randomLetter = letters[randomIndex];
     const randomChar = randomLetter[Math.floor(Math.random() * randomLetter.length)];
     cube.textContent = randomChar;
     cube.style.backgroundColor = '';
     cube.dataset.selected = 'false';
     cube.dataset.letter = randomChar;
     cube.classList.remove('selected');
   });
   selectedCubes = [];
   updateWordDisplay();
  //  clearInterval(countdown);
 }

 function selectCube(event) {
  const cube = event.target;
  const isSelected = cube.dataset.selected === 'true';

  if (!isSelected) {
    const lastSelectedCube = selectedCubes[selectedCubes.length - 1];
    let isAdjacent;
    if (lastSelectedCube) {
      isAdjacent = isAdjacentCube(lastSelectedCube, cube);
    } else {
      isAdjacent = true;
    }

    if (isAdjacent) {
      cube.style.backgroundColor = 'yellow';
      cube.classList.add('selected');
      cube.dataset.selected = 'true';
      selectedCubes.push(cube);
    }
  }

  updateWordDisplay();
}

 function isAdjacentCube(cube1, cube2) {
   const cube1Index = Array.from(cubes).indexOf(cube1);
   const cube2Index = Array.from(cubes).indexOf(cube2);
   const rowDiff = Math.abs(Math.floor(cube1Index / 4) - Math.floor(cube2Index / 4));
   const colDiff = Math.abs(cube1Index % 4 - cube2Index % 4);
 
   return rowDiff <= 1 && colDiff <= 1;
 }
 
 function updateWordDisplay() {
   const word = selectedCubes.map(cube => cube.dataset.letter).join('');
   wordDisplay.textContent = word;

 }




function checkWord() {
  const word = wordDisplay.textContent;

  if (word.length > 2) {
    // Проверка слова через API
    checkWordInDictionary(word)
      .then(isWordInDictionary => {
        if (isWordInDictionary) {
          const composedWord = document.createElement('div');
          composedWord.textContent = word;
          composedWordsContainer.append(composedWord);
          const score = document.createElement('div');
          score.textContent = word.length;
          composedWord.appendChild(score);
          composedWord.classList.add('words');
          composedWordsContainer.append(composedWord);
          scoreDisplay.textContent = +scoreDisplay.textContent + word.length;
          wordDisplay.textContent = '';
          cubes.forEach(cube => {
            cube.classList.remove('selected');
            cube.style.backgroundColor = '';
            cube.dataset.selected = 'false';
          });


          setNewWordInLocalStorage(word)
          populateLongWords()

          selectedCubes = [];

          

        } else {
          wordDisplay.textContent = 'Такого слова нет';
          cubes.forEach(cube => {
            cube.classList.remove('selected');
            cube.style.backgroundColor = '';
            cube.dataset.selected = 'false';
          });
          selectedCubes = [];
          
        }
      })
      .catch(error => {
        console.error('Ошибка при проверке слова в словаре:', error);
      });
  }

}

function startCountdown() {
  const startTime = Date.now();
  const endTime = startTime + 3 * 60 * 1000+2000; 

  countdown = setInterval(() => {
    const currentTime = Date.now();
    const remainingTime = endTime - currentTime;

    if (remainingTime <= 0) {
      clearInterval(countdown);
      // countdownDisplay.textContent = `Время вышло. Ваш счет ${scoreDisplay.textContent}`;
      alert(`Время вышло. Ваш счет ${scoreDisplay.textContent}`)
      shuffleCubes()
      startCountdown()
      
    } else {
      const minutes = Math.floor(remainingTime / 1000 / 60);
      const seconds = Math.floor((remainingTime / 1000) % 60);
      countdownDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }, 1000);
}




async function checkWordInDictionary(word) {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Проверяем, есть ли результаты для слова
    if (Array.isArray(data) && data.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Ошибка при проверке слова в словаре:', error);
    return false;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var marioMusic = document.getElementById('mario-music');
  marioMusic.play();
});


function populateLongWords() {
  const topTenLongestWords = getTopTenLongestWords(getAllInputWords())
  const wordTopTenContainer = document.getElementById('top_words')
  wordTopTenContainer.innerHTML = '';
  topTenLongestWords.forEach(word => {
    let wordLayout = document.createElement('p')
    wordLayout.innerText = word
    wordTopTenContainer.appendChild(wordLayout)
  })

}

// ф-ция запишет в ЛС новые слова
function setNewWordInLocalStorage (inputWord) {
    //записали в перемен все слова из ЛС на текущий момент
    const allInputWordsFromLocalStorage = getAllInputWords()
    //в  переменную добавили введенное слово
    allInputWordsFromLocalStorage.push(inputWord)
    //обновляем ЛС с учетом введного слова
    localStorage.setItem('allInputWords', allInputWordsFromLocalStorage)
}

// функция получает все введ слова из ЛС
function getAllInputWords () {
  const allInputWordsArr = localStorage.getItem('allInputWords')
  return allInputWordsArr ? allInputWordsArr.split(',') : []
}

// получает ТОП-10
function getTopTenLongestWords(wordArr) {
  // Сортируем массив по длине слов в убывающем порядке
  wordArr.sort((a, b) => {
    return b.length - a.length;
  });
  // Возвращаем первые 10 элементов массива
  return wordArr.slice(0, 10); 
}



startCountdown();

shuffleCubes()






// // Сохранение состояния игры
// function saveGameState() {
//   const gameState = {
//     selectedCubes: selectedCubes.map(cube => cube.dataset.letter),
//     score: scoreDisplay.textContent,
//     countdown: countdownDisplay.textContent
//   };
//   localStorage.setItem('gameState', JSON.stringify(gameState));
// }

// // Восстановление состояния игры
// function restoreGameState() {
//   const savedGameState = localStorage.getItem('gameState');
//   if (savedGameState) {
//     const gameState = JSON.parse(savedGameState);
//     selectedCubes = gameState.selectedCubes.map(letter => {
//       const cube = Array.from(cubes).find(cube => cube.dataset.letter === letter);
//       cube.style.backgroundColor = 'yellow';
//       cube.classList.add('selected');
//       cube.dataset.selected = 'true';
//       return cube;
//     });
//     scoreDisplay.textContent = gameState.score;
//     countdownDisplay.textContent = gameState.countdown;
//     startCountdown();
//   }
// }

// // Вызов функции восстановления состояния игры при загрузке страницы
// window.addEventListener('load', restoreGameState);


// Вызов функции восстановления состояния игры при загрузке страницы

// function restoreGameState() {

//   // localStorage.clear();

//   // Получаем значения из полей ввода
//   const countDown = document.getElementById('countdown').value;
//   const totalSoreValue = document.getElementById('totalsorevalue').value;
//   const composedWords = document.getElementById('composed-words').value;

//   // Создаем объект для сохранения в Local Storage
//   const dataToSave = {
//     countDown: countDown,
//     totalSoreValue: totalSoreValue,
//     composedWords: composedWords
//   };

//   // Преобразуем объект в строку JSON и сохраняем в Local Storage
//   localStorage.setItem('userData', JSON.stringify(dataToSave));
//   // localStorage.setItem('userData', 'countDown');

//   // Оповещаем пользователя о сохранении
//   alert('Данные сохранены в Local Storage!');

//   // const retrievedValue = localStorage.setItem('Hello', shuffleCubes);

//   // return retrievedValue
// };

// window.onload = function () {
//   const savedData = localStorage.getItem('userData');

//   if (savedData) {
//     const parsedData = JSON.parse(savedData);
//     document.getElementById('countdown').value = parsedData.countDown;
//     document.getElementById('totalsorevalue').value = parsedData.totalSoreValue;
//     document.getElementById('composed-words').value = parsedData.composedWords;
//   }
// };

// // Добавляем слушатель на событие 'load', чтобы вызвать функцию restoreGameState при загрузке страницы
// window.addEventListener('load', restoreGameState);

// Написать Study Room 1
