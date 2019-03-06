import React, { Component } from 'react';
import './App.css';
import {Howl, } from 'howler';
import './play-button-4/css/style.css';

class App extends Component {
  state = {
  scream: 0
  }
  play =()=>{
    console.log('Play Click');
    this.sound.play();
    this.setState({ 
      scream: this.state.scream += 1})
    
  }

  sound = new Howl({
    src: '0477.mp3'
  });

  render() {
    return (
      <div className="App">
        <button className="play-btn" href="#" onClick={this.play} />
        {this.state.scream}
      </div>
    );
  }
}

export default App;
