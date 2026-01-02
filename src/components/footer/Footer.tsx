import React from 'react';
import { Box, Container, Typography, Grid, Link, Stack, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link as RouterLink } from 'react-router-dom';
import app_routes from "../../routes/app_routes.ts";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const navigationLinks = [
        { label: 'Home', path: app_routes.home },
        { label: 'Sobre Nós', path: app_routes.about },
        { label: 'Profissionais', path: app_routes.professionalsPage },
        { label: 'Contato', path: app_routes.contact },
    ];

    const units = [
        {
            city: 'Santa Helena de Goiás',
            address: 'R. Paulo Lopes, n° 857 - Centro, Santa Helena de Goiás - GO, 75920-000',
            phone: '(64) 3641-2561',
            emergency: '(64) 99289-1730',
            whatsapp: '5564992805001'
        },
    ];

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider',
                pt: { xs: 6, md: 8 },
                pb: 3
            }}
        >
            <Container maxWidth="lg">
                {/* Conteúdo Principal do Footer */}
                <Grid container spacing={{ xs: 4, md: 6 }}>
                    {/* Coluna 1: Logo e Descrição */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ mb: 2 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    color: 'primary.main',
                                    mb: 1
                                }}
                            >
                                Centro Veterinário S.O.S
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ lineHeight: 1.7 }}
                            >
                                Cuidado e amor em cada consulta.
                            </Typography>
                        </Box>

                    </Grid>

                    {/* Coluna 2: Navegação */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                color: 'text.primary',
                                mb: 2,
                                fontSize: '1rem'
                            }}
                        >
                            Navegação
                        </Typography>
                        <Stack spacing={1}>
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    component={RouterLink}
                                    to={link.path}
                                    sx={{
                                        color: 'text.secondary',
                                        textDecoration: 'none',
                                        fontSize: '0.875rem',
                                        transition: 'color 0.2s',
                                        '&:hover': {
                                            color: 'primary.main'
                                        }
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Coluna 3: Nossas Unidades */}
                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                color: 'text.primary',
                                mb: 2,
                                fontSize: '1rem'
                            }}
                        >
                            Nossas Unidades
                        </Typography>

                        <Stack spacing={3}>
                            {units.map((unit, index) => (
                                <Box key={index}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontWeight: 600,
                                            color: 'primary.main',
                                            mb: 0.5
                                        }}
                                    >
                                        {unit.city}
                                    </Typography>

                                    {/* Endereço */}
                                    <Box sx={{ display: 'flex', gap: 1, mb: 0.5 }}>
                                        <LocationOnIcon
                                            sx={{
                                                fontSize: '1rem',
                                                color: 'text.secondary',
                                                mt: 0.2
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                                        >
                                            {unit.address}
                                        </Typography>
                                    </Box>

                                    {/* Telefone */}
                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                        <PhoneIcon
                                            sx={{
                                                fontSize: '1rem',
                                                color: 'text.secondary'
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ fontSize: '0.875rem' }}
                                        >
                                            {unit.phone}
                                            {unit.emergency && (
                                                <Box component="span" sx={{ display: 'block', fontWeight: 600 }}>
                                                    Plantão: {unit.emergency}
                                                </Box>
                                            )}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                {/* Divider */}
                <Divider sx={{ my: 4 }} />

                {/* Copyright e Links Legais */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.875rem' }}
                    >
                        © {currentYear} Centro Veterinário S.O.S. Todos os direitos reservados.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;