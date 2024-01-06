import { Header } from "../components";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../data/mokData";
import { token } from "../theme";

function Invoices() {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID', width: "50"},
    { field: 'name', headerName: 'Name', flex: 1},
    { field: 'email', headerName: 'Email', flex: 1},
    { field: 'phone', headerName: 'Phone', flex: 1},
    { field: 'date', headerName: 'Date', flex: 1},
    { field: 'cost', 
    headerName: 'Cost', 
    width: "100",
    renderCell : ({ row: { cost }}) =>{
      return(
          <Typography sx={{color: colors.greenAccent[500], ml:"10px"}}>${cost}</Typography>
      )
    }
    },
  ]
  return (
    <Box>
      <Header title="INVOICES" subtitle="List of invoice balances" />
      <DataGrid 
        rows={mockDataInvoices}
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

export default Invoices