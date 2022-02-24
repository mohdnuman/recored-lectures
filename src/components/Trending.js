import React, { Component } from 'react';
import { Container } from "@mui/material";
import TrendingSlider from "./TrendingSlider";

class Trending extends Component {
    render() {
        return (
            <Container  maxWidth="xl" className="trending">
                <span className='trending-text'>Trending</span>
                <TrendingSlider courses={{name:'Web Development'}}/>
            </Container>
        );
    }
}

export default Trending;