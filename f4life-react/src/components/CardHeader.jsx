import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import BGPhoto from '../assets/Foto_Header.png'

const CardHeader = () => {
    return (
        <Box sx={{ borderBottom: '8px solid #6DDAD3', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', py: '4%', backgroundImage: { xs: 'linear-gradient(to right bottom, #132235, #18365B)', sm: `url(${BGPhoto})` }, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <Typography variant="h1" color="white"
                sx={{ width: { xs: '80%', xl: '70%' }, pb: { xs: '10%', sm: '3%' }, fontSize: { xs: '48px', sm: '64px' } }}>
                As melhores moradias para universitários.
            </Typography>
            <Typography variant="h2" color="white" lineHeight={1.6}
                sx={{ width: { xs: '80%', xl: '70%' }, pb: { xs: '5%', sm: '3%' }, fontSize: { xs: '24px', sm: '32px' } }}>
                Disponibilizamos moradia a preço acessível, próximas à faculdades e universidades, para que seu foco seja apenas seu futuro.
            </Typography>
            <Button variant='contained'
                sx={{ borderRadius: '10rem', width: { xs: '35%', sm: '20%', lg: '15%', xl: '10%' }, bgcolor: '#6DDAD3', color: '#132235', fontWeight: '800', border: '1px solid white', fontSize: { xs: '12px', sm: '16px' } }}>
                Saiba Mais
            </Button>
        </Box>
    )
}
export default CardHeader