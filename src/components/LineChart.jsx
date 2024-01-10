import * as d3 from "d3";
import { mockLineData } from "../data/mokData";
import React, { useEffect } from "react";

function LineChart({width, height}) {
    const padding = {left: 28, right: 10, top: 10, bottom: 20};

    const xValues = mockLineData[1].data.map(xData => xData.x);
    const xScale = d3.scaleBand()
                    .domain(xValues)
                    .range([padding.left,width-padding.right]);
  
    const yValues = mockLineData.reduce((values,country) => {
      const yValue = country.data.map(data => data.y)
      values = values.concat(...yValue);
      return values
    },[]);
    const yScale = d3.scaleLinear()
                     .domain([0,d3.max(yValues)])
                     .range([(height-padding.bottom),padding.top])
                     .nice();
    useEffect(()=>{
      const selection = d3.select("div[class=LineChart]>svg");
      selection.append("g")
                .attr("transform", `translate(0,${height - padding.bottom})`)
                .call(d3.axisBottom(xScale));
                
      selection.append("g")
              .attr("transform", `translate(${padding.left}, 0)`)
              .call(d3.axisLeft(yScale));
    },[])
  
  return (
    <div className="LineChart"  style={{margin: "1rem"}}>
        <svg  width={width} height={height} style={{ margin: "0 auto", display:'block'}}>
          
          {
            mockLineData.map(country => (
              <React.Fragment key={country.id}>
                <path 
                  key={country.id} 
                  d={d3.line()
                    .x(d => xScale(d.x))
                    .y(d => yScale(d.y))
                    .curve(d3.curveCardinal)(country.data)
                  } 
                  fill="none" 
                  stroke={country.color}
                  >
                  <title>{country.id}</title>
                </path>
                {
                  country.data.map((data, i)=>(
                    <circle 
                        key={i}
                        cx={xScale(data.x)}
                        cy={yScale(data.y)} 
                        r={5}
                        fill="transparent"
                        stroke="blue"
                        strokeWidth=".5"
                        className="region"
                    >
                        <title>{`${country.id} : (${data.x},${data.y})`}</title>
                    </circle>
                  ))
                }
              </React.Fragment>
            ))
          }
        </svg>
      </div>
  )
}

export default LineChart