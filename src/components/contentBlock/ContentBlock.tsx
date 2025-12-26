import React from 'react';
import { Box, Typography, Container } from '@mui/material';

interface ContentBlockProps {
    title: string;
    subtitle?: string;
    content: string;
    image: string;
    imageAlt: string;
    imagePosition: 'left' | 'right';
    type?: 'text' | 'list';
    listItems?: string[];
    backgroundColor?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
                                                       title,
                                                       subtitle,
                                                       content,
                                                       image,
                                                       imageAlt,
                                                       imagePosition,
                                                       type = 'text',
                                                       listItems,
                                                       backgroundColor = 'transparent'
                                                   }) => {
    return (
        <Box
            sx={{
                py: { xs: 6, md: 8, lg: 10 },
                px: 2,
                backgroundColor
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
                        gap: { xs: 3, md: 4 }
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
                                width: '90%',
                                height: 'auto',
                                borderRadius: { xs: 2, md: 3 },
                                boxShadow: 3,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.02)'
                                }
                            }}
                        />
                    </Box>

                    {/* Conteúdo de Texto */}
                    <Box
                        sx={{
                            flex: { xs: '1', md: '0 0 55%' },
                            width: { xs: '100%', md: '55%' }
                        }}
                    >
                        {/* Título */}
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '1.5rem', md: '1.75rem', lg: '2rem' },
                                color: 'primary.main',
                                mb: 1.5,
                                letterSpacing: '-0.01em'
                            }}
                        >
                            {title}
                        </Typography>

                        {/* Subtítulo */}
                        {subtitle && (
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.125rem', md: '1.25rem' },
                                    color: 'text.primary',
                                    mb: 2,
                                    fontStyle: subtitle.includes('"') ? 'italic' : 'normal'
                                }}
                            >
                                {subtitle}
                            </Typography>
                        )}

                        {/* Conteúdo */}
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                lineHeight: 1.8,
                                textAlign:'justify',
                                mb: type === 'list' ? 2 : 0
                            }}
                        >
                            {content}
                        </Typography>

                        {/* Lista (se houver) */}
                        {type === 'list' && listItems && (
                            <Box
                                component="ul"
                                sx={{
                                    pl: 3,
                                    mt: 2,
                                    '& li': {
                                        color: 'text.secondary',
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                        lineHeight: 1.8,
                                        mb: 1,
                                        '&::marker': {
                                            color: 'primary.main'
                                        }
                                    }
                                }}
                            >
                                {listItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </Box>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ContentBlock;