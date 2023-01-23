const riddle = {
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  hints: ['это съедобное', 'это фрукт'],
  tries: 3,
  checkAnswer(answer) {
    if (this.tries <= 0) {
      console.log('Попытки закончились, правильный ответ был: ' + this.correctAnswer);
      return alert('Попытки закончились, правильный ответ был: ' + this.correctAnswer);
    }
    if (answer.toLowerCase().includes(this.correctAnswer)) {
      alert('Вы угадали!');
      console.log('Вы угадали!');
      this.tries = 0;
    } else {
      this.tries -= 1;
      alert('Неверно, попробуйте еще раз');
      console.log('Неверно, попробуйте еще раз');

      const hint = this.hints[this.tries === 2 ? 0 : 1];
      if (this.tries) {
        alert('Подсказка' + hint);
      }
    }
  },
};

window.onload = function () {
  document.getElementById('riddle').innerText = riddle.question;
};

function check() {
  const input = document.getElementsByTagName('input')[0];

  const guessedAnswer = input.value;

  if (guessedAnswer) {
    riddle.checkAnswer(guessedAnswer);
  }
}
