import React, { Component } from 'react';
import educationalImage from '../assets/images/educationalImage.jpg';
import {Container} from '@mui/material';

class MiddleBAnner extends Component {
    render() {
        return (
            <div>
                <Container maxWidth="xl" className='middle-banner'>
                    <div className='middle-text'>
                        Lets Dive Into To The World Of Gamification
                    </div>
                <img src={educationalImage} alt="eduactional image" className='middle-image'/>

                </Container>
                
            </div>
        );
    }
}

export default MiddleBAnner;