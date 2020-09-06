import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CommentIcon from '@material-ui/icons/Comment';
import commenter from "../Fakedata/Users"
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  Avatar,
} from "@material-ui/core";
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
    }
  }));
const Details = () => {
    const classes = useStyles();
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, []);
  return (
    <div>
        <Container maxWidth="lg">
        <Grid container spacing={3}>
        <Grid item xs={8} sm={8} md={8}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    <h4 className={classes.title}>{post.title}</h4>
                    {post.body}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <CommentIcon></CommentIcon>&nbsp;<h4>{comments.length}</h4>
                </Button>
            </CardActions>
            </Card>
            <br/>
        <p>Comments </p>
        </Grid>
        {comments.map((comment,index) =>{
              const ranUser = commenter[Math.floor(Math.random() * commenter.length)];
                return (
                 <Grid item xs={8} sm={8} md={8}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom  component="h2">
                                <Avatar alt="Remy Sharp" src={ranUser.img} /> 
                                 <span className={classes.title}> {ranUser.name}</span>
                                <p>
                                {comment.name}
                                </p>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </Grid>
                )
            }
          )
        }
    </Grid>

     </Container>
    </div>
  );
};

export default Details;
