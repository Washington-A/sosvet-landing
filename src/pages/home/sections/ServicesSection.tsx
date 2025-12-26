import React from 'react';
import {Box, Container, Typography, Grid, useTheme} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import HotelIcon from '@mui/icons-material/Hotel';
import ScienceIcon from '@mui/icons-material/Science';
import PetsIcon from '@mui/icons-material/Pets';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ServiceCard from "../../../components/card/ServiceCard.tsx";
import LogoHeader from "../../../components/logoHeader/LogoHeader.tsx";

const ServicesSection: React.FC = () => {

    const theme = useTheme();

    const services = [
        {
            icon: <LocalHospitalIcon fontSize="inherit" />,
            title: 'Clínica',
            description: 'Consultas, vacinação e tratamento de doenças para a saúde do seu pet.'
        },
        {
            icon: <ContentCutIcon fontSize="inherit" />,
            title: 'Cirurgias',
            description: 'Procedimentos cirúrgicos com segurança e tecnologia avançada para diversos casos.'
        },
        {
            icon: <HotelIcon fontSize="inherit" />,
            title: 'Internação',
            description: 'Acompanhamento intensivo e cuidados 24h para pets internados, com equipe dedicada.'
        },
        {
            icon: <ScienceIcon fontSize="inherit" />,
            title: 'Exames Laboratoriais',
            description: 'Hemograma completo para cães e gatos com tecnologia IDEXX, além de mais de 30 exames bioquímicos e 15 testes rápidos, oferecendo diagnósticos ágeis, seguros e confiáveis.'
        },
        {
            icon: <MedicalInformationIcon fontSize="inherit" />,
            title: 'Raio X',
            description: 'Exames radiográficos digitais de alta qualidade para diagnósticos precisos.'
        },
        {
            icon: <MonitorHeartIcon fontSize="inherit" />,
            title: 'Ultrassom',
            description: 'Exames de imagem para avaliação detalhada de órgãos internos.'
        },
        {
            icon: <PetsIcon fontSize="inherit" />,
            title: 'Estética Animal',
            description: 'Banhos, tosas e cuidados de higiene com a linha Hydra da Pet Society, promovendo bem-estar, beleza e saúde para o seu pet.'
        }
    ];

    return (
        <Box
            component="section"
            id="servicos"
            sx={{
                    px: 2,
                backgroundColor: "transparent"
            }}
        >
            <Container maxWidth="lg">
                <LogoHeader size="medium" />
                {/* Título da Seção */}
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: {
                            xs: '2rem',
                            sm: '2.5rem',
                            md: '3rem'
                        },
                        color: theme.palette.primary.main,
                        mb: { xs: 6, md: 8 },
                        letterSpacing: '-0.01em'
                    }}
                >
                    Nossos Serviços
                </Typography>

                {/* Grid de Cards */}
                <Grid
                    container
                    spacing={{ xs: 3, sm: 3, md: 4 }}
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    {services.map((service, index) => (
                        <Grid
                            key={index}
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 4
                            }}
                        >
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesSection;