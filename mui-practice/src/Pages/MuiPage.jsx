import React from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Button, Grid, Container, Box, Link } from '@mui/material'
import Header from './Header'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function Copyright() {
   return (
      <Typography variant="body2" color="text.secondary" align="center">
         {'Copyright © '}
         <Link color="inherit" href="https://mui.com/">Kapthos</Link>
         {' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

const MuiPage = () => {

   return (
      <Box sx={{ bgcolor: 'eee' }}>
         <CssBaseline />
         <header>
            <Header />
         </header>
         <main>
            <Box sx={{ bgcolor: '#DDD', p: (theme) => theme.spacing(8, 0, 6) }}>
               <Container maxWidth="sm">
                  <Typography variant='h2' align='center' color='textPrimary' gutterBottom> Photo Album</Typography>
                  <Typography variant='h5' align='center' color='textSecondary' paragraph> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam eum quos sapiente error autem quae pariatur dicta quis suscipit numquam!</Typography>
                  <div>
                     <Grid container spacing={2} justifyContent='center' sx={{ mt: 3 }}>
                        <Grid item>
                           <Button variant='contained'>
                              See my photos
                           </Button>
                        </Grid>
                        <Grid item>
                           <Button variant='outlined'>
                              Secondary action
                           </Button>
                        </Grid>
                     </Grid>
                  </div>
               </Container>
            </Box>
            <Box>
               <Container maxWidth='md' sx={{ mt: 3 }}>
                  <Grid container spacing={4} >
                     {cards.map(() => (
                        <Grid item xs={12} sm={6} md={4}>
                           <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                              <CardMedia image="https://source.unsplash.com/featured/" title='Image title' sx={{ pt: '56.25%' }} />
                              <CardContent sx={{ flexGrow: '1' }}>
                                 <Typography variant='h5' gutterBottom>Heading</Typography>
                                 <Typography>This is a media card. You can use this section to describe the content.</Typography>
                              </CardContent>
                              <CardActions>
                                 <Button size='small' color='primary'>View</Button>
                                 <Button size='small' color='primary'>Edit</Button>
                              </CardActions>
                           </Card>
                        </Grid>))}
                  </Grid>
                  <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 400, borderRadius: 5, backgroundImage: `url(https://images.unsplash.com/photo-1613336026275-d6d473084e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                     <Typography align='center' color='white' fontWeight={600} sx={{ width: 200, textShadow: '2px 2px 1px #333' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, accusantium?</Typography>
                  </Box>
               </Container>
            </Box>
         </main>
         <footer>
            <Box sx={{ bgcolor: '#eee', mt: 3, py: 4 }}>
               <Typography variant='h6' align="center" gutterBottom>Footer</Typography>
               <Copyright />
            </Box>
         </footer>
      </Box>
   )
}

export default MuiPage