import React, { Component } from 'react';
import './App.css';
import {Howl, } from 'howler';
import './play-button/css/style.css';

class App extends Component {
  state = {
      scream: 0
  }

  play =()=>{
    console.log('Play Click');
    this.gong.play();
    this.yes.play();
    this.state ={
        scream: + 1
   }
    // this.setState({ 
    //   scream: this.state.scream += 1})
  }

  pause=()=>{
    console.log('Pause Click');
    this.yes.stop();
  }

  // sound = new Howl({
  //   src: ['gong.mp3','0477.mp3', ]
  // });
  gong = new Howl({
    src: ['gong.mp3'],
    autoplay: false,
    loop: false,
    volume: 1,
    onend: function() {
      console.log('Gong Finished!');
    }
  })

  yes = new Howl({
    src: ['Yes.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
      // volume  += 0.5;
    }
  });

  //  Play returns a unique Sound ID that can be passed
  // into any method on Howl to control that specific sound.
  // id1 = Howl.play();
  // id2 = Howl.play();
  
  // Fade out the first sound and speed up the second.
  // id1.fade(1, 0, 1000, id1);
  // id2.rate(1.5, id2);

  render() {
    return (
      <div className="App">
        <button className="play-btn" href="#" onClick={this.play} />
        <p>Would you Click Me? <br />
            I'd Click Me. </p>
        {this.state.scream}
        <footer>
          <button className="pause-btn" onClick={this.pause}>||</button>
        </footer>
      </div>
    );
  }
}

export default App;
