import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from "react-router-dom"; // ✅
import { useDevice } from "../../contexts/DeviceContext.tsx";
import app_routes from "../../routes/app_routes.ts";

const menuItems = [
    { label: 'Home', to: app_routes.home },
    { label: 'Sobre Nós', to: app_routes.about },
    { label: 'Profissionais', to: app_routes.professionalsPage },
    { label: 'Contato', to: app_routes.contact },
];

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { isMobile } = useDevice();

    const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

    return (
        <>
            <AppBar
                position="sticky"
                elevation={1}
                sx={{ backgroundColor: 'white', borderBottom: '1px solid', borderColor: 'divider' }}
            >
                <Container maxWidth={false}>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>

                        <Box
                            component={RouterLink}
                            to={app_routes.home}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: 'primary.main',
                                fontWeight: 700,
                                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                transition: 'color 0.3s',
                                '&:hover': { color: 'primary.dark' }
                            }}
                        >
                            Centro Veterinário S.O.S
                        </Box>

                        {isMobile ? (
                            <IconButton
                                color="inherit"
                                aria-label="abrir menu"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{
                                    color: 'primary.main',
                                    '&:hover': { backgroundColor: 'rgba(244, 37, 37, 0.08)' }
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                {menuItems.map((item) => (
                                    <Button
                                        key={item.label}
                                        component={RouterLink}
                                        to={item.to}
                                        sx={{
                                            color: 'text.primary',
                                            textTransform: 'none',
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            px: 2,
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                color: 'primary.main',
                                                backgroundColor: 'rgba(244, 37, 37, 0.05)'
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Drawer do Menu Mobile */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
            >
                <Box sx={{ width: 250, height: '100%', bgcolor: 'background.paper' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 2,
                            borderBottom: '1px solid',
                            borderColor: 'divider'
                        }}
                    >
                        <Box sx={{ color: 'primary.main', fontWeight: 700, fontSize: '1.1rem' }}>
                            Menu
                        </Box>
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{ '&:hover': { backgroundColor: 'rgba(244, 37, 37, 0.08)' } }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <List sx={{ pt: 1 }}>
                        {menuItems.map((item) => (
                            <ListItem key={item.label} disablePadding>
                                <ListItemButton
                                    component={RouterLink}
                                    to={item.to}
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        py: 2,
                                        px: 3,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            backgroundColor: 'rgba(244, 37, 37, 0.05)',
                                            '& .MuiListItemText-primary': { color: 'primary.main' }
                                        }
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        sx={{
                                            '& .MuiTypography-root': {
                                                color: 'text.primary',
                                                fontWeight: 500,
                                                transition: 'color 0.3s'
                                            }
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
