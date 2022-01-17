import './index.css';
import { useState } from "react";
import Game24 from './components/Game24';
import IQ180 from './components/IQ180';
import styled from 'styled-components';
const Game = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;
`
const Footer = styled.footer`
  position: absolute;
  display: block;
  width: 100%;
  bottom: 10px;
  text-align: center;
`

function App() {
  const [state, setState] = useState('game24')
  return (
    <div className="App">
      <Game>
        { state === 'game24' && <Game24 /> }
        { state === 'iq180' && <IQ180 /> }
      </Game>
      <Footer>
        <a 
          href="#" 
          className={ state != 'game24' ? 'underline' : ''}
          onClick={() => {setState('game24')}}
        >เกม 24</a> | <a href="#" className={ state != 'iq180' ? 'underline' : ''} onClick={() => {setState('iq180')}}>เกม 180IQ</a> <br />
        Created by <a href="http://nppi3enz.github.io" target="_blank">NPPi3enz</a>
      </Footer>
    </div>
  );
}

export default App;
