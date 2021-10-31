import React from 'react';
import {NavLink} from "react-router-dom";
import repo from "../images/repo.png";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PlusIcon from '@material-ui/icons/ControlPoint';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export const Layout = ({children}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <NavLink to="/explore">
            <NotificationsNoneIcon className="bell"/>
          </NavLink>
          <IconButton component="span" onClick={handleClick}>
            <PlusIcon className="plus" />
          </IconButton>
            <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>New repository</MenuItem>
          <MenuItem onClick={handleClose}>Import repository</MenuItem>
          <MenuItem onClick={handleClose}>New gist</MenuItem>
          <MenuItem onClick={handleClose}>New organization</MenuItem>
        </Menu>
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
