import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import ProfessionalCard from "../../components/card/ProfessionalCard.tsx";
import LogoHeader from "../../components/logoHeader/LogoHeader.tsx";

const ProfessionalsPage: React.FC = () => {
    const professionals = [
        {
            image: '/images/dr-neto.jpeg',
            name: 'Dr. Lázaro Antunes Cintra Neto',
            specialty: 'Dermatólogo Veterinári',
            description: 'Médica-veterinária especialista em Oftalmologia Veterinária, atua no diagnóstico e tratamento das doenças oculares em cães e gatos, oferecendo atendimento cuidadoso, preciso e focado na qualidade de vida dos pacientes.'
        },
        {
            image: '/images/dr-carlos.png',
            name: 'Dr. Carlos Eduardo',
            specialty: 'Médico Veterinário',
            description: 'Médica-veterinária especialista em Oftalmologia Veterinária, atua no diagnóstico e tratamento das doenças oculares em cães e gatos, oferecendo atendimento cuidadoso, preciso e focado na qualidade de vida dos pacientes.'
        },
        {
            image: '/images/dr-django.jpeg',
            name: 'Dr. Django Fabiano Bessa Gomes Gadelha',
            specialty: 'Médico Veterinário e Especialista',
            description: 'Médico-veterinário formado pela Universidade Federal de Goiás (UFG – Jataí), com mais de 10 anos de experiência clínica e 5 anos de atuação em especialidades.' +
                'É especialista em Ortopedia, Neurologia e Neurocirurgia de pequenos animais, com formação pela Anclivepa-SP e pela Unesp – Jaboticabal. Possui ainda capacitação em cirurgias urológicas avançadas e cirurgia abdominal avançada, atuando com excelência em casos de alta complexidade.' +
                'CRMV 7196'
        },
        {
            image: '/images/dra-tatiana.jpeg',
            name: 'Dra. Tatiana Guimarães Peres',
            specialty: 'Oftalmologista Veterinária',
            description: 'Médica-veterinária especialista em Oftalmologia Veterinária, atua no diagnóstico e tratamento das doenças oculares em cães e gatos, oferecendo atendimento cuidadoso, preciso e focado na qualidade de vida dos pacientes.'
        },

    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: 'transparent'
            }}
        >
            {/* Hero Section */}
            <Box
                sx={{
                    py: { xs: 6, md: 8, lg: 10 },
                    px: 2,
                    textAlign: 'center',
                    backgroundColor: "transparent"
                }}
            >
                <Container maxWidth="lg">
                    <LogoHeader size="medium" />

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
                        Conheça Nossa Equipe de Especialistas
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
                        No Centro Veterinário S.O.S, seu pet está em boas mãos. Nossa equipe de
                        veterinários e especialistas é dedicada a oferecer o melhor cuidado e carinho,
                        combinando experiência e paixão pela saúde animal.
                    </Typography>
                </Container>
            </Box>

            {/* Grid de Profissionais */}
            <Box
                sx={{
                    py: { xs: 6, md: 8, lg: 10 },
                    px: 2,
                    backgroundColor:"transparent",
                }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={{ xs: 3, sm: 3, md: 4 }}
                    >
                        {professionals.map((professional, index) => (
                            <Grid
                                key={index}
                                size={{ xs: 12, sm: 6, md: 3 }}
                            >
                                <ProfessionalCard
                                    image={professional.image}
                                    name={professional.name}
                                    specialty={professional.specialty}
                                    description={professional.description}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default ProfessionalsPage;