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
                                <Link to={`/`}>
                                    <span className="conerDecoration"></span>
                                    <span className="conerDecoration"></span>
                                    <div className="imgWrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/home2-1600x865.jpg")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <h3>project02</h3>
                                <Link to={`https://www.eroundmall.com/`}>
                                    <span className="conerDecoration"></span>
                                    <span className="conerDecoration"></span>
                                    <div className="imgWrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/img-project-eround3.png")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <h3>project03</h3>
                                <Link to={`/`}>
                                    <span className="conerDecoration"></span>
                                    <span className="conerDecoration"></span>
                                    <div className="imgWrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/img-project-YIC.png")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <h3>project04</h3>
                                <Link to={`/`}>
                                    <span className="conerDecoration"></span>
                                    <span className="conerDecoration"></span>
                                    <div className="imgWrap">
                                        <figure 
                                        style={{
                                            backgroundImage: `url(${require("../images/home2-1600x865.jpg")})`,
                                            backgroundSize: `cover`
                                        }}
                                        />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Intro