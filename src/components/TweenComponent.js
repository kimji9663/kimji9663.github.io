import React, {Fragment} from 'react';
import Bio from "../components/bio"
import SEO from "../components/seo"
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const TweenComponent = () => {
    return (
        <Fragment>
            <div className="section" style={{height: "50vh"}}></div>
            <div id="trigger" className="trigger"></div>
            <Controller>
                <Scene 
                    triggerElement="#trigger"
                    duration={1000}
                >
                    {(progress) => (
                        <Tween
                        from={{
                          css: {
                            top: '-200px',
                            opacity: '1',
                          },
                          ease: 'linear',
                        }}
                        to={{
                          css: {
                            top: '600px',
                            opacity: '0',
                          },
                          ease: 'linear',
                        }}
                        totalProgress={progress}
                        paused
                      >
                            <div className="mainText">
                                <Bio></Bio>
                                <SEO></SEO>
                            </div>
                        </Tween>
                    )}
                </Scene>
            </Controller>
            <div className="section" style={{height: "50vh"}}></div>
        </Fragment>
    );
};

export default TweenComponent;