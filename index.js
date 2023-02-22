import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Funct1(){
  return(
    <>
    <ul>
      <li><a href='#'>Home</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Contact</a></li>
    </ul>
    </>
  )
}


function Funct2(){
  return(
    <>
    <h1>Reasons I'm excited to learn React</h1>
    </>
  )
}

function Funct3(){
  return(
    <>
    <ol>
      <li>It's a popular library,so I'll be able to fit in with the cool kids!</li>
      <li>I'm more likely to get a job as a developer if i know React</li> 
    </ol>
    </>
  )
}


function Funct4(){
  return(
    <>
  <footer>
      
 <p>© 2021 Ziroll development. All rights reserved.</p>
 </footer>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><Funct1/> <Funct2/><Funct3/><Funct4/></> );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
