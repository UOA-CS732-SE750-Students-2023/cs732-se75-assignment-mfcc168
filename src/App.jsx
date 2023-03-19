import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import diver from './images/diver.png'
import sky_diver from './images/sky_diver.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2}>
          <div class="animation_layer parallax" id="sun"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="mountain3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div class="animation_layer parallax" id="mountain2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="mountain1"></div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 0.3 }}>
        <img src={sky_diver} width="300"></img>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.25}>
          <div class="animation_layer parallax" id="underwater"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={-0.5}>
        <img src={diver}></img>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.25} horizontal={true}>
          <div class="animation_layer parallax" id="cloud"></div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
