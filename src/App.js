/*eslint-disable*/
import { useState } from 'react';
import './App.css'

function App(){
 
  const [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  const [따봉, 따봉변경] = useState(0);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);   // 현재 title 상태를 state에 저장



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

      {
        글제목.map(function(a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>{ 글제목[i] } 
              <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> { 따봉 }</h4>
              <p>2월 18일 발행</p>
            </div>
          )
        })
      }

      { 
         modal == true ? <Modal title={title} 글제목={글제목}/> : null
      }

    </div>
  )
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
