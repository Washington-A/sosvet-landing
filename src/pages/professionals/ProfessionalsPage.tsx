import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import ProfessionalCard from "../../components/card/ProfessionalCard.tsx";

const ProfessionalsPage: React.FC = () => {
    const professionals = [
        {
            image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
            name: 'Dra. Ana Silva',
            specialty: 'Clínica Geral e Cirurgia',
            description: 'Com mais de 15 anos de experiência, Dra. Ana é especialista em clínica geral e procedimentos cirúrgicos complexos, dedicada ao bem-estar e recuperação de seus pacientes.'
        },
        {
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
            name: 'Dr. Carlos Mendes',
            specialty: 'Dermatologia Veterinária',
            description: 'Referência em dermatologia, Dr. Carlos trata as mais diversas afecções de pele em pets, utilizando as técnicas mais modernas para garantir conforto e saúde.'
        },
        {
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
            name: 'Dra. Sofia Lima',
            specialty: 'Anestesiologia e Terapia da Dor',
            description: 'Responsável por garantir cirurgias seguras e um pós-operatório confortável, a Dra. Sofia tem expertise em controle da dor e anestesia avançada.'
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
            name: 'Dr. Ricardo Gomes',
            specialty: 'Odontologia Veterinária',
            description: 'Dr. Ricardo cuida da saúde bucal do seu pet, prevenindo e tratando doenças periodontais para garantir uma vida mais longa e saudável.'
        },
        {
            image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop',
            name: 'Dra. Mariana Costa',
            specialty: 'Cardiologia Veterinária',
            description: 'Especialista em doenças do coração de cães e gatos, a Dra. Mariana oferece diagnósticos precisos e tratamentos eficazes para garantir a qualidade de vida.'
        },
        {
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
            name: 'Dr. Pedro Álvares',
            specialty: 'Ortopedia e Fisioterapia',
            description: 'Com foco em recuperação de lesões e melhora da mobilidade, Dr. Pedro é dedicado a restaurar a qualidade de vida de pets com problemas ortopédicos.'
        },
        {
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
            name: 'Dra. Laura Fernandes',
            specialty: 'Oftalmologia Veterinária',
            description: 'A Dra. Laura é a nossa especialista em saúde ocular, realizando exames detalhados e cirurgias para preservar a visão do seu companheiro.'
        },
        {
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
            name: 'Dr. Marcos Dias',
            specialty: 'Medicina Felina',
            description: 'Dedicado exclusivamente aos gatos, Dr. Marcos compreende as necessidades específicas dos felinos, oferecendo cuidados especializados.'
        }
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
                        No SOS Centro Veterinário, seu pet está em boas mãos. Nossa equipe de
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