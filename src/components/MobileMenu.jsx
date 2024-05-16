import React, { memo } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton,Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const MobileMenu = ({mobileMoreAnchorEl,mobileMenuId,isMobileMenuOpen,handleMobileMenuClose}) => {
  
  return (
    <>
       <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
     
   
    </Menu>
    </>
  )
}

export default memo( MobileMenu)
