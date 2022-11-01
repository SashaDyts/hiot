const RoundInfo = ({ isWonRound, answer, rightAnswer, score, song }) => {
  if (isWonRound) {
    return (
      <>
        <p>Вірно! тепер у вас бал {score}</p>
        <p>Автор: {song.author}.</p>
        <p>Пісня: {song.song}</p>
      </>
    );
  }

  return (
    <>
      <p>
        Не вірно! Ваша відповідь: {Object.values(answer).join(' ')} Правильна
        відповідь: {rightAnswer}
      </p>
    </>
  );
};

export default RoundInfo;
