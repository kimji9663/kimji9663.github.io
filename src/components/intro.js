import React, {Fragment} from 'react';
import TweenComponent from './TweenComponent';
import { Link } from 'gatsby';

const Intro = () => {

    return (
        <Fragment>
            <div className="top-intro">
                <div className="inner">
                    <TweenComponent></TweenComponent>
                </div>
            </div>
            <div className="work">
                <div className="inner">
                    <h2>WORK</h2>     
                    <div className="project__list">                   
                        <ul>
                            <li>
                                <h3>project01</h3>
                                <span className="coner-decoration"></span>
                                <span className="coner-decoration"></span>
                                <div className="project__info">
                                    <div className="img__wrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/home2-1600x865.jpg")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                        <div className="btn__wrap">
                                            <a href="/">
                                                <span className="res">Responsive</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text__wrap">
                                        <p className="project__year">2018</p>
                                        <p className="project__title">eroundmall</p>
                                        <p className="tag__language">
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
                                <span className="coner-decoration"></span>
                                <span className="coner-decoration"></span>
                                <div className="project__info">
                                    <div className="img__wrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/img-project-eround.png")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                        <div className="btn__wrap">
                                            <a href="https://www.eroundmall.com/" target="_blank">
                                                <span className="pc_m">PC / Mobile</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text__wrap">
                                        <p className="project__year">2018</p>
                                        <p className="project__title">eroundmall</p>
                                        <p className="tag__language">
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
                                <h3>project03</h3>
                                <span className="coner-decoration"></span>
                                <span className="coner-decoration"></span>
                                <div className="project__info">
                                    <div className="img__wrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/img-project-YIC.png")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                        <div className="btn__wrap">
                                            <a href="http://www.yic.co.kr/" target="_blank">
                                                <span className="res">Responsive</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text__wrap">
                                        <p className="project__year">2018</p>
                                        <p className="project__title">eroundmall</p>
                                        <p className="tag__language">
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
                                <h3>project04</h3>
                                <span className="coner-decoration"></span>
                                <span className="coner-decoration"></span>
                                <div className="project__info">
                                    <div className="img__wrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/img-project-emh.png")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                        <div className="btn__wrap">
                                            <a href="http://www.emhsystem.com/" target="_blank">
                                                <span className="pc_m">PC / Mobile</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text__wrap">
                                        <p className="project__year">2018</p>
                                        <p className="project__title">eroundmall</p>
                                        <p className="tag__language">
                                            <span className="html5">HTML5</span>
                                            <span className="css3">CSS3</span>
                                            <span className="javascript">javascript</span>
                                            <span className="jquery">jQuery</span>
                                            <span className="react">react</span>
                                        </p>
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