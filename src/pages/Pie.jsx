import { Box } from "@mui/material";
import { Header, PieChart } from "../components";

function Pie() {
  const height = 500;
  const width = 600;

  return (
    <Box>
      <Header title="Pie CHART"  subtitle="Simple pie chart"/>
      <PieChart width={width} height={height}/>
    </Box>
  )
}
export default Pie