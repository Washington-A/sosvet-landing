import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
                                                     icon,
                                                     title,
                                                     description,

                                                 }) => {
    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: 'none',
                backgroundColor: 'transparent',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    '& .service-icon': {
                        transform: 'scale(1.1)',
                        color: 'primary.main'
                    }
                }
            }}
        >
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 3, md: 4 },
                    px: { xs: 2, md: 3 }
                }}
            >
                {/* Ícone */}
                <Box
                    className="service-icon"
                    sx={{
                        mb: 3,
                        color: 'primary.main',
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {icon}
                </Box>

                {/* Título */}
                <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                        mb: 2
                    }}
                >
                    {title}
                </Typography>

                {/* Descrição */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        lineHeight: 1.6,
                        fontSize: { xs: '0.875rem', md: '0.95rem' }
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;