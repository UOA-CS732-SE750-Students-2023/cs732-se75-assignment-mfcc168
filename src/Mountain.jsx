import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Mountain.css';
import TextBlock from './TextBlock';

function Mountain() {

  return (
    <div>
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0}>
          <div className="mountain_layer" id="sky_01"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={5}>
          <div className="mountain_layer" id="sun_01"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.5} factor={1.5}>
          <div className="mountain_layer" id="mountain_2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.25} factor={1.5}>
          <div className="mountain_layer" id="mountain_1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2} horizontal={true}>
          <div className="mountain_layer" id="cloud_01"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0} factor={1.5}> 
          <div className="mountain_layer" id="mountain_3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.4} >
          <div className="mountain_layer" id="green_background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} factor={1.5}>
          <div className="mountain_layer" id="man_01"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Mountain;
