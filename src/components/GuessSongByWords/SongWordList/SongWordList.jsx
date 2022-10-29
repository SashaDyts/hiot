import SongWordItem from '../SongWordItem';

import { WordList, WordItem } from './SongWordList.styled';

const SongWordList = ({ songWords, isMensTeamPlaying, isTypingAnswer }) => {
  return (
    <WordList>
      {songWords.map((item, index) => (
        <WordItem key={index}>
          <SongWordItem
            word={item}
            isMensTeamPlaying={isMensTeamPlaying}
            isTypingAnswer={isTypingAnswer}
          />
        </WordItem>
      ))}
    </WordList>
  );
};

export default SongWordList;
