import { TurnToPlay } from './InfoBar.styled';

const InfoBar = ({ isMensTeamPlaying, menScore, womenScore, children }) => {
  return (
    <>
      <TurnToPlay isMensTeamPlaying={isMensTeamPlaying}>
        Команда {isMensTeamPlaying ? 'Чоловіків' : 'Жінок'}, Ваша черга грати!
      </TurnToPlay>
      <p>Бали: {isMensTeamPlaying ? menScore : womenScore}</p>
      {children}
    </>
  );
};

export default InfoBar;
