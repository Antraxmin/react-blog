/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [applist, setApplist] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like, setlike] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={() => {
        let list_copy = [...applist];
        list_copy.sort();
        setApplist(list_copy);
      }}
      >정렬</button>
      <button onClick={ ()=>{
        let copy = [...applist];
        copy[0] = '여자코트 추천';
        setApplist(copy);
      } }>글 수정하기</button>
      
      <div className="list">
        <h4>{ applist[0] } <span onClick={ () => {setlike(like+1)} }>👍</span> {like} </h4>
        <p>10월 10일 발행</p>
      </div>
      <div className="list">
        <h4>{ applist[1] }</h4>
        <p>10월 10일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{ applist[2] }</h4>
        <p>10월 10일 발행</p>
      </div>
      {
        modal == true ? <Modal/> : null
      }
    </div>
  );
}

// 컴포넌트 
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
