import { useState } from 'react';

import SongWordItem from '../SongWordItem';
import SongWordList from '../SongWordList';
import Btn from '../Btn';

const songWords = ['we', 'will', 'we', 'will', 'rock'];

const PlayArea = ({ isMensTeamPlaying }) => {
  const [isTypingAnswer, setIsTypingAnswer] = useState(false);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <SongWordList
          songWords={songWords}
          isMensTeamPlaying={isMensTeamPlaying}
          isTypingAnswer={isTypingAnswer}
        />
        {/* <ul>
          {songWords.map((item, index) => (
            <li>
              <SongWordItem
                key={index}
                word={item}
                isMensTeamPlaying={isMensTeamPlaying}
                isTypingAnswer={isTypingAnswer}
              />
            </li>
          ))}
        </ul> */}

        {isTypingAnswer && <Btn isTypingAnswer={isTypingAnswer} />}
      </form>
      {!isTypingAnswer && <Btn setIsTypingAnswer={setIsTypingAnswer} />}
    </>
  );
};

export default PlayArea;
