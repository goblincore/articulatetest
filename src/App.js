import React, { Component } from 'react';
import Flashcards from './flashcards/Flashcards';
import './App.css';
//getting dummy data from file
import dummyData from './dummyData.json';

//take raw JSON and stringify
const data = JSON.stringify(dummyData);

//conver to JavaScript Object
const sampleData = JSON.parse(data);

class App extends Component {
  render() {
    console.log('sample data',sampleData);
    return (
      <div className="App">
       <Flashcards source={sampleData} />
      </div>
    );
  }
}

export default App;
