import { Box } from "@mui/material";
import { Header, LineChart } from "../components";

function Line() {
  const height = 500;
  const width = 960;
  return (
    <Box>
      <Header title="Line CHART"  subtitle="Simple Line chart"/>
      <LineChart width={width} height={height}/>
    </Box>
  )
}
export default Line