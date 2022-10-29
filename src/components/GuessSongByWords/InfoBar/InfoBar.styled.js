import styled from 'styled-components';

export const TurnToPlay = styled.p`
  color: ${p => (p.isMensTeamPlaying ? 'blue' : 'pink')};
`;
