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
const Answer  = styled.div`
font-size: 10em;
display: inline-block;
border:2px solid #ccc;
border-radius: 10px;
width: 400px;
height: 250px;
margin: 10px;
`
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
const IQ180 = () => {
  const [game, setGame] = useState(['---',0,0,0,0,0])
  const newGame = () => {
    let randomList = []
    for(let i=1;i<=5;i++) {
      let temp = Math.floor(Math.random() * 10);
      randomList[i] = temp
    }
    let answer = getRandomArbitrary(10,999)
    randomList[0] = answer
    setGame(randomList)
  }
    return (
      <Area>
        <div className="text-8xl">เกม 180IQ</div>
        <NumberArea>
          <Number>{game[1]}</Number>
          <Number>{game[2]}</Number>
          <Number>{game[3]}</Number>
          <Number>{game[4]}</Number>
          <Number>{game[5]}</Number>
        </NumberArea>
        <div className='text-2xl'>ผลลัพธ์</div>
        <Answer>{game[0]}</Answer>
        <div>
          <button className='border-2 border-sky-500 p-2 rounded-lg text-2xl' onClick={newGame}>สุ่มตัวเลข</button>
        </div>
      </Area>
    )
}
export default IQ180;
