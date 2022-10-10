/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [applist, b] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like, setlike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ applist[0] } <span onClick={ () => {setlike(like+1)} }>👍</span> {like} </h4>
        <p>10월 10일 발행</p>
      </div>
      <div className="list">
        <h4>{ applist[1] }</h4>
        <p>10월 10일 발행</p>
      </div>
      <div className="list">
        <h4>{ applist[2] }</h4>
        <p>10월 10일 발행</p>
      </div>
    </div>
  );
}

export default App;
