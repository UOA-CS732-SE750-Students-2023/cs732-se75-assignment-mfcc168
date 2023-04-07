import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Galaxy.css';

function Galaxy() {

  return (
    <div>
      <Parallax pages={11} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0} factor={11}>
          <div className="galaxy_layer galaxy" id="r_13"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_05"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_01"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 2, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_02"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 9, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_03"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 9, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_04"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_06"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 4, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_07"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 5, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_08"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 6, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_09"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 9, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_10"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 7, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_11"></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 8, end: 9  }}>
          <div className="galaxy_layer galaxy" id="r_12"></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Galaxy;