import React, { useCallback, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import '../css/start.css';
import indexBy from 'index-array-by';
import * as d3 from "d3";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
export const  StartPage = ({history}) => {
  const { height, width } = useWindowDimensions();
  const handleSumbit = useCallback(async event => {
    event.preventDefault();
    history.push("/login")
  }, [history]);
  const handleClick = useCallback(async event => {
    event.preventDefault();
    history.push("/signup")
  }, [history]);
  const { useState, useEffect, useRef } = React;

  const COUNTRY = 'United States';
  const OPACITY = 0.22;

  const airportParse = ([airportId, name, city, country, iata, icao, lat, lng, alt, timezone, dst, tz, type, source]) => ({ airportId, name, city, country, iata, icao, lat, lng, alt, timezone, dst, tz, type, source });
  const routeParse = ([airline, airlineId, srcIata, srcAirportId, dstIata, dstAirportId, codeshare, stops, equipment]) => ({ airline, airlineId, srcIata, srcAirportId, dstIata, dstAirportId, codeshare, stops, equipment});
    const globeEl = useRef();
    const [airports, setAirports] = useState([]);
    const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // load data
    Promise.all([
      fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat').then(res => res.text())
        .then(d => d3.csvParseRows(d, airportParse)),
      fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat').then(res => res.text())
        .then(d => d3.csvParseRows(d, routeParse))
    ]).then(([airports, routes]) => {

      const byIata = indexBy(airports, 'iata', false);

      const filteredRoutes = routes
        .filter(d => byIata.hasOwnProperty(d.srcIata) && byIata.hasOwnProperty(d.dstIata)) // exclude unknown airports
        .filter(d => d.stops === '0') // non-stop flights only
        .map(d => Object.assign(d, {
          srcAirport: byIata[d.srcIata],
          dstAirport: byIata[d.dstIata]
        }))
        .filter(d => d.srcAirport.country === COUNTRY && d.dstAirport.country !== COUNTRY); // international routes from country

      setAirports(airports);
      setRoutes(filteredRoutes);
    });
  }, []);
  useEffect(() => {
    // aim at continental US centroid
    globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 });
  }, []);
  return (
  <div className="StartMain">
    <div className="MainPanel">
      <p className="head_text_start">Where the world builds software </p>
      <p className="default_text_start">Millions of developers and companies build, ship, and maintain their software on GetHub—the largest and most advanced development platform in the world.</p>
      <form className="register" onSubmit={handleSumbit}>
          <input placeholder="Email adress" className="email" name="email" type="email"/>
          <button className="button" type="submit" >Sign In</button>
          <button className="button" type="button" style={{background:"#69a6f8"}} onClick={handleClick}>Sign up</button>
      </form>
  </div>
    <Globe
        className="globe"
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"

        arcsData={routes}
        arcLabel={d => `${d.airline}: ${d.srcIata} &#8594; ${d.dstIata}`}
        arcStartLat={d => +d.srcAirport.lat}
        arcStartLng={d => +d.srcAirport.lng}
        arcEndLat={d => +d.dstAirport.lat}
        arcEndLng={d => +d.dstAirport.lng}
        arcDashLength={0.25}
        arcDashGap={1}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={4000}
        arcColor={d => [`rgba(0, 255, 0, ${OPACITY})`, `rgba(255, 0, 0, ${OPACITY})`]}
        arcsTransitionDuration={0}
        pointsData={airports}
        pointColor={() => 'orange'}
        pointAltitude={0}
        pointRadius={0.02}
        pointsMerge={true}
        width={width*0.55}
        height={height}
        backgroundColor={"#000000"}
      />
  </div>);
}
