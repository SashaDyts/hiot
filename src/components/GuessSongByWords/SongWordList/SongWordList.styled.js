import styled from 'styled-components';

export const WordList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const WordItem = styled.li`
  :not(:first-child) {
    margin-top: 5px;
  }
`;
