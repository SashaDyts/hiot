import { Children, useState } from 'react';

import { Container } from 'pages/PlayingPage/PlayingPage.styled';

import SongWordList from '../SongWordList';
import Btn from '../Btn';

const PlayArea = ({
  isMensTeamPlaying,
  increaseScore,
  changeIsPlaying,
  setIsWonRound,
  songWords,
  answer,
  setAnswer,
}) => {
  const [isTypingAnswer, setIsTypingAnswer] = useState(false);
  const [currentScore, setCurrentScore] = useState(5);
  const [isError, setIsError] = useState(false);

  const getAnswer = e => {
    setAnswer({
      ...answer,
      [e.currentTarget.getAttribute('data-index')]:
        e.currentTarget.value.toLowerCase() ||
        e.currentTarget.textContent.toLowerCase(),
    });
  };

  const getResult = () => {
    const values = Object.values(answer).join(' ');

    console.log(values);
    console.log(answer);

    if (values === '') {
      setIsError(true);
      return;
    }

    const words = songWords.join(' ');
    console.log(words === values);

    if (values === words) {
      increaseScore(currentScore);
      setIsWonRound(true);
      changeIsPlaying();
      return;
    }

    setIsWonRound(false);
    changeIsPlaying();
  };

  const word = e => {
    setCurrentScore(currentScore - 1);
  };

  return (
    <Container>
      <form
        onSubmit={e => {
          e.preventDefault();
          getResult();
        }}
      >
        <SongWordList
          getAnswer={getAnswer}
          onClick={word}
          songWords={songWords}
          isMensTeamPlaying={isMensTeamPlaying}
          isTypingAnswer={isTypingAnswer}
          isError={isError}
        />

        {isTypingAnswer && <Btn isTypingAnswer={isTypingAnswer} />}
      </form>
      {!isTypingAnswer && <Btn setIsTypingAnswer={setIsTypingAnswer} />}
    </Container>
  );
};

export default PlayArea;
