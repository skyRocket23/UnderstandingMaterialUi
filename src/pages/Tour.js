import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'


const Tour = () => {
  return (
    <Container sx={{width:900}}>
        <Typography variant="h3" component="h1" marginTop={3} >
            Explore the world in Vegas.
        </Typography>


        <Box>
              <Typography variant="h6" component="h4" marginTop={3} >
                  About this ticket
              </Typography>

              <Typography variant="paragraph" component="p" marginTop={3} >
                  The Las Vegas ticket section offers a wide variety of entertainment options for visitors to choose from. Whether you're interested in catching a world-class show or attending a popular concert, there is something for everyone in this bustling city.

                  With so many options to choose from, it can be overwhelming to decide on which ticket to purchase. Fortunately, the Las Vegas ticket section offers detailed information on each event, including the date, time, location, and price. This makes it easy for visitors to compare different options and find the perfect ticket for their budget and schedule.

                  One of the most popular attractions in Las Vegas is the Cirque du Soleil, which offers breathtaking acrobatic performances that will leave you in awe. Other popular shows include magic performances by David Copperfield and comedy shows featuring famous comedians like Jerry Seinfeld.

                  Music lovers will also find plenty of options in the Las Vegas ticket section. From pop stars like Britney Spears and Celine Dion to classic rock acts like Aerosmith and The Who, there is no shortage of musical talent in this vibrant city.

                  Overall, the Las Vegas ticket section is a one-stop-shop for all your entertainment needs. Whether you're a first-time visitor or a seasoned veteran of Sin City, you're sure to find something that will keep you entertained and amazed during your stay.

              </Typography>

        </Box>

          <Box>
              <Typography variant="h6" component="h4" marginTop={3} >
                 Frequently Asked Questions
              </Typography>

             

              

          </Box>
    </Container>
  )
}

export default Tour