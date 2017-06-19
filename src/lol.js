import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Titre = styled.h1`
font-size: 1.5em;
text-align: center;
vertical-align:middle;
color:green;
animation: ${rotate360} 2s linear infinite;
`;

export default Titre;