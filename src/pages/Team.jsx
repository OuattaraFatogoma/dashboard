import { Header } from "../components";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../data/mokData";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { token } from "../theme";

function Team() {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID', width: "50"},
    { field: 'name', headerName: 'Name', flex: 1},
    { field: 'email', headerName: 'Email', flex: 1},
    { field: 'age', headerName:"Age", width: "50"},
    { field: 'phone', headerName: 'Phone', flex: 1},
    { field: 'access', 
    headerName: 'Access Level', 
    flex: 1,
    renderCell : ({ row: { access }}) =>{
      return(
        <Box 
          width="100%"
          display="flex" 
          justifyContent="center" 
          padding="2px"
          backgroundColor={ access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
          {access === "manager" && <ManageAccountsOutlinedIcon/>}
          {access === "user" && <AccountBoxOutlinedIcon/>}
          <Typography sx={{color: colors.grey[100], ml:"10px"}}>{access}</Typography>
        </Box>
      )
    }
    },
  ]
  return (
    <Box>
      <Header title="TEAM" subtitle="Managing the team members" />
      <DataGrid 
        rows={mockDataTeam}
        columns={columns}
        sx={{mt: "2rem", height: "70vh"}}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
      />
    </Box>
  )
}

export default Team