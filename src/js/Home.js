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
import Grid from '@mui/material/Grid';
import NewReleasesSharpIcon from '@mui/icons-material/NewReleasesSharp';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import StarBorderIcon from '@mui/icons-material/StarBorder';
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
export function Home() {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    if(!currentUser) {
        return <Redirect to="/login" />;
    }
    const settings = {
        dots: true
      };
    return (
        <BrowserRouter>
        <Grid container alignItems="stretch">
          <Grid item xs={7}>
              <div className="popular">
                <b className="big_text">Popular repositories</b>
                <Slider className="slider" {...settings}>
                  <div>
                      <div className="slider__container">
                          <div className="slider__left-block">
                              <div className="slider_item">
                                <b className="slider-line head_text">protocolbuffers/protobuf</b>
                              </div>
                              <div className="slider_item">
                                  <span className="slider-line head_text">Description</span>
                              </div>
                              <div className="slider_item">
                                 <p className="default_text">Protocol Buffers (a.k.a., protobuf) are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data. You can find protobuf's documentation on the Google Developers site.</p>
                              </div>
                          </div>
                          <div className = "slider__right-block">
                              <p><span className="slider-line head_text">Contributors</span></p>
                              <p><span className="link_text slider-line">Renamethis</span></p>
                              <p><span className="link_text slider-line">deannagarcia</span></p>
                              <p><span className="link_text slider-line">Roger Knapp</span></p>
                              <p><span className = "small_text"> + 774 contributors </span></p>
                          </div>
                      </div>
                  </div>
                  <div>
                  <div className="slider__container">
                      <div className="slider__left-block">
                          <div className="slider_item">
                            <b className="slider-line head_text">opencv/opencv</b>
                          </div>
                          <div className="slider_item">
                              <span className="slider-line head_text">Description</span>
                          </div>
                          <div className="slider_item">
                             <p className="default_text">Open Source Computer Vision Library</p>
                          </div>
                      </div>
                      <div className = "slider__right-block">
                          <p><span className="slider-line head_text">Contributors</span></p>
                          <p><span className="slider-line link_text">ozantonkal</span></p>
                          <p><span className="slider-line link_text">Alexander Karsakov</span></p>
                          <p><span className="slider-line link_text">Vitaly Tuzov</span></p>
                          <p><span className = "small_text"> + 1,306 contributors </span></p>
                      </div>
                  </div>
                  </div>
                </Slider>
              </div>
              <div className="activity">
              <b className="big_text">Activity</b>
              <p className="head_text_activity"><img className="avatar" src="https://avatars.githubusercontent.com/u/29013070?s=20&v=4"/><b>Nickname1 </b>&nbsp;pushed to <b>Nickname1/test_repo</b></p>
              <div className="activity_tab">
                <p className="activity_text">1 commit to <p className="branch">master</p></p>
                <p className="activity_text"><a href="#">12x4sa</a> Update</p>
              </div>
              <div className="slider_line"></div>
              <p className="head_text_activity"><img className="avatar" src="https://avatars.githubusercontent.com/u/29013070?s=20&v=4"/><b>Renamethis </b>&nbsp;pushed to <b>Nickname1/test_repo</b></p>
              <div className="activity_tab">
                <p className="activity_text">1 commit to <p className="branch">dev_branch_v1.01</p></p>
                <p className="activity_text"><a href="#">ab2fha</a> New system module</p>
              </div>
              <p className="head_text_activity"><img className="avatar" src="https://avatars.githubusercontent.com/u/29013070?s=20&v=4"/><b>opencv </b>&nbsp;pushed to <b>Nickname1/test_repo</b></p>
              <div className="activity_tab">
                <p className="activity_text">1 commit to <p className="branch">opencv_4.3.0</p></p>
                <p className="activity_text"><a href="#">t9s4f2</a> Updated cv::Size </p>
              </div>
              </div>
              </Grid>
              <Grid item xs>
              <div className="right_panel">
              <b className="big_text">Announce</b>
                <div className="announce">
                  <div className="announce_item">
                    <NewReleasesSharpIcon /> <b className="head_text">Save the data!</b>
                  </div>
                  <div className="announce_item">
                    <p className="small_text"> GitHub Universe is coming October 27 and 28. From product deep dives to interactive roundtables, you’ll gather the tips, tools, and connections to help you do the best work of your life. </p>
                  </div>
                  <button className="announce_item learn_button" type="submit">Learn More</button>
                </div>
                <div className="explore_repos">
                  <b className="head_text"> Explore repositories </b>
                  <div className="explores_item">
                    <p className="head_text">murtazahassan/Face-Recognition</p>
                    <p className="small_text">A Python project which can detect gender and age using OpenCV of the person (face) in a picture or through webcam. </p>
                    <div className="explores_container">
                      <div className="explores_line">
                        <CircleSharpIcon className="circle" />
                        <p className="explores_text">Python</p>
                      </div>
                      <div className="explores_line">
                        <StarBorderIcon />
                        <p className="explores_text">65</p>
                      </div>
                      </div>
                  </div>
                  <div className="line" />
                  <div className="explores_item">
                    <p className="head_text">smahesh29/Gender-and-Age-Detection</p>
                      <p className="small_text">Multi-view Face Detection Using Deep Convolutional Neural Networks  </p>
                    <div className="explores_container">
                      <div className="explores_line">
                        <CircleSharpIcon className="circle" />
                        <p className="explores_text">Python</p>
                      </div>
                      <div className="explores_line">
                        <StarBorderIcon />
                        <p className="explores_text">137</p>
                      </div>
                      </div>
                  </div>
                  <div className="line" />
                  <div className="explores_item">
                    <p className="head_text">guoyilin/FaceDetection_CNN</p>
                      <p className="small_text">Scalable, Portable and Distributed Gradient Boosting (GBDT, GBRT or GBM) Library, for Python, R, Java, Scala, C++ and more. Runs on single machine, Hadoop, Spark, Dask, Flink and DataFlow  </p>
                    <div className="explores_container">
                      <div className="explores_line">
                        <CircleSharpIcon className="circle_pink" />
                        <p className="explores_text">C++</p>
                      </div>
                      <div className="explores_line">
                        <StarBorderIcon />
                        <p className="explores_text">137</p>
                      </div>
                      </div>
                  </div>
                  <div className="line" />
                </div>
              </div>
            </Grid>
          </Grid>
        </BrowserRouter>

    );
}
