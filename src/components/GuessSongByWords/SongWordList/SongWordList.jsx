import SongWordItem from '../SongWordItem';

import { WordList, WordItem } from './SongWordList.styled';

const SongWordList = ({
  songWords,
  isMensTeamPlaying,
  isTypingAnswer,
  onClick,
  getAnswer,
  isError,
}) => {
  return (
    <WordList>
      {songWords.map((item, index) => (
        <WordItem key={index}>
          <SongWordItem
            getAnswer={getAnswer}
            index={index}
            onClick={onClick}
            word={item}
            isMensTeamPlaying={isMensTeamPlaying}
            isTypingAnswer={isTypingAnswer}
            isError={isError}
          />
        </WordItem>
      ))}
    </WordList>
  );
};

export default SongWordList;
