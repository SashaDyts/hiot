import { useState } from 'react';

import { WordContainer } from './SongWordItem.styled';
import { Word } from './SongWordItem.styled';
import { Input } from './SongWordItem.styled';
import { WordBtn } from './SongWordItem.styled';

const SongWordItem = ({
  word,
  isMensTeamPlaying,
  isTypingAnswer,
  onClick,
  index,
  getAnswer,
  isError,
}) => {
  const [input, setInput] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  const a = p => {
    console.log(p);
  };

  return (
    <>
      {!isTypingAnswer || !isHidden ? (
        <WordBtn
          data-index={index}
          type="button"
          isMensTeamPlaying={isMensTeamPlaying}
          isHidden={isHidden}
          isTypingAnswer={isTypingAnswer}
          onClick={e => {
            setIsHidden(false);
            onClick(e);

            getAnswer(e);
          }}
        >
          <Word isHidden={isHidden}>{word}</Word>
        </WordBtn>
      ) : (
        <>
          <Input
            data-index={index}
            isMensTeamPlaying={isMensTeamPlaying}
            value={input}
            onChange={e => {
              setInput(e.currentTarget.value);
              getAnswer(e);
            }}
            placeholder="Введіть слово"
          />
          {isError && <p>Введіть Слово!!!</p>}
        </>
      )}
    </>
  );

  return !isTypingAnswer || !isHidden ? (
    <WordBtn
      data-index={index}
      type="button"
      isMensTeamPlaying={isMensTeamPlaying}
      isHidden={isHidden}
      isTypingAnswer={isTypingAnswer}
      onClick={e => {
        setIsHidden(false);
        onClick(e);
      }}
    >
      <Word isHidden={isHidden}>{word}</Word>
    </WordBtn>
  ) : (
    <Input
      data-index={index}
      isMensTeamPlaying={isMensTeamPlaying}
      value={input}
      onChange={e => {
        setInput(e.currentTarget.value);
        getAnswer(e);
      }}
      placeholder="Введіть слово"
    />
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
