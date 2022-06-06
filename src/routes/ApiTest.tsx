import React, { useState, useEffect } from 'react'
import { Grid, Container } from '@material-ui/core'
import InfoCard from '../components/InfoCard'

export default function LandingPage() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/hives")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          //console.log(items[0].temperature);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }, [])

    if(error){
      return <div>Error: {error}</div>
    }else if(!isLoaded){
      return <div>Loading...</div>
    }else{
      return (
        <Container>
          <Grid container spacing={3}>
          {items.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <InfoCard hives={item}/>
            </Grid>
          ))}
          </Grid>
        </Container>
      )
    }
}
