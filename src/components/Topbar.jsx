import SearchIcon from '@mui/icons-material/Search';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Box, IconButton, InputBase, Toolbar, useTheme } from "@mui/material"
import { ColorModeContext, token } from '../theme';
import { useContext } from 'react';

function Topbar() {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
      <AppBar sx={{boxShadow: "none",}}>
        <Toolbar sx={{display: 'flex', justifyContent:'space-between', backgroundColor: colors.primary[500] ,}}>
          <Box backgroundColor={colors.primary[400]} paddingLeft="1rem">
            <InputBase placeholder='Search'/>
            <IconButton>
              <SearchIcon/>
            </IconButton>
          </Box>
          <Box>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? <Brightness4Icon/> : <Brightness7Icon/>}
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon/>
            </IconButton>
            <IconButton>
              <SettingsIcon/>
            </IconButton>
            <IconButton>
              <PersonIcon/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Topbar