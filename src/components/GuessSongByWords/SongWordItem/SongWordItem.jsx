import { useState } from 'react';

import { WordContainer } from './SongWordItem.styled';
import { Word } from './SongWordItem.styled';
import { Input } from './SongWordItem.styled';
import { WordBtn } from './SongWordItem.styled';

const SongWordItem = ({ word, isMensTeamPlaying, isTypingAnswer }) => {
  const [isHidden, setIsHidden] = useState(true);

  return !isTypingAnswer || !isHidden ? (
    <WordBtn
      type="button"
      isMensTeamPlaying={isMensTeamPlaying}
      isHidden={isHidden}
      onClick={() => {
        setIsHidden(false);
      }}
    >
      <Word isHidden={isHidden}>{word}</Word>
    </WordBtn>
  ) : (
    <Input></Input>
  );

  // return (
  //   <WordContainer
  //     isMensTeamPlaying={isMensTeamPlaying}
  //     isHidden={isHidden}
  //     onClick={() => {
  //       setIsHidden(false);
  //     }}
  //   >
  //     {!isTypingAnswer || !isHidden ? (
  //       <Word isHidden={isHidden}>{word}</Word>
  //     ) : (
  //       <Input></Input>
  //     )}
  //   </WordContainer>
  // );
};

export default SongWordItem;
