import React from 'react';
import {Outlet} from 'react-router-dom';
import {Box} from '@mui/material';
import Header from "../Header/Header.tsx";
import Footer from "../footer/Footer.tsx";

const MainLayout: React.FC = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                '&::before': {
                    content: '""',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: {xs: '80%', sm: '60%', md: '50%', lg: '40%'},
                    height: 'auto',
                    aspectRatio: '1',
                    backgroundImage: 'url(/sosvet-landing/images/logo-background.jpg)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.03,
                    zIndex: 0,
                    pointerEvents: 'none'
                }
            }}
        >
            <Header/>
            <Box
                component="main"
                sx={{
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <Outlet/>
            </Box>
            <Footer/>
        </Box>
    );
};

export default MainLayout;