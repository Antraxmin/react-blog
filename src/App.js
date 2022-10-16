/*eslint-disable*/
import { useState } from 'react';
import './App.css'

function App(){
 
  const [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  const [따봉, 따봉변경] = useState(0);
  const [modal, setModal] = useState(false);



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
        }}>버튼</button>
        <button onClick={()=>{
        let copy = [...글제목].sort();
        글제목변경(copy);
        }}>정렬</button>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] } <span>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] } <span>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      {
        modal == true ? <Modal></Modal> : null
      }
    </div>
  )
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
