import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import contactMe from './../../assets/contactMe.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
});

export default function ContactCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={contactMe}
          title="About Me"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rajesh Yadav
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Experienced Application Developer with a demonstrated history of working in the information technology and services industry. 
          Strong engineering professional skilled in Spring Boot, Spring Cloud , Microservices , Sql, Java .
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a  href="https://www.linkedin.com/in/rajesh-yadav-ba5041ba/">LinkedIn</a>
        </Button>
        <Button size="small" color="primary">
        <a  href="https://www.linkedin.com/in/rajesh-yadav-ba5041ba/">Details</a>
          
        </Button>
      </CardActions>
    </Card>
  );
}
