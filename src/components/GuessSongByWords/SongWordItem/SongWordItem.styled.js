import styled from 'styled-components';

const wordBg = ({ isMensTeamPlaying, isHidden }) => {
  // return p.isMensTeamPlaying ? 'blue' : 'pink';
  if (isMensTeamPlaying) {
    if (isHidden) {
      return 'rgba(2, 0, 255, 0.8)';
    }
    return 'rgba(68, 67, 225, 0.8)';
  } else {
    if (isHidden) {
      return 'rgba(255, 0, 210, 0.8)';
    }
    return 'rgba(232, 93, 237, 0.8)';
  }
};

export const WordBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  width: 100px;
  height: 50px;

  color: white;
  /* background-color: color(); */
  background-color: ${p => wordBg(p)};
  cursor: pointer;

  border: none;
`;

export const WordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 50px;
  :not(:first-child) {
    margin-top: 5px;
  }

  color: white;
  /* background-color: color(); */
  background-color: ${p => wordBg(p)};
  cursor: pointer;
`;

export const Word = styled.p`
  display: ${p => (p.isHidden ? 'none' : 'block')};
`;

export const Input = styled.input`
  width: 100px;
  height: 50px;
  margin: 0;
  padding: 0;
  background-color: rgba(247, 2, 2, 0.8);
  text-align: center;
  font-size: 18px;
  border: none;
`;
