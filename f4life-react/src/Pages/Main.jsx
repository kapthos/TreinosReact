import { Container, AppBar, Toolbar, Box, Typography, Avatar, Rating, Button } from '@mui/material'
import Logo from '../assets/Logo.png'
import CardHeader from '../components/CardHeader';
import MeetingPhoto from '../assets/Foto_reuniao.png'
import WomanKitnet from '../assets/Kitnet-foto.png'
import RepublicaPhoto from '../assets/Republica-foto.png'
import JohnPhoto from '../assets/JohnPhoto.jpg'
import SarahPhoto from '../assets/SarahPhoto.jpg'

function Main() {
    return (
        <>
            <AppBar position="relative"
                sx={{ bgcolor: '#132235', borderBottom: '4px solid #6DDAD3' }} >
                <Container maxWidth="xl" sx={{ width: { xs: '40%', sm: '100%', lg: '85%', xl: '75%' } }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '80px' }}>
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', ml: '-95%' }}>
                            <Box component='img' src={Logo} alt="logo_image" />
                            <Box sx={{ position: 'relative', left: '35%' }}>
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
            <Box sx={{ bgcolor: '#DCE9ED', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Container maxWidth='xl'>
                    <Box sx={{ display: 'flex', pt: '4%', px: '8%' }}>
                        <Box>
                            <Typography variant="h1" color="#132235" fontWeight='800' textAlign='center'
                                sx={{ width: '100%', pb: '5%', fontSize: { xs: '52px', sm: '80px' } }}>
                                Quem somos
                            </Typography>
                            <Typography variant="h6" color="#132235" fontWeight='400'
                                sx={{ width: '100%', pb: '5%', fontSize: { xs: '24px', sm: '24px' } }}>
                                Durante nossos estudos, sempre tivemos problemas em econtrar moradia de qualidade e próximas à universidades. Decidimos então, criar uma empresa que realiza reformas e prepara moradias, na recepção de pessoas universitárias e sem burocracia, para que voce possa focar naquilo que realmente importa: sua educação!
                            </Typography>
                        </Box>
                        <Box component='img' src={MeetingPhoto} alt="logo_image"
                            sx={{
                                width: { xs: '45%', sm: '50%', md: '65%', lg: '80%', xl: '100%' },
                                display: { xs: 'none', lg: 'flex' }, pl: '5%'
                            }} />
                    </Box>
                </Container>
                <Box
                    sx={{
                        height: '6px', width: '100%',
                        background: 'linear-gradient(to right, #AAA 0%, #000 50%, #AAA 100%)',
                        mt: '4%'
                    }} />


                <Box sx={{ display: 'flex', pt: '4%', flexDirection: 'column', alignItems: 'center', width: { xs: '90%', sm: '87%', md: '100%' } }}>
                    <Typography variant="h1" color="#132235" fontWeight='800' textAlign='center'
                        sx={{ width: '100%', pb: '5%', fontSize: { xs: '52px', sm: '72px', md: '80px' } }}>
                        Nossos Serviços
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', alignItems: 'center', width: '80%' } }}>
                        <Box component='img' src={WomanKitnet} alt="logo_image"
                            sx={{
                                width: { xs: '100%', sm: '80%', md: '60%' }
                            }} />
                        <Box
                            sx={{
                                display: 'flex', flexDirection: 'column'
                            }}>
                            <Typography variant="h1" color="#132235" fontWeight='800' textAlign='center'
                                sx={{ width: '100%', py: '5%', fontSize: { xs: '32px', sm: '44px' } }}>
                                Kitnets Individuais
                            </Typography>
                            <Typography variant="h6" color="#132235" textAlign='center' fontWeight='400'
                                sx={{ width: '100%', pb: '5%', fontSize: { xs: '24px', sm: '28px' } }}>
                                Kitnets sendo um apartamento menor para uma pessoa que prefere manter sua privacidade e adiantar a vida morando sozinho.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', alignItems: 'center', width: '80%' }, pb: '5%' }}>
                        <Box sx={{
                            display: 'flex', flexDirection: 'column'
                        }}>
                            <Typography variant="h1" color="#132235" fontWeight='800' textAlign='center'
                                sx={{ width: '100%', py: '5%', fontSize: { xs: '32px', sm: '44px' } }}>
                                Repúblicas
                            </Typography>
                            <Typography variant="h6" color="#132235" textAlign='center' fontWeight='400'
                                sx={{ width: '100%', pb: '5%', fontSize: { xs: '24px', sm: '28px' } }}>
                                Repúblicas para dividir com outros alunos, fazer amizades e aproveitar essa época em grupo.
                            </Typography>
                        </Box>
                        <Box component='img' src={RepublicaPhoto} alt="logo_image"
                            sx={{
                                width: { xs: '100%', sm: '80%', md: '60%' }
                            }} />
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: { xs: '42rem', sm: '35rem' }, background: 'linear-gradient(to right bottom, #132235, #18365B)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Box sx={{ width: { xs: '100%' }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <Avatar src={JohnPhoto} alt="John Photo" sx={{ width: '96px', height: '96px' }} />
                                <Rating name="read-only" value={5} readOnly />
                                <Typography variant="h5" color="white" fontWeight='800' textAlign='center'>John Smith</Typography>
                                <Typography variant="body1" color="#DDD" fontWeight='400' textAlign='center'>São Paulo, 23</Typography>
                                <Typography variant="h6" color="white" fontWeight='600' textAlign='justify' sx={{ width: { xs: '80%', sm: '75%', lg: '60%' }, pt: '3%', fontSize: { xs: '12px', sm: '20px' } }}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <Avatar src={SarahPhoto} alt="John Photo" sx={{ width: '96px', height: '96px' }} />
                                <Rating name="read-only" value={5} readOnly />
                                <Typography variant="h5" color="white" fontWeight='800' textAlign='center'>Sarah</Typography>
                                <Typography variant="body1" color="#DDD" fontWeight='400' textAlign='center'>Curitiba, 19</Typography>
                                <Typography variant="h6" color="white" fontWeight='600' textAlign='justify' sx={{ width: { xs: '80%', sm: '75%', lg: '60%' }, pt: '3%', fontSize: { xs: '12px', sm: '20px' } }}>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.”</Typography>
                            </Box>
                        </Box>
                        <Button variant='contained'
                            sx={{ borderRadius: '10rem', width: { xs: '35%', sm: '20%', lg: '12%', xl: '8%' }, bgcolor: '#6DDAD3', color: '#132235', fontWeight: '800', border: '1px solid white', fontSize: { xs: '12px', sm: '16px' } }}>
                            Veja Mais
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Main;
