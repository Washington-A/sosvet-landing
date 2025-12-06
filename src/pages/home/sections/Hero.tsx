import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useDevice } from "../../../contexts/DeviceContext.tsx";

const Hero: React.FC = () => {
    const { isMobile } = useDevice();

    return (
        <Box
            component="section"
            sx={{
                backgroundColor: 'background.default',
                py: { xs: 6, sm: 8, md: 10, lg: 12 },
                px: 2
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        gap: { xs: 4, md: 6 }
                    }}
                >
                    {/* Coluna de Texto */}
                    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography
                            component="h1"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 700,
                                fontSize: {
                                    xs: '2rem',
                                    sm: '2.5rem',
                                    md: '3rem',
                                    lg: '3.5rem'
                                },
                                lineHeight: 1.2,
                                mb: { xs: 2, md: 3 },
                                letterSpacing: '-0.02em'
                            }}
                        >
                            Cuidado e Amor em Cada Consulta
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.primary',
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.125rem',
                                    md: '1.25rem'
                                },
                                lineHeight: 1.7,
                                mb: { xs: 3, md: 4 },
                                maxWidth: { xs: '100%', md: '90%' }
                            }}
                        >
                            Bem-vindo ao SOS Centro Veterinário. Dedicação, carinho e a
                            melhor equipe para a saúde e bem-estar do seu pet.
                        </Typography>

                        <Button
                            variant="contained"
                            size={isMobile ? 'medium' : 'large'}
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                textTransform: 'none',
                                fontSize: { xs: '0.95rem', md: '1rem' },
                                fontWeight: 600,
                                px: { xs: 3, md: 4 },
                                py: { xs: 1.25, md: 1.5 },
                                borderRadius: '50px',
                                boxShadow: '0 4px 14px rgba(244, 37, 37, 0.25)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                    boxShadow: '0 6px 20px rgba(244, 37, 37, 0.35)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            Agende uma Consulta
                        </Button>
                    </Box>

                    {/* Coluna da Imagem */}
                    <Box sx={{ flex: 1, width: '100%' }}>
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop&q=80"
                            alt="Cachorros Golden Retriever felizes em campo de flores"
                            sx={{
                                width: '100%',
                                maxWidth: { xs: '100%', sm: '500px', md: '100%' },
                                height: 'auto',
                                borderRadius: { xs: '16px', md: '24px' },
                                boxShadow: {
                                    xs: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                    md: '0 12px 32px rgba(0, 0, 0, 0.15)'
                                },
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: { xs: 'scale(1.02)', md: 'scale(1.05)' }
                                }
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;