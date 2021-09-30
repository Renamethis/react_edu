import {Pulls} from './pulls.js';
import {Issues} from './issues.js';
import {Marketplace} from './marketplace.js';
import {Explore} from './explore.js';
import '../css/App.css';
import {Route, NavLink, BrowserRouter} from "react-router-dom";
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
      <BrowserRouter>
            <div className="popular">
                <Slider className="slider" {...settings}>
                <div>
                    <div className="slider__container">
                        <div className="slider__left-block">
                            <div className="slider-line">
                                <p>Repository_1</p>
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
                            HAAHAHAH
                        </div>
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                </Slider>
            </div>
      </BrowserRouter>
    );
}
