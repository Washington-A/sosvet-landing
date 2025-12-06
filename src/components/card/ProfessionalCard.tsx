import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

interface ProfessionalCardProps {
    image: string;
    name: string;
    specialty: string;
    description: string;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
                                                               image,
                                                               name,
                                                               specialty,
                                                               description
                                                           }) => {
    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: 'none',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    '& .professional-image': {
                        transform: 'scale(1.05)'
                    }
                }
            }}
        >
            {/* Foto do Profissional */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '100%',
                    overflow: 'hidden',
                    borderRadius: 2,
                    mb: 2
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    className="professional-image"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </Box>

            {/* Informações do Profissional */}
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 0,
                    '&:last-child': {
                        paddingBottom: 0
                    }
                }}
            >
                {/* Nome */}
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 0.5,
                        fontSize: { xs: '1.125rem', md: '1.25rem' }
                    }}
                >
                    {name}
                </Typography>

                {/* Especialidade */}
                <Typography
                    variant="body2"
                    sx={{
                        color: 'secondary.main',
                        fontWeight: 500,
                        mb: 1.5,
                        fontSize: { xs: '0.875rem', md: '0.95rem' }
                    }}
                >
                    {specialty}
                </Typography>

                {/* Descrição */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        lineHeight: 1.6,
                        fontSize: { xs: '0.875rem', md: '0.95rem' },
                        textAlign: 'justify'
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProfessionalCard;