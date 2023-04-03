import React from 'react'
import TextCard from '../components/TextCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cities from '../data.json'
import { Typography } from '@mui/material';

const Home = () => {
  return (
      <div className="App">
          <Container sx={{ marginY: 5 }}>
              {cities.map((city) => (
                  <>
                      <Typography
                          variant='h4'
                          component='h2'
                          marginTop={5}
                          marginBottom={3}
                      >
                          Top {city.name} Tours
                      </Typography>

                      <Grid container spacing={5}>
                          {city.tours.map((tour, index) => <TextCard tour={tour} key={index} />)}
                      </Grid>
                  </>

              ))}
          </Container>
      </div>
  )
}

export default Home