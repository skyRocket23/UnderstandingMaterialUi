import { AccessTime } from "@mui/icons-material"
import { Paper,Grid,Typography, Rating,createTheme,ThemeProvider} from "@mui/material"
import { Box } from "@mui/system"


const theme  = createTheme({
  components:{
    MuiTypography:{
      variants:[
        {
          props:{
            variant:"body2"
          },
          style:{
            fontSize:11
          }
        },
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 9
          }
        }
      ]
    }
  }
})



const Card = ({tour}) => {
  return (
    <Grid item xs={4}>
      <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <img src={tour.image} alt="" className="img"/>
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
           {tour.name}
          </Typography>
        

        <Box
           sx={{
              display:"flex",
              alignItems:"center",
           }}
        >
          <AccessTime sx={{width:12.5}}/>
          <Typography variant="body1" component="p" marginLeft={0.5}>
              {tour.duration} Hours
          </Typography>
        </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
          >
            <Rating 
            name="read-only" 
            value={tour.rating} 
            readOnly 
            precision={0.5}
            size="small"/>

            <Typography variant="body2" marginLeft={0.5} component="p" >{tour.rating}</Typography>

            <Typography variant="body3" marginLeft={0.5} component="p" >({tour.numberOfReviews} reviews)</Typography>
          </Box>

          <Box marginTop={0}>
            <Typography variant="h6" component="h3">
              From {tour.price}₹
            </Typography>
          </Box>
      </Box>
      </Paper>
      </ThemeProvider>
    </Grid>

  )
}

export default Card