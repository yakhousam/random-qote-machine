import React, { Component } from 'react';
import './App.css';



function QuotText(props) {
  return (
    <p>
      {props.text}
    </p>
  )
}
function QuotAuthor(props) {
  return (
    <p>
      {props.author}
    </p>
  )
}
const styleContainer={
  width: '400px',
  margin: 'auto',
  border: 'solid 1px black'
}

 class App extends Component {
  render() {
    return (
      <div id="quote-box" style={styleContainer}>
        <QuotText text={'blablabla'} />
        <QuotAuthor author={'author'} />
        <button  id="new-quote">New Quote</button>
      </div>
    )
  }
}


export default App;
