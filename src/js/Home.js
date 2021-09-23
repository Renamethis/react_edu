import {Pulls} from './pulls.js';
import {Issues} from './issues.js';
import {Marketplace} from './marketplace.js';
import {Explore} from './explore.js';
import '../css/App.css';
import { Route, NavLink } from "react-router-dom";
import bell from '../images/bell.png'
import plus from '../images/plus.png'
import repo from '../images/repo.png'
import { Redirect } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./auth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactDOM from 'react-dom';
export function Home() {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    if(!currentUser) {
        return <Redirect to="/login" />;
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="App">
            <header className="App-header">
            <div className="header-left">
                <p className="icon">GETHUB</p>
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
            <div classname="header-right">
            <NavLink to="/explore"><img className="bell" src={bell}></img></NavLink>
            <NavLink to="/explore"><img className="plus" src={plus}></img></NavLink>
            </div>
            </header>
        <Route path="/pulls"><Pulls/>  </Route>
        <Route path="/issues"><Issues/>  </Route>
        <Route path="/marketplace"><Marketplace/>  </Route>
        <Route path="/explore"><Explore/>  </Route>
        <div className="Main">
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
            <div className="popular">
                <Slider className="slider" {...settings}>
                <div>
                    <div className="slider-line">
                        <b>Repository_1</b>
                        <p>Contributors:</p>
                    </div>
                    <div className="default_text">
                        Description
                    </div>
                    <div>
                        <canvas id="test" width="200" height="50">

                        </canvas>
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                </Slider>
            </div>
            <div className="activity">

            </div>
        </div>
        </div>
    );
}
