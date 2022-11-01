import React, { useState } from 'react';

import GuessSongByWords from 'components/GuessSongByWords';

import { Container } from './PlayingPage.styled';

const songWords2 = [
  // {
  //   author: 'Queen',
  //   song: 'We will rock you',
  //   string: ['we', 'will', 'we', 'will', 'rock'],
  // },
  // {
  //   author: 'Queen',
  //   song: 'We are the champions',
  //   string: ['we', 'are', 'the', 'champions', 'my'],
  // },
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
  {
    author: 'Олександр Пономарьов',
    song: 'Я люблю тільки тебе',
    string: ['у', 'вогні', 'що', 'ти', 'дала'],
  },
  {
    author: 'Дзідзьо',
    song: 'Мені повезло',
    string: ['о', 'о', 'мені', 'повезло', 'я'],
  },
  {
    author: 'Дзідзьо',
    song: 'Каділак',
    string: ['я', 'давним', 'давно', 'хотів', 'пересісти'],
  },
];

const PlayingPage = () => {
  const [isMensTeamPlaying, setIsMensTeamPlaying] = useState(true);

  const changePlayingTeam = () => {
    setIsMensTeamPlaying(!isMensTeamPlaying);
  };

  const randomIndex = Math.floor(Math.random() * songWords2.length);
  console.log(randomIndex);
  const song = songWords2.splice(randomIndex, 1)[0];

  console.log(songWords2);

  return (
    <Container>
      <GuessSongByWords
        isMensTeamPlaying={isMensTeamPlaying}
        changePlayingTeam={changePlayingTeam}
        song={song}
      />
    </Container>
  );
};

export default PlayingPage;
