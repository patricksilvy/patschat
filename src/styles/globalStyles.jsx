import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #36393F;
    font-family: 'Ubuntu', sans-serif;
    color: #fff;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
`
 
export default GlobalStyle;