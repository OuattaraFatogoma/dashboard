import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { 
  Drawer, 
  IconButton, 
  Toolbar, 
  Typography, 
  List, 
  Box, 
  useTheme,
  ListItem, 
  ListItemText,
  Avatar,
  ListItemIcon,
  ListItemButton,
  Divider,
} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ContactsOutlineIcon from '@mui/icons-material/Contacts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import TimelineIcon from '@mui/icons-material/Timeline';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { token, } from "../theme";

const pages = [
  "/", 
  "/team", 
  "/contact", 
  "/invoices", 
  "/form", 
  "/calendar", 
  "/faq", 
  "/bar",
  "/pie",
  "/line",
  "/geography",
] 

function InnerDrawer(mobileOpen, setIsSidebarOpen){
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const page = useLocation();

  const [selectedIndex, setSelectedIndex] = useState(pages.indexOf(page.pathname));
  return(
    <List 
    sx={{
      color: colors.grey[200], 
      backgroundColor: colors.primary[400],
      '& .css-cveggr-MuiListItemIcon-root':{color: colors.grey[200]},
      }}>

      <Toolbar sx={{display: 'flex', justifyContent: 'space-between', position: "sticky", top:"0", left:"0", backgroundColor: colors.primary[400], zIndex:"1"}}>
        <Typography variant="h6">ADMINS</Typography>
        <IconButton onClick={()=> setIsSidebarOpen(false)}>
          {mobileOpen && <CloseOutlinedIcon/>}
        </IconButton>
      </Toolbar>

      <Box marginBottom="1rem">
        <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar alt="admin" src="../../images/user.png" sx={{width:"100px", height:"100px"}}/>
        </Box>
        <Box textAlign="center">
          <Typography variant="h5">Ed Roh</Typography>
          <Typography variant="subtitle2" sx={{color: colors.greenAccent[400]}}>VP Fancy Admin</Typography>
        </Box>
      </Box>

      <ListItem >
        <Link to="/">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={() => setSelectedIndex(0)}
            sx={{'&.Mui-selected':{backgroundColor: colors.primary[500]}}}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard'/>
          </ListItemButton>
        </Link>
      </ListItem>

      <Divider/>
      <ListItem>
        <ListItemText primary='Data'/>
      </ListItem>
      

      <ListItem>
        <Link to="/team">
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={() => setSelectedIndex(1)}
            sx={{'&.Mui-selected':{backgroundColor: colors.primary[500]}}}
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary='Manage Team'/>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem>
        <Link to="/contact">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={() => setSelectedIndex(2)}
            sx={{'&.Mui-selected':{backgroundColor: colors.primary[500]}}}
          >
            <ListItemIcon>
              <ContactsOutlineIcon />
            </ListItemIcon>
            <ListItemText primary='Contacts Information'/>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem>
        <Link to="/invoices">
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={() => setSelectedIndex(3)}
            sx={{'&.Mui-selected':{backgroundColor: colors.primary[500]}}}
          >
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary='Invoices'/>
          </ListItemButton>
        </Link>
      </ListItem>

      <Divider/>
      <ListItem>
        <ListItemText primary='Pages'/>
      </ListItem>

      <ListItem>
        <Link to="/form">
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={() => setSelectedIndex(4)}
            sx={{'&.Mui-selected':{backgroundColor: colors.primary[500]}}}
          >
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary='Profile Form'/>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem >
        <Link to="/calendar">
          <ListItemButton
            selected={selectedIndex === 5}
            onClick={() => setSelectedIndex(5)}
            sx={{'&.Mui-selected':{backgroundColor: colors.primary[500]}}}
          >
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary='Calendar'/>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem>
        <Link to="/faq">
          <ListItemButton
            selected={selectedIndex === 6}
            onClick={() => setSelectedIndex(6)}
            sx={{'&.Mui-selected':{backgroundColor: colors.primary[500]}}}
          >
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary='FAQ Page'/>
          </ListItemButton>
        </Link>
      </ListItem>

      <Divider/>
      <ListItem>
        <ListItemText primary='Charts'/>
      </ListItem>

      <ListItem>
        <Link to="/bar">
          <ListItemButton
            selected={selectedIndex === 7}
            onClick={() => setSelectedIndex(7)}
            sx={{'&.Mui-selected':{backgroundColor: colors.primary[500]}}}
          >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary='Bar Chart'/>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem>
        <Link to="/pie">
          <ListItemButton
            selected={selectedIndex === 8}
            onClick={() => setSelectedIndex(8)}
            sx={{'&.Mui-selected':{backgroundColor: colors.primary[500]}}}
          >
            <ListItemIcon>
              <PieChartOutlineIcon />
            </ListItemIcon>
            <ListItemText primary='Pie Chart'/>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem>
        <Link to="/line">
          <ListItemButton
            selected={selectedIndex === 9}
            onClick={() => setSelectedIndex(9)}
            sx={{'&.Mui-selected':{backgroundColor: colors.primary[500]}}}
          >
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary='Line Chart'/>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem>
        <Link to="/geography">
          <ListItemButton
            selected={selectedIndex === 10}
            onClick={() => setSelectedIndex(10)}
            sx={{'&.Mui-selected':{backgroundColor: colors.primary[500]}}}
          >
            <ListItemIcon>
              <MapOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Geography Chart'/>
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  )
}

function Sidebar({setIsSidebarOpen, isSidebarOpen}) {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Box
      component="nav"
      sx={{ width: { md: 300 }, flexShrink: { md: 0 } }}
      >
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300, backgroundColor: colors.primary[400]},
        }}
        >
          {InnerDrawer(isSidebarOpen, setIsSidebarOpen)}
      </Drawer>

      <Drawer
          variant="temporary"
          open={isSidebarOpen}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300, backgroundColor: colors.primary[400]},
          }}
        >
          {InnerDrawer(isSidebarOpen, setIsSidebarOpen)}
        </Drawer>
    </Box>
    
  )
}

export default Sidebar