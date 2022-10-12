/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [applist, setApplist] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like, setlike] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);   // 현재 title UI를 저장할 state

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

      <div>
        {
          // applist 요소 개수만큼 function(a, i)을 반복하여 호출한다. 
          applist.map(function(a, i) {
            return (
              <div className="list" key={i}>
                <h4 onClick={ ()=>{ setModal(!modal); setTitle(i);}}> {applist[i]} 
                  <span onClick={ () => { setlike(like+1)} }>👍</span>
                  {like}</h4>
                <p>2월 18일 발행</p>
              </div>
            )
          })
        }
      </div>
{/* 
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
      </div> */}
      {
       // 부모 컴포넌트인 App()에서 자식 컴포넌트인 Modal()로 state 전송
        modal == true ? <Modal 
        title={title} 
        color={'#EDE4E0'} 
        setApplist={setApplist} 
        applist={applist}/> 
        : null
      }
    </div>
  );
}

// 컴포넌트 
function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.applist[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div> 
  )
}

export default App;
