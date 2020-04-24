/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Fragment} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 })
    return isDesktop ? children : null
  }
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

const TweenComponent = () => {
    return (
        <Fragment>
            <div className="section s1"></div>
            <div id="trigger" className="trigger"></div>
            <Desktop>
                <Controller>
                    <Scene 
                    triggerElement="#trigger"
                    duration={600}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {opacity: '0'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {opacity: '1'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div className="colorBg"></div>
                            </Tween>
                        )}
                    </Scene>
                    <Scene 
                    triggerElement="#trigger"
                    duration={600}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {top: '-30vh', opacity: '1'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {top: '50vh',opacity: '0'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div className="mainText">
                                    <div className="shape">
                                        <h2>
                                            <span>Welcome to<br/> my world!</span>
                                        </h2>
                                    </div>
                                    <div className="base">
                                        <h2>
                                            <span>Welcome to<br/> my world!</span>
                                        </h2>
                                    </div>
                                </div>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
            </Desktop>
            <Mobile>
                <Controller>
                    <Scene 
                    triggerElement="#trigger"
                    duration={200}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {opacity: '0'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {opacity: '1'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div className="colorBg"></div>
                            </Tween>
                        )}
                    </Scene>
                    <Scene 
                    triggerElement="#trigger"
                    duration={300}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {top: '-30vh', opacity: '1'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {top: '10vh',opacity: '0'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div className="mainText">
                                    <div className="shape">
                                        <h2>
                                            <span>Welcome to<br/> my world!</span>
                                        </h2>
                                    </div>
                                    <div className="base">
                                        <h2>
                                            <span>Welcome to<br/> my world!</span>
                                        </h2>
                                    </div>
                                </div>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
            </Mobile>
            <div className="section s2"></div>
        </Fragment>
    );
};

export default TweenComponent;