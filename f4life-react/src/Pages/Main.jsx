import { Container, AppBar, Toolbar, Box, Typography } from '@mui/material'
import Logo from '../assets/Logo.png'
import CardHeader from '../components/CardHeader';
import MeetingPhoto from '../assets/Foto_reuniao.png'
import WomanKitnet from '../assets/Kitnet-foto.png'

function Main() {
    return (
        <>
            <AppBar position="relative"
                sx={{ bgcolor: '#132235', borderBottom: '4px solid #6DDAD3' }} >
                <Container maxWidth="xl" sx={{ width: { xs: '40%', sm: '100%',lg:'85%',xl:'75%' } }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '80px' }}>
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', ml:'-95%'}}>
                            <Box component='img' src={Logo} alt="logo_image"  />
                            <Box sx={{position:'relative', left:'35%'}}>
                                Burg
                            </Box>
                        </Box>
                        <Box component='img' src={Logo} alt="logo_image" sx={{ display: { xs: 'none', sm: 'flex' }, mr: '24px' }} />
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between', width: '75%' }}>
                            <Typography variant="h6" fontWeight={700} component='a' href='#' sx={{ fontSize: { sm: '16px', md: '20px', lg: '24px' }, textDecoration: 'none', color: '#FFF' }}>Quem somos</Typography>
                            <Typography variant="h6" fontWeight={700} component='a' href='#' sx={{ fontSize: { sm: '16px', md: '20px', lg: '24px' }, textDecoration: 'none', color: '#FFF' }}>Nossos Serviços</Typography>
                            <Typography variant="h6" fontWeight={700} component='a' href='#' sx={{ fontSize: { sm: '16px', md: '20px', lg: '24px' }, textDecoration: 'none', color: '#FFF' }}>Nossos Clientes</Typography>
                            <Typography variant="h6" fontWeight={700} component='a' href='#' sx={{ fontSize: { sm: '16px', md: '20px', lg: '24px' }, textDecoration: 'none', color: '#FFF' }}>Contato</Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <CardHeader />
            {/* <Box sx={{ bgcolor: '#DCE9ED', minHeight: '100vh' }}>
                <Container maxWidth='xl'>
                    <Box sx={{ display: 'flex', pt: '60px' }}>

                        <Box>
                            <Typography variant="h1" color="#132235" fontSize='96px' fontWeight='800' sx={{ width: '50%', pb: '60px', pl: '250px' }}>Quem somos</Typography>
                            <Typography variant="h6" color="#132235" fontSize='24px' fontWeight='400' sx={{ width: '50%', pb: '60px', pl: '250px' }}>Durante nossos estudos, sempre tivemos problemas em econtrar moradia de qualidade e próximas à universidades. Decidimos então, criar uma empresa que realiza reformas e prepara moradias, na recepção de pessoas universitárias e sem burocracia, para que voce possa focar naquilo que realmente importa: sua educação!</Typography>
                        </Box>
                        <Box component='img' src={MeetingPhoto} alt="logo_image"
                            sx={{
                                width: { xs: '45%', sm: '50%', md: '65%', lg: '80%', xl: '100%' },
                                height: { xs: '45%', sm: '50%', md: '65%', lg: '80%', xl: '100%' }
                            }} />

                    </Box>
                </Container> */}
            {/* <Box sx={{ height: '6px', width: '100vw', background: 'linear-gradient(to right, #AAA 0%, #000 50%, #AAA 100%)', mt: '50px' }} />
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: '50px' }}>
                    <Typography variant="h1" color="#132235" fontSize='96px' fontWeight='800' sx={{ width: '1250px', pb: '60px', pl: '250px' }}>Nossos Serviços</Typography>
                </Box>
                <Box sx={{ display: 'flex', pl: '250px' }}>
                    <Box component='img' src={WomanKitnet} alt="logo_image"
                        sx={{
                            width: { xs: '45%', sm: '50%', md: '65%', lg: '80%', xl: '100%' },
                            height: { xs: '45%', sm: '50%', md: '65%', lg: '80%', xl: '100%' }
                        }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', pt: '40px' }}>
                        <Typography variant="h1" color="#132235" fontSize='40px' fontWeight='800' sx={{ width: '700px', pb: '20px', pl: '250px' }}>Kitnets Individuais</Typography>
                        <Typography variant="h6" color="#132235" fontSize='24px' textAlign='center' fontWeight='400' sx={{ width: '600px', pb: '60px', pl: '250px' }}>Kitnets sendo um apartamento menor para uma pessoa que prefere manter sua privacidade e adiantar a vida morando sozinho.</Typography>
                    </Box>
                </Box> */}
            {/* </Box> */}
        </>
    );
}

export default Main;
