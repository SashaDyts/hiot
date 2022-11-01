import { useState, useEffect } from 'react';

import InfoBar from './InfoBar';
import PlayArea from './PlayArea';

const songWords2 = [
  {
    author: 'Queen',
    song: 'We will rock you',
    string: ['we', 'will', 'we', 'will', 'rock'],
  },
  {
    author: 'Queen',
    song: 'We are the champions',
    string: ['we', 'are', 'the', 'champions', 'my'],
  },
  {
    author: 'Плач Єремії',
    song: 'Вона',
    string: ['а', 'вона', 'а', 'вона', 'сидітиме'],
  },
  {
    author: 'Океан Ельзи',
    song: 'Весна',
    string: ['а', 'за', 'вікном', 'майже', 'весна'],
  },
  {
    author: 'Скрябін',
    song: 'Спи собі сама',
    string: ['часом', 'буває', 'так', 'шо', 'в'],
  },
];

// const songWords = ['we', 'will', 'we', 'will', 'rock'];

const GuessSongByWords = ({ isMensTeamPlaying, changePlayingTeam, song }) => {
  // const [songs, setSongs] = useState(songWords2);
  const [menScore, setManScore] = useState(0);
  const [womenScore, setWomenScore] = useState(0);
  const [isPlayingNow, setIsPlayingNow] = useState(true);
  const [isWonRound, setIsWonRound] = useState(null);
  const [answer, setAnswer] = useState({});

  const songWords = song.string;

  useEffect(() => {
    setAnswer({});
  }, [isMensTeamPlaying]);

  const rightAnswer = songWords.join(' ');

  const next = () => {
    changePlayingTeam();
    setIsPlayingNow(true);
  };

  const changeIsPlaying = () => {
    setIsPlayingNow(!isPlayingNow);
  };

  const increaseScore = score => {
    // console.log(typeof menScore);
    isMensTeamPlaying
      ? setManScore(menScore + score)
      : setWomenScore(womenScore + score);
  };

  return (
    <InfoBar
      isMensTeamPlaying={isMensTeamPlaying}
      menScore={menScore}
      womenScore={womenScore}
      isPlayingNow={isPlayingNow}
      isWonRound={isWonRound}
      answer={answer}
      song={song}
      rightAnswer={rightAnswer}
      changePlayingTeam={next}
    >
      <PlayArea
        isMensTeamPlaying={isMensTeamPlaying}
        increaseScore={increaseScore}
        changeIsPlaying={changeIsPlaying}
        isPlayingNow={isPlayingNow}
        setIsWonRound={setIsWonRound}
        songWords={songWords}
        answer={answer}
        setAnswer={setAnswer}
      />
    </InfoBar>
  );
};

export default GuessSongByWords;
