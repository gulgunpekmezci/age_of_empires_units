import * as React from 'react';
import Background from '../assets/images/aoeBackground.jpeg';
import '../assets/style/home.scss';

const Home = () => {
  return <div className="home-container">
    <div className="image-container">
      <img className="background-image" src={Background}/>
    </div>
    <div className="information-container">
      <div className="information-title">
        <h3>What is Age Of Empire ?</h3>
      </div>
      <div className="information-body">
        <p>
          Age of Empires is the original real-time strategy computer game set in
          historical antiquity.
        </p>
        <p>
          Age of Empires requires the player to develop a civilization from a
          handful of hunter-gatherers to an expansive Iron Age Empire. To
          assure victory, the player must gather resources in order to pay for
          new units, buildings and more advanced technology.
        </p>
      </div>
    </div>
  </div>
}

export default Home;
