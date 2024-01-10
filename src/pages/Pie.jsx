import { Box } from "@mui/material";
import { Header } from "../components";
import * as d3 from "d3";
import { mockPieData } from "../data/mokData";

function Pie() {
  const height = 500;
  const width = 600;
  const total = mockPieData.reduce((sum, item) => sum + item.value, 0);
  
  const scale = d3.scaleLinear()
                  .domain([0, total])
                  .range([Math.PI/2,5*Math.PI/2])

  function part(startValue, value){
    const arc = d3.arc() 
            .innerRadius(1) 
            .outerRadius(height/2) 
            .startAngle(scale(startValue)) 
            .endAngle(scale(value+startValue)); 
    return arc();
  }

  return (
    <Box>
      <Header title="Pie CHART"  subtitle="Simple pie chart"/>
      <div className="pieChart"  style={{margin: "1rem"}}>
        <svg  width={width} height={height} style={{ margin: "0 auto", display:'block'}}>
          
          {
            mockPieData.map((data, i) => {
              const {value, color, label} = data;
              const startValue = mockPieData.slice(0,i).reduce((sum, item) => sum + item.value, 0);
              return (
                <path key={value} d={part(startValue,value)} transform={`translate(${width/2}, ${height/2})`} fill={color}>
                  <title>{`${label} : ${Math.round((value/total)*100)}%`}</title>
                </path>
              )
            })
          }
        </svg>
      </div>
    </Box>
  )
}
export default Pie