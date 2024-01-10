import { Box } from "@mui/material";
import { Header } from "../components";
import * as d3 from "d3";
import { useEffect } from "react";
import { mockBarData } from "../data/mokData";

function Bar() {
  const height = 500;
  const width = 600;
  const padding = {left: 50, right: 50, top: 60, bottom: 40};
  const xScale = d3.scaleBand()
                   .domain(mockBarData.map(country => country.country))
                   .range([padding.left, width-padding.right])
                   .padding(.1);

  const barsLength = mockBarData.map(country => ({
    country: country.country,
    barLength: country["hot dog"] + country.burger + country.donut + country.kebab
  }))

  const yScale = d3.scaleLinear()
                   .domain( [0,d3.max(barsLength.map(country => country.barLength))])
                   .range([0, (height-padding.top)])

  console.log(yScale.ticks());
  console.log(yScale(445));

  useEffect(()=>{
    const selection = d3.select("div[class=barChart]>svg")

    // hot dog 
    selection.selectAll("rect[class=hotDog]")
            .data(mockBarData)
            .join("rect")
            .attr("class", "hotDog")
            .attr("x", d => xScale(d.country))
            .attr("y", d => (height - yScale(d["hot dog"] ) - padding.bottom))
            .attr("width", xScale.bandwidth())
            .attr("height", d => yScale(d["hot dog"]))
            .attr("fill", "darkred")  
            .append("title")
            .text(d => (`${d.country},${d["hot dog"]}`))

    // burger 
    selection.selectAll("rect[class=burger]")
            .data(mockBarData)
            .join("rect")
            .attr("class", "burger")
            .attr("x", d => xScale(d.country))
            .attr("y", d => (height - yScale(d["hot dog"] + d.burger) - padding.bottom))
            .attr("width", xScale.bandwidth())
            .attr("height", d => yScale(d.burger))
            .attr("fill", "blue")  
            .append("title")
            .text(d => (`${d.country},${d.burger}`))

    // kebab 
    selection.selectAll("rect[class=kebab]")
            .data(mockBarData)
            .join("rect")
            .attr("class", "kebab")
            .attr("x", d => xScale(d.country))
            .attr("y", d => (height - yScale(d["hot dog"] + d.burger + d.kebab) - padding.bottom))
            .attr("width", xScale.bandwidth())
            .attr("height", d => yScale(d.kebab))
            .attr("fill", "yellow")  
            .append("title")
            .text(d => (`${d.country},${d.kebab}`))
    
    // donut 
    selection.selectAll("rect[class=donut]")
            .data(mockBarData)
            .join("rect")
            .attr("class", "donut")
            .attr("x", d => xScale(d.country))
            .attr("y", d => (height - yScale(d["hot dog"] + d.burger + d.kebab + d.donut) - padding.bottom))
            .attr("width", xScale.bandwidth())
            .attr("height", d => yScale(d.donut))
            .attr("fill", "antiquewhite")  
            .append("title")
            .text(d => (`${d.country}: donut,${d.donut}`))

    selection.append("g")
            .attr("transform", `translate(0,${height - padding.bottom})`)
            .call(d3.axisBottom(xScale));

    selection.append("text")
            .attr("text-anchor", "center")
            .attr("x", (width-padding.left-padding.right)/2)
            .attr("y", height-10)
            .text("COUNTRIES")
            .attr("fill", "gray")

    selection.append("g")
            .attr("transform", `translate(${padding.left}, ${padding.top - padding.bottom })`)
            .call(d3.axisLeft(yScale));
  }, [])
  return (
    <Box>
      <Header title="BAR CHART"  subtitle="Simple bar chart"/>
      <div className="barChart"  style={{margin: "1rem"}}>
        <svg  width={width} height={height} style={{border:"1px solid", margin: "0 auto", display:'block'}}>

        </svg>
      </div>
    </Box>
  )
}
export default Bar