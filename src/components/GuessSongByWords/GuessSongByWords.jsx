import { useState } from 'react';

import InfoBar from './InfoBar';
import PlayArea from './PlayArea';

const GuessSongByWords = ({ isMensTeamPlaying, changePlayingTeam }) => {
  const [menScore, setManScore] = useState(0);
  const [womenScore, setWomenScore] = useState(0);

  return (
    <InfoBar
      isMensTeamPlaying={isMensTeamPlaying}
      menScore={menScore}
      womenScore={womenScore}
    >
      <PlayArea isMensTeamPlaying={isMensTeamPlaying} />
    </InfoBar>
  );
};

export default GuessSongByWords;
