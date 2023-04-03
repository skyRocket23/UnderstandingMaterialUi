import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ImageCollage from '../components/ImageCollage'

const Tour = () => {
  return (
    <Container sx={{width:900}}>
        <Typography variant="h3" component="h1" marginTop={3} >
            Explore the world in Vegas.
        </Typography>

        <Box marginTop={3} sx={{display:"flex"}}>
              <img src="data:image/jpeg;base64,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" alt="" height={325} />
              <ImageCollage/>
        </Box>

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