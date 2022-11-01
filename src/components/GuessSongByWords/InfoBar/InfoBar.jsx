import RoundInfo from '../RoundInfo';
import NextTeamPlay from '../NextTeamPlay';

import { TurnToPlay } from './InfoBar.styled';

const InfoBar = ({
  isMensTeamPlaying,
  menScore,
  womenScore,
  children,
  isPlayingNow,
  isWonRound,
  answer,
  rightAnswer,
  changePlayingTeam,
  song,
}) => {
  const score = isMensTeamPlaying ? menScore : womenScore;
  // console.log(isWonRound);

  if (menScore >= 10 || womenScore >= 10) {
    return (
      <>
        <p>
          Команда {isMensTeamPlaying ? 'Чоловіків' : 'Жінок'} набирає 10 балів
          та виграє!
        </p>
      </>
    );
  }
  return (
    <>
      <TurnToPlay isMensTeamPlaying={isMensTeamPlaying}>
        Команда {isMensTeamPlaying ? 'Чоловіків' : 'Жінок'}, Ваша черга грати!
      </TurnToPlay>
      {isPlayingNow ? (
        children
      ) : (
        <>
          <RoundInfo
            isWonRound={isWonRound}
            answer={answer}
            rightAnswer={rightAnswer}
            score={score}
            song={song}
          />
          <NextTeamPlay
            isMensTeamPlaying={isMensTeamPlaying}
            changePlayingTeam={changePlayingTeam}
          />
        </>
      )}
      <p>
        Чоловіки: {menScore} || Жінки: {womenScore}
      </p>
    </>
  );
};

export default InfoBar;
