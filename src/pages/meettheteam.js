import React from 'react';
import posed from 'react-pose';
import SkyLight from 'react-skylight';

import '../App.css';

const Headshot = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  press: {
    scale: 1.1,
  }
});

class MeetTheTeam extends React.Component {
  render() {
    return (
      <div className="page">
        <SkyLight className="skylight" hideOnOverlayClicked ref={ref => this.bio = ref} title="About Ross">
          Testing Bio
        </SkyLight>
        <Headshot className="headshot" image="headshot_ross.jpg" onClick={() => this.bio.show()}/>
      </div>
    );
  }
}

export default MeetTheTeam;
