import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';

interface Value {
    title: string;
    description: string;
}

interface ValuesListProps {
    image: string;
    imageAlt: string;
    values: Value[];
    imagePosition?: 'left' | 'right';
}

export const ValuesList: React.FC<ValuesListProps> = ({
                                                          image,
                                                          imageAlt,
                                                          values,
                                                          imagePosition = 'left'
                                                      }) => {
    return (
        <Box
            sx={{
                py: { xs: 4, md: 6, lg: 8 },
                px: 2
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            md: imagePosition === 'left' ? 'row' : 'row-reverse'
                        },
                        alignItems: 'center',
                        gap: { xs: 3, md: 4, lg: 6 }
                    }}
                >
                    {/* Imagem */}
                    <Box
                        sx={{
                            flex: { xs: '0 0 auto', md: '0 0 45%' },
                            width: { xs: '100%', md: '45%' },
                            maxWidth: { xs: '100%', sm: '500px', md: '100%' }
                        }}
                    >
                        <Box
                            component="img"
                            src={image}
                            alt={imageAlt}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: { xs: 2, md: 3 },
                                boxShadow: 3
                            }}
                        />
                    </Box>

                    {/* Lista de Valores */}
                    <Box
                        sx={{
                            flex: { xs: '1', md: '0 0 55%' },
                            width: { xs: '100%', md: '55%' }
                        }}
                    >
                        <Stack spacing={3}>
                            {values.map((value, index) => (
                                <Box key={index}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            color: 'text.primary',
                                            mb: 1,
                                            fontSize: { xs: '1.125rem', md: '1.25rem' }
                                        }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{ color: 'primary.main', mr: 1 }}
                                        >
                                            •
                                        </Box>
                                        {value.title}:
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            pl: 3,
                                            lineHeight: 1.7
                                        }}
                                    >
                                        {value.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};