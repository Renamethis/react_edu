import React from 'react';
import Globe from 'react-globe.gl';
import '../css/start.css';
export function StartPage() {
  const N = 300;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 5,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
  }));
  return (
  <div className="Main">
    <div className="MainPanel">
      <p className="head_text">Where the world builds software </p>
      <p className="default_text">Millions of developers and companies build, ship, and maintain their software on GetHub—the largest and most advanced development platform in the world.</p>
      <div className="register">
        <input placeholder="Email adress" className="email" type="text" name="name"/>
        <button className="btn" type="submit">Sign up</button>
      </div>
  </div>
    <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={gData}
        pointAltitude="size"
        pointColor="color"
        backgroundColor="black"
        width="700"
      />
  </div>
  );
}
