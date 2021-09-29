import React from 'react';
import {NavLink} from "react-router-dom";
import bell from "../images/bell.png";
import plus from "../images/plus.png";
import repo from "../images/repo.png";

export const Layout = ({children}) => {
  return (
  <div className="Main">
    <header className="App-header">
      <div className="header-left">
        <NavLink style={{textDecoration: 'none', color: 'white'}} to="/">
          <p className="icon">GETHUB</p>
        </NavLink>
        <form>
          <label>
            <input placeholder="Search or jump to..." className="search" type="text" name="name"/>
          </label>
        </form>
        <li className="li_navbar">
          <NavLink to="/pulls" className="title__text">Pull requests</NavLink>
          <NavLink to="/issues" className="title__text">Issues</NavLink>
          <NavLink to="/marketplace" className="title__text">Marketplace</NavLink>
          <NavLink to="/explore" className="title__text">Explore</NavLink>
        </li>
      </div>
      <div className="header-right">
        <NavLink to="/explore"><img className="bell" src={bell}></img></NavLink>
        <NavLink to="/explore"><img className="plus" src={plus}></img></NavLink>
      </div>
    </header>
    <div className="sidebar">
      <div className="nickname">
        <img className="avatar" src="https://avatars.githubusercontent.com/u/29013070?s=20&v=4"/>
        <p>Nickname</p>
      </div>
      <div className="line"></div>
      <div className="reps">
        <b>Repositories</b>
        <button className="btn" type="submit">New</button>
      </div>
      <input placeholder="Find a repository..." className="frep" type="text" name="name"/>
      <div className="links">
        <a href="#"><img className="repo_img" src={repo}/>Nickname/Repo1</a>
        <a href="#"><img className="repo_img" src={repo}/>Nickname/Repo2</a>
        <a href="#"><img className="repo_img" src={repo}/>Nickname/Repo3</a>
      </div>
      <div className="line"></div>
      <b className="head_text">Recent Activity</b>
      <p className="small_text">When you take actions across GitHub, we’ll provide links to that activity here.</p>
    </div>
    <div style={{marginLeft: '252px'}}>
      {children}
    </div>
  </div>
  )
}