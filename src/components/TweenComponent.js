/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Fragment} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const TweenComponent = () => {

    return (
        <Fragment>
            <div className="section"></div>
            <div id="trigger" className="trigger"></div>
            <Controller>
                <Scene 
                triggerElement="#trigger"
                duration={600}
                >
                    {(progress) => (
                        <Tween
                        from={{
                        css: {
                            top: '-20vh',
                            opacity: '1',
                        },
                        ease: 'linear',
                        }}
                        to={{
                        css: {
                            top: '50vh',
                            opacity: '0',
                        },
                        ease: 'linear',
                        }}
                        totalProgress={progress}
                        paused
                        >
                            <div className="mainText">
                                Welcome to my world!
                            </div>
                        </Tween>
                    )}
                </Scene>
            </Controller>
            <div className="section"></div>
        </Fragment>
    );
};

export default TweenComponent;