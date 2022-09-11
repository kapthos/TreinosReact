import React from 'react'
import { Typography, AppBar, Toolbar, Box } from '@mui/material'
import { PhotoCamera, Menu } from '@mui/icons-material'

function Header() {
    return (
        <AppBar position="relative">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <PhotoCamera sx={{ mr: 2 }} />
                    <Typography variant="h6"> Photo Album </Typography>
                </Box>
                <Menu />
            </Toolbar>
        </AppBar>
    )
}

export default Header