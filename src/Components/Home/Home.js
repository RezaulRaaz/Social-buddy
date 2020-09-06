import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid} from "@material-ui/core";
import Post from "../Post/Post";
const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 800,
    paddingBottom: "20px",
    textAlign: "center",
    paddingTop: "20px",
  },
  card:{
      maxWidth:'100%'
  },
  media:{
      height:'240px'
  }
}));
const Home = () => {
        const classes = useStyles();
        const[posts,setPosts] = useState([]);

        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=>setPosts(data))
        },[])

    

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
           {
               posts.map(post =><Post post={post} key={post.id}></Post>)
           }
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
