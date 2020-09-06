import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Grid, Card, CardActionArea, CardContent, CardActions, Button} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    card:{
        maxWidth:'100%',
        marginTop:'20px'
    },
    title:{
      color:'#ff7675'
    },
    media:{
        height:'240px'
    },
    seemore:{
      color:'#ff7675',
    }
  }));
const Post = (props) => {
    const classes = useStyles();
    const{body,id,title}=props.post;
  return (
    <Grid item xs={8} sm={8} md={8}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               <h4 className={classes.title}>{title}</h4>
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Link to={"/post/" +id} style={{textDecoration:'none'}}>
          <Button size="small" className={classes.seemore}>
            See More
          </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
