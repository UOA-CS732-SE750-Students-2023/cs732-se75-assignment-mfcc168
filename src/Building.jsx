import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Building.css';

function Building() {

  return (
    <div>
      <Parallax pages={4} style={{ top: '0', left: '0' }} horizontal={true}>
        <ParallaxLayer speed={0.1}>
          <div className="building_layer" id="sky_02"></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.2}>
          <div className="building_layer" id="building_01"></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.5}>
          <div className="building_layer" id="building_02"></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.3}>
          <div className="building_layer" id="ruins_01"></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.1}>
          <div className="building_layer" id="road_01"></div>
        </ParallaxLayer> 
        <ParallaxLayer speed={0.5} style={{ opacity: 0.6 }}>
          <div className="building_layer" id="smoke_01"></div>
        </ParallaxLayer> 
      </Parallax>
    </div>
  );
}

export default Building;
