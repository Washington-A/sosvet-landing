import React from 'react';
import { Box } from '@mui/material';

interface LogoHeaderProps {
    size?: 'small' | 'medium' | 'large';
    marginBottom?: number;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({
                                                   size = 'medium',
                                                   marginBottom
                                               }) => {
    const sizeMap = {
        small: { xs: '60px', sm: '70px', md: '80px' },
        medium: { xs: '80px', sm: '100px', md: '120px' },
        large: { xs: '100px', sm: '120px', md: '150px' }
    };

    const defaultMarginBottom = {
        small: { xs: 2, md: 3 },
        medium: { xs: 3, md: 4 },
        large: { xs: 4, md: 5 }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: marginBottom !== undefined ? marginBottom : defaultMarginBottom[size]
            }}
        >
            <Box
                component="img"
                src="/images/logo-animals.png"
                alt="Logo SOS Centro Veterinário"
                sx={{
                    width: sizeMap[size],
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)'
                    }
                }}
            />
        </Box>
    );
};

export default LogoHeader;