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

const expect = [1111,1112,1113,1114,1115,1116,1117,1119,1122,1123,1124,1125,1133,1159,1167,1177,1178,1179,1189,1199,1222,1223,1299,1355,1499,1557,1558,1577,1667,1677,1678,1777,1778,1899,1999,2222,2226,2279,2299,2334,2555,2556,2599,2677,2777,2779,2799,2999,3358,3467,3488,3555,3577,4459,4466,4467,4499,4779,4999,5557,5558,5569,5579,5777,5778,5799,5899,5999,6667,6677,6678,6699,6777,6778,6779,6788,6999,7777,7778,7779,7788,7789,7799,7888,7899,7999,8888,8889,8899,8999,9999]
const Game24 = () => {
  const [game, setGame] = useState(['-','-','-','-'])
  const newGame = () => {
    let randomList = []
    let ind
    do {
      for(let i=0;i<4;i++) {
        let temp = Math.floor(Math.random() * 9)+1;
        randomList[i] = temp
      }
      ind = expect.indexOf(game[0]*1000 + game[1]*100 + game[2]*10 + game[3]);
    } while(ind > 0);
    
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
