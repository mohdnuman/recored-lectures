import React, { Component } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import courseImage from '../assets/images/courseImage.png';

class CourseCard extends Component {
    render() {
        return (
            <Card sx={{ maxWidth: 243, margin:2, display:'inline-block' }} className="card">
          <CardMedia
            component="img"
            height="140"
            image={courseImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <span className='course-name'>{this.props.courses.name}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        );
    }
}

export default CourseCard;