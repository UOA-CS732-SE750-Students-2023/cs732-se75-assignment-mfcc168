import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Building.css';

function Building() {

  return (
    <div>
      <Parallax pages={4} style={{ top: '0', left: '0' }} horizontal={true}>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="building_layer building" id="sky_02"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="building_layer building" id="building_01"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="building_layer building" id="building_02"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="building_layer building" id="ruins_01"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="building_layer building" id="road_01"></div>
        </ParallaxLayer> 
        <ParallaxLayer offset={0} speed={0.5} style={{ opacity: 0.6 }}>
          <div className="building_layer building" id="smoke_01"></div>
        </ParallaxLayer> 
      </Parallax>
    </div>
  );
}

export default Building;
