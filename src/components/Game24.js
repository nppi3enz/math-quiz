import styled from 'styled-components';
import { useState } from "react";

const Area = styled.div`
  width:100%;
  text-align: center;
`
const NumberArea = styled.div`
  margin: 20px;
`
const Number = styled.div`
  font-size: 10em;
  display: inline-block;
  border:2px solid #ccc;
  border-radius: 10px;
  width: 200px;
  height: 250px;
  margin: 10px;
`
const Game24 = () => {
  const [game, setGame] = useState(['-','-','-','-'])
  const newGame = () => {
    let randomList = []
    for(let i=0;i<4;i++) {
      let temp = Math.floor(Math.random() * 9)+1;
      randomList[i] = temp
    }
    setGame(randomList)
  }
    return (
      <Area>
        <div className="text-8xl">เกม 24</div>
        <NumberArea>
          <Number>{game[0]}</Number>
          <Number>{game[1]}</Number>
          <Number>{game[2]}</Number>
          <Number>{game[3]}</Number>
        </NumberArea>
        <div>
          <button className='border-2 border-sky-500 p-2 rounded-lg text-2xl' onClick={newGame}>สุ่มตัวเลข</button>
        </div>
      </Area>
    )
}
export default Game24;
