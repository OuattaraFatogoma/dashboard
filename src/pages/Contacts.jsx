import { Header } from "../components";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../data/mokData";
import { token } from "../theme";

function Contacts() {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID', width: "50"},
    { field: 'registrarId', headerName: 'Registrar ID', width: "100"},
    { field: 'name', headerName: 'Name', flex: 1},
    { field: 'email', headerName: 'Email', flex: 1},
    { field: 'age', headerName:"Age", width: "50", type: 'number'},
    { field: 'phone', headerName: 'Phone', flex: 1},
    { field: 'address', headerName: 'Address', flex: 1},
    { field: 'city', headerName: 'City', flex: 1},
    { field: 'zipCode', headerName: 'Zip Code', flex: 1},
  ]
  return (
    <Box>
      <Header title="CONTACTS" subtitle="List of contacts for future reference" />
      <DataGrid 
        rows={mockDataContacts}
        columns={columns}
        slots={{toolbar : GridToolbar}}
        sx={{
          mt: "2rem", 
          height: "70vh", 
          "& .MuiDataGrid-toolbarContainer .MuiButton-text":{color: colors.grey[100]},
        }}
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

export default Contacts