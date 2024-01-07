import SearchIcon from '@mui/icons-material/Search';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, InputBase, Toolbar, useTheme } from "@mui/material"
import { ColorModeContext, token } from '../theme';
import { useContext } from 'react';

function Topbar({setIsSidebarOpen}) {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
      <AppBar sx={{boxShadow: "none", position: 'relative'}}>
        <Toolbar sx={{display: 'flex', justifyContent:'space-between', backgroundColor: colors.primary[500] ,}}>
          <Box display="flex">
            <IconButton 
              sx={{display: { xs: 'block', md: 'none' }, padding: "0 .5rem"}}
              onClick={()=>setIsSidebarOpen(true)}
              >
              <MenuIcon/>
            </IconButton>
            <Box backgroundColor={colors.primary[400]} paddingLeft="1rem" display="flex">
              <InputBase placeholder='Search'/>
              <IconButton>
                <SearchIcon/>
              </IconButton>
            </Box>
          </Box>
          <Box flexShrink="0">
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? <Brightness4Icon/> : <Brightness7Icon/>}
            </IconButton>
            <IconButton sx={{display: { xs: 'none', sm: 'inline' }}}>
              <NotificationsNoneIcon/>
            </IconButton>
            <IconButton sx={{display: { xs: 'none', sm: 'inline' }}}>
              <SettingsIcon/>
            </IconButton>
            <IconButton sx={{display: { xs: 'none', sm: 'inline' }}}>
              <PersonIcon/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Topbar