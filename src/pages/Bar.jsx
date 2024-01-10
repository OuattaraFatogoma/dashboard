import { Box } from "@mui/material";
import { BarChart, Header } from "../components";


function Bar() {
  const height = 500;
  const width = 600;
  return (
    <Box>
      <Header title="BAR CHART"  subtitle="Simple bar chart"/>
      <BarChart width={width} height={height}/>
    </Box>
  )
}
export default Bar