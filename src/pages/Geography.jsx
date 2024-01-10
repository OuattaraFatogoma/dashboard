import { Box } from "@mui/material";
import { Header } from "../components";
import * as d3 from "d3";
import { mockGeographyData} from "../data/mokData";
import { geoFeatures } from "../data/mockGeoFeatures";

function Geography() {
  const height = 500;
  const width = 960;

  const projection = d3.geoEqualEarth();
  const path = d3.geoPath(projection);
  const graticule = d3.geoGraticule();

  const scale = d3.scaleLinear().domain(d3.extent(mockGeographyData, d => d.value)).range([80,0]);


  function showPopulation(topology){
    const population = mockGeographyData.find(country => country.id === topology.id);
    if(!population) return 0;
    return population.value
  }
  return (
    <Box>
      <Header title="Geographie CHART"  subtitle="Simple Geographie chart"/>
      <div className="geoChart"  style={{margin: "1rem"}}>
        <svg  width={width} height={height} style={{ margin: "0 auto", display:'block', border: "1px solid"}}>
          
          <path d={path(graticule())} className="graticule"/>
          <path d={path(graticule.outline())} className="graticule-outline"/>
          {
            geoFeatures.features.map((topology,i) => 
            <path key={i} d={path(topology)} className="countries" fill={`hsl(235,100%,${scale(showPopulation(topology))}%)`}>
              <title>{`${topology.properties.name} : ${showPopulation(topology)}`}</title>
            </path>
          )
          }

        </svg>
      </div>
    </Box>
  )
}
export default Geography