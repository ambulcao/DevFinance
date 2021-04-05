import React from 'react'
import Video from '../Video/Finance.mp4';
import { HeroContainer, HeroBg, VideoBg } from './VideoElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} autoPlay loop muted type='video/mp4' />
            </HeroBg>
        </HeroContainer>

    )
}

export default HeroSection;
