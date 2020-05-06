import React, {Fragment} from 'react';
import TweenComponent from './TweenComponent';
import { Link } from 'gatsby';

const Intro = () => {

    return (
        <Fragment>
            <div className="topIntro">
                <div className="inner">
                    <TweenComponent></TweenComponent>
                </div>
            </div>
            <div className="work">
                <div className="inner">
                    <h2>WORK</h2>     
                    <div className="projectList">                   
                        <ul>
                            <li>
                                <h3>project01</h3>
                                <span className="conerDecoration"></span>
                                <span className="conerDecoration"></span>
                                <div className="projectInfo">
                                    <div className="imgWrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/home2-1600x865.jpg")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                        <div className="btnWrap">
                                            <a href="/">
                                                <span className="res">Responsive</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="textWrap">
                                        <p>2018</p>
                                        <p className="pTitle">eroundmall</p>
                                        <p>
                                            <span className="html5">HTML5</span>
                                            <span className="css3">CSS3</span>
                                            <span className="javascript">javascript</span>
                                            <span className="jquery">jQuery</span>
                                            <span className="react">react</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <h3>project02</h3>
                                <span className="conerDecoration"></span>
                                <span className="conerDecoration"></span>
                                <div className="projectInfo">
                                    <div className="imgWrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/img-project-eround.png")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                        <div className="btnWrap">
                                            <a href="https://www.eroundmall.com/" target="_blank">
                                                <span className="pc_m">PC / Mobile</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <h3>project03</h3>
                                <span className="conerDecoration"></span>
                                <span className="conerDecoration"></span>
                                <div className="projectInfo">
                                    <div className="imgWrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/img-project-YIC.png")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                        <div className="btnWrap">
                                            <a href="http://www.yic.co.kr/" target="_blank">
                                                <span className="res">Responsive</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <h3>project04</h3>
                                <span className="conerDecoration"></span>
                                <span className="conerDecoration"></span>
                                <div className="projectInfo">
                                    <div className="imgWrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/img-project-emh.png")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                        <div className="btnWrap">
                                            <a href="http://www.emhsystem.com/" target="_blank">
                                                <span className="pc_m">PC / Mobile</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Intro