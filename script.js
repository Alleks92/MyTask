const secretNumberFunctions = () => Math.trunc(Math.random() * 20) + 1;  
let secretNumber = secretNumberFunctions();
let score = 20;
// document.querySelector('.question').textContent = secretNumber; // = таким кодом мы выводим в объект  с вопросами рандомное число из переменной secretNumber

// Нажатие на кнопку "Сначала!"
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.score').textContent = '20';
  secretNumber = secretNumberFunctions();
});

//Вывод элемента ввода в консоль при нажатии на кнопку "Проверить"
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  // No input
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!'; // = если число не введино то выводится сообщение 'Введите число!'
  } else if (guessingNumber === secretNumber) {
    // Player won
    document.querySelector('.guess-message').textContent = 'Правильно!'; // = если число которое вы пишете совпадает с рандомным то этот параметр выводить текст 'Правильно!'
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';

    // Too high
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      // = этот объект нужен для того что бы уменьшающееся после каждого нажатия кнопки число очков не уходило в минусовые значенит, то есть ниже единицы и при достижении нуля выдавало сообщение "Конец игры!"
      document.querySelector('.guess-message').textContent =
        'Слишком большое число!'; // = если число которое вы вводите больше случайного
      score--; // при каждом клике на кнопку уменьшает очки на один
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Конец игры!';
    }

    // Too low
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      // = этот объект нужен для того что бы уменьшающееся после каждого нажатия кнопки число очков не уходило в минусовые значенит, то есть ниже единицы и при достижении нуля выдавало сообщение "Конец игры!"
      document.querySelector('.guess-message').textContent =
        'Слишком маленькое число!'; // = если число которое вы вводите меньше случайного
      score--; // при каждом клике на кнопку уменьшает очки на один
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Конец игры!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

