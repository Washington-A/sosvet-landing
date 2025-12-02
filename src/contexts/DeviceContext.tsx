
import React, { createContext, useContext, type ReactNode } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

interface DeviceContextType {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

interface DeviceProviderProps {
    children: ReactNode;
}

export const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
    const theme = useTheme();

    // abaixo de 900px - xs e sm
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // entre 600px e 1199px - sm e md
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

    // acima de 1200px - lg e xl
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));


    const value: DeviceContextType = {
        isMobile,
        isTablet,
        isDesktop,
    };

    return (
        <DeviceContext.Provider value={value}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDevice = (): DeviceContextType => {
    const context = useContext(DeviceContext);

    if (context === undefined) {
        throw new Error('useDevice deve ser usado dentro de um DeviceProvider');
    }

    return context;
};