const NextTeamPlay = ({ isMensTeamPlaying, changePlayingTeam }) => {
  return (
    <>
      <p> {isMensTeamPlaying ? 'Жінки, готові?' : 'Чоловіки, готові?'}</p>
      <button
        type="button"
        onClick={() => {
          changePlayingTeam();
        }}
      >
        Вперед!
      </button>
    </>
  );
};

export default NextTeamPlay;
