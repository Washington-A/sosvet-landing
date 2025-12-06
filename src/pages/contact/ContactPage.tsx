import React from 'react';
import { Box, Container, Typography, Card, CardMedia, CardContent, Button, Stack, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {useDevice} from "../../contexts/DeviceContext.tsx";

interface UnitData {
    city: string;
    image: string;
    description: string;
    address: string;
    phone: string;
    whatsapp: string;
    instagram: string;
}

const ContactPage: React.FC = () => {
    const { isMobile } = useDevice();

    const units: UnitData[] = [
        {
            city: 'Santa Helena de Goiás',
            image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop',
            description: 'Nossa unidade matriz, equipada com tecnologia de ponta e equipe completa de especialistas. Atendimento 24 horas para emergências.',
            address: 'Rua Principal, 123 - Centro, Santa Helena de Goiás - GO',
            phone: '(64) 3634-1234',
            whatsapp: '5564936341234',
            instagram: 'https://instagram.com/sosvet_santahelena'
        },
        {
            city: 'Maurilândia',
            image: 'https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?w=800&h=600&fit=crop',
            description: 'Unidade moderna com atendimento completo em clínica geral, cirurgias e exames. Profissionais dedicados ao bem-estar do seu pet.',
            address: 'Av. Goiás, 456 - Centro, Maurilândia - GO',
            phone: '(64) 3635-5678',
            whatsapp: '5564936355678',
            instagram: 'https://instagram.com/sosvet_maurilandia'
        },
        {
            city: 'Turvelândia',
            image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=600&fit=crop',
            description: 'Nossa mais nova unidade, oferecendo serviços de qualidade e carinho personalizado para cada paciente. Estacionamento amplo.',
            address: 'Rua das Flores, 789 - Centro, Turvelândia - GO',
            phone: '(64) 3636-9012',
            whatsapp: '5564936369012',
            instagram: 'https://instagram.com/sosvet_turvelandia'
        }
    ];

    const handleWhatsAppClick = (whatsapp: string, city: string) => {
        const message = encodeURIComponent(
            `Olá! Gostaria de agendar uma consulta na unidade de ${city}.`
        );
        window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default'
            }}
        >
            {/* Hero Section */}
            <Box
                sx={{
                    py: { xs: 6, md: 8, lg: 10 },
                    px: 2,
                    textAlign: 'center',
                    backgroundColor: 'white'
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            color: 'primary.main',
                            mb: 2,
                            letterSpacing: '-0.01em'
                        }}
                    >
                        Nossas Unidades
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            maxWidth: '800px',
                            mx: 'auto',
                            lineHeight: 1.7
                        }}
                    >
                        O SOS Centro Veterinário está presente em três cidades, sempre perto de você
                        para oferecer o melhor atendimento e cuidado para seu pet.
                    </Typography>
                </Container>
            </Box>

            {/* Cards das Unidades */}
            <Box
                sx={{
                    py: { xs: 6, md: 8, lg: 10 },
                    px: 2
                }}
            >
                <Container maxWidth="lg">
                    <Stack spacing={{ xs: 4, md: 6 }}>
                        {units.map((unit, index) => (
                            <Card
                                key={index}
                                elevation={2}
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: 6,
                                        transform: 'translateY(-4px)'
                                    }
                                }}
                            >
                                {/* Imagem */}
                                <Box
                                    sx={{
                                        width: { xs: '100%', md: '45%' },
                                        position: 'relative',
                                        minHeight: { xs: '250px', md: '400px' }
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={unit.image}
                                        alt={`Unidade ${unit.city}`}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Box>

                                {/* Conteúdo */}
                                <CardContent
                                    sx={{
                                        width: { xs: '100%', md: '55%' },
                                        p: { xs: 3, md: 4, lg: 5 },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {/* Nome da Cidade */}
                                    <Typography
                                        variant="h3"
                                        component="h2"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: { xs: '1.75rem', md: '2rem' },
                                            color: 'primary.main',
                                            mb: 2
                                        }}
                                    >
                                        {unit.city}
                                    </Typography>

                                    {/* Descrição */}
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'text.secondary',
                                            mb: 3,
                                            lineHeight: 1.7
                                        }}
                                    >
                                        {unit.description}
                                    </Typography>

                                    {/* Informações de Contato */}
                                    <Stack spacing={2} sx={{ mb: 3 }}>
                                        {/* Endereço */}
                                        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                                            <LocationOnIcon sx={{ color: 'primary.main', mt: 0.3 }} />
                                            <Typography variant="body2" color="text.primary">
                                                {unit.address}
                                            </Typography>
                                        </Box>

                                        {/* Telefone */}
                                        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                            <PhoneIcon sx={{ color: 'primary.main' }} />
                                            <Link
                                                href={`tel:${unit.phone.replace(/\D/g, '')}`}
                                                sx={{
                                                    color: 'text.primary',
                                                    textDecoration: 'none',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                        textDecoration: 'underline'
                                                    }
                                                }}
                                            >
                                                {unit.phone}
                                            </Link>
                                        </Box>

                                        {/* Instagram */}
                                        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                            <InstagramIcon sx={{ color: 'primary.main' }} />
                                            <Link
                                                href={unit.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    color: 'text.primary',
                                                    textDecoration: 'none',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                        textDecoration: 'underline'
                                                    }
                                                }}
                                            >
                                                @sosvet_{unit.city.toLowerCase().replace(/\s/g, '')}
                                            </Link>
                                        </Box>
                                    </Stack>

                                    {/* Botão WhatsApp */}
                                    <Button
                                        variant="contained"
                                        size={isMobile ? 'medium' : 'large'}
                                        startIcon={<WhatsAppIcon />}
                                        onClick={() => handleWhatsAppClick(unit.whatsapp, unit.city)}
                                        sx={{
                                            backgroundColor: '#25D366',
                                            color: 'white',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            fontSize: { xs: '0.95rem', md: '1rem' },
                                            px: { xs: 3, md: 4 },
                                            py: { xs: 1.25, md: 1.5 },
                                            borderRadius: '50px',
                                            boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                                            alignSelf: 'flex-start',
                                            '&:hover': {
                                                backgroundColor: '#20BA5A',
                                                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                                                transform: 'translateY(-2px)'
                                            }
                                        }}
                                    >
                                        Agendar pelo WhatsApp
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Container>
            </Box>

            {/* CTA Final */}
            <Box
                sx={{
                    py: { xs: 6, md: 8 },
                    px: 2,
                    backgroundColor: 'white',
                    textAlign: 'center'
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            mb: 2
                        }}
                    >
                        Estamos Aqui para Ajudar
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                    >
                        Entre em contato com a unidade mais próxima de você. Nossa equipe está
                        pronta para atender seu pet com todo carinho e profissionalismo.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default ContactPage;