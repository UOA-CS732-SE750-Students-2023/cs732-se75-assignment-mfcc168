import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css';
import TextBlock from './TextBlock';
import moon from './images/moon.png'
import satellite from './images/satellite.png'
import rocket from './images/rocket.png'
import astronaut from './images/astronaut.png'

function App() {

  return (
    <div className="App">
      {/* Parallax component with 5 pages */}
      <Parallax pages={5} style={{ top: '0', left: '0' }} className="animation">
        {/* Background layer with a slower speed */}
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="parallax_layer parallax" id="background"></div>
        </ParallaxLayer>
        {/* Sun layer with faster speed */}
        <ParallaxLayer offset={0} speed={2}>
          <div className="parallax_layer parallax" id="sun"></div>
        </ParallaxLayer>
        {/* Mountain layers with different speeds */}
        <ParallaxLayer offset={0} speed={-0.6}>
          <div className="parallax_layer parallax" id="mountain3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="parallax_layer parallax" id="mountain2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.34}>
          <div className="parallax_layer parallax" id="mountain1"></div>
        </ParallaxLayer>

        {/* Colored background layers with different opacities and speeds */}
        <ParallaxLayer offset={3} speed={-0.25} style={{ opacity: 0.6 }}>
          <div className="parallax_layer parallax" id="green_background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5} style={{ opacity: 0.6 }}>
          <div className="parallax_layer parallax" id="yellow_background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.3} style={{ opacity: 0.6 }}>
          <div className="parallax_layer parallax" id="red_background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3} style={{ opacity: 0.6 }}>
        <div className="parallax_layer parallax" id="blue_background"></div>
        </ParallaxLayer>
        {/* Black background layer with a slower speed */}
        <ParallaxLayer offset={1} speed={0.25}>
          <div className="parallax_layer parallax" id="black_background"></div>
        </ParallaxLayer>

        {/* Cloud layer with horizontal movement */}
        <ParallaxLayer offset={0} speed={0.5} horizontal={true}>
          <div className="parallax_layer parallax" id="cloud"></div>
        </ParallaxLayer>

        {/* TextBlock component with sticky scrolling behavior */}
        <ParallaxLayer sticky={{ start: 1.1, end: 2.9 }} speed={10}>
          <TextBlock />
        </ParallaxLayer>


        {/* Icon component with different speeds and offset */}
        <ParallaxLayer offset={2} speed={1}>
          <img src={moon} width="100px" id="moon"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.1}>
          <img src={satellite} width="150px" id="satellite"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2}>
          <img src={rocket} width="100px" id="rocket"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={-3}>
          <img src={astronaut} width="100px" id="astronaut"></img>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
