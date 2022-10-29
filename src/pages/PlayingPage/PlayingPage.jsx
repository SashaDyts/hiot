import React, { useState } from 'react';

import GuessSongByWords from 'components/GuessSongByWords';

const PlayingPage = () => {
  const [isMensTeamPlaying, setIsMensTeamPlaying] = useState(true);

  const changePlayingTeam = () => {
    setIsMensTeamPlaying(!isMensTeamPlaying);
  };

  return (
    <GuessSongByWords
      isMensTeamPlaying={isMensTeamPlaying}
      changePlayingTeam={changePlayingTeam}
    />
  );
};

export default PlayingPage;
