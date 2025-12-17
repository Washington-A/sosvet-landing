import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ContentBlock from "../../components/contentBlock/ContentBlock.tsx";
import {aboutBlocks} from "../../data/aboutData.ts";
import LogoHeader from "../../components/logoHeader/LogoHeader.tsx";


const AboutPage: React.FC = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: "transparent"
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
                <Container maxWidth="md">
                    <LogoHeader size="medium" />

                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            color: 'primary.main',
                            mb: 3,
                            letterSpacing: '-0.01em'
                        }}
                    >
                        Sobre Nós
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            lineHeight: 1.8,
                            maxWidth: '700px',
                            mx: 'auto'
                        }}
                    >
                        No Centro Veterinário S.O.S, dedicamos nossa paixão e expertise para
                        garantir a saúde e o bem-estar dos seus companheiros. Conheça a nossa
                        história, os valores que nos guiam e a visão que nos impulsiona, tudo para
                        oferecer o melhor cuidado ao seu pet.
                    </Typography>
                </Container>
            </Box>

            {/* Blocos de Conteúdo */}
            {aboutBlocks.map((block) => (
                <ContentBlock
                    key={block.id}
                    title={block.title}
                    subtitle={block.subtitle}
                    content={block.content}
                    image={block.image}
                    imageAlt={block.imageAlt}
                    imagePosition={block.imagePosition}
                    type={block.type}
                    listItems={block.listItems}
                />
            ))}
        </Box>
    );
};

export default AboutPage;