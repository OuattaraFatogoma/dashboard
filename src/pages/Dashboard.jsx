import React from 'react'
import { BarChart, Header, LineChart, PieChart, ProgressCircle, StatBox } from '../components';
import { Box, useTheme, Typography, Button,Table, TableContainer, TableBody, TableHead, TableRow, TableCell, Paper} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import { token } from '../theme';
import { DataGrid } from '@mui/x-data-grid';
import { mockTransactions } from '../data/mokData';

function Dashboard() {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
        <Button variant='small' sx={{backgroundColor: colors.greenAccent[700]}}>Dowload <DownloadIcon/></Button>
      </Box>

      <Box
        display="grid"
        gap="2rem"
        gridTemplateColumns="repeat(12, 1fr)" 
        gridColumn="140px"
      >
        <Box
          gridColumn="span 3"
          mt="1.5rem"
        >
          <StatBox 
            icon={<EmailIcon/>} 
            title={"Email Sent"} 
            number="12,361" 
            progress="0.75" 
            increase="+14%" 
          />
        </Box>
        <Box
          gridColumn="span 3"
          mt="1.5rem"
        >
          <StatBox 
            icon={<PointOfSaleOutlinedIcon/>} 
            title={"Sales Obtained"}  
            number="431,225" 
            progress="0.5" 
            increase="+21%" 
          />
        </Box>
        <Box
          gridColumn="span 3"
          mt="1.5rem"
        >
          <StatBox 
            icon={<PersonAddOutlinedIcon/>} 
            title={"New Clients"} 
            number="32,351" 
            progress="0.3" 
            increase="+5%" 
          />
        </Box>
        <Box
          gridColumn="span 3"
          mt="1.5rem"
        >
          <StatBox 
            icon={<TrafficOutlinedIcon/>} 
            title={"Traffic Received"} 
            number="1,312,781" 
            progress="0.80" 
            increase="+43%" 
          />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          padding="1rem"
          backgroundColor= {colors.primary[400]}
          
        >
          <Box display="flex" justifyContent="space-between">
            <Box >
              <Typography  sx={{color: colors.grey[300]}}>
                Revenue General
              </Typography>
              <Typography  sx={{color: colors.greenAccent[700]}}>
                $59,342.32
              </Typography>
            </Box>
            <DownloadIcon sx={{color: colors.greenAccent[700]}}/>
          </Box>
          <LineChart height="200" width="600"/>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          padding="1rem"
          backgroundColor= {colors.primary[400]}
        >
          <TableContainer component={Paper} style={{height: "280px", boxShadow: "none"}}>
            <Table style={{ width: "100%", overflow: "hidden", backgroundColor: colors.primary[400]}} aria-label="simple table">
              <TableHead>
              <Typography >Recent Transactions</Typography>
              </TableHead>
              <TableBody>
                {mockTransactions.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                  >
                    <TableCell component="th" scope="row">
                      <Typography sx={{color: colors.greenAccent[700]}}>{row.id}</Typography>
                      <Typography >{row.user}</Typography>
                    </TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="center"> <Button variant='contained' sx={{backgroundColor: colors.greenAccent[700]}}>{row.cost}</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>


        <Box
          gridColumn="span 4"
          gridRow="span 2"
          padding="1rem"
          backgroundColor= {colors.primary[400]}
          
        >
            <Typography variant="h5" align="left" sx={{color: colors.grey[300]}}>Campaign</Typography>
            <Box display="flex" flexDirection="column" justifyContent='center' alignItems="center" height="100%">
              <ProgressCircle progress='0.75' size='130'/>
              <Typography sx={{color: colors.greenAccent[700]}}>
                $48,342 Revenue generated
              </Typography>
              <Typography  >
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          padding="1rem"
          backgroundColor= {colors.primary[400]}
          
        >
            <Typography variant="h5" align="left" sx={{color: colors.grey[300]}}>Sales Quantity</Typography>
            <BarChart height="240" width="300"/>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          padding="1rem"
          backgroundColor= {colors.primary[400]}
          
        >
            <Typography variant="h5" align="left" sx={{color: colors.grey[300]}}>Sales</Typography>
            <PieChart height="240" width="300"/>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard