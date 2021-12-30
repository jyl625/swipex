import {useD3} from '../hooks/useD3';
import React from 'react';
import * as d3 from 'd3';
import { scaleTime } from 'd3-scale'

function BarChart({ data, cafeId }) {
  
  const ref = useD3(
    
    (svg) => {
      const height = 500;
      const width = 500;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      // d3.select(`#bar-chart-bars-${cafeId}`).remove();
      // d3.select(`#bar-plot-area-${cafeId}`).select(`#bar-chart-bars-${cafeId}`).remove();
      d3.select(`#bar-plot-area-${cafeId}`).select(".bar").remove();


      const x = d3
        .scaleBand()
        .domain(Array.from({ length: 30 }, (_, i) => i + 1))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.amount)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        );

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "black")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );  
      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      svg
        .select(`#bar-plot-area-${cafeId}`)
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("id", `bar-chart-bars-${cafeId}`) // add id to remove bars on rerendering
        .attr("class", "bar")
        .attr("fill", function (d) { 
          if (d.amount > 7){
            return "#09A603"
          }else if (d.amount > 3 && d.amount <= 7){
            return "#5DD959"
          }else
          {return "#B5F2B3" }})
        .attr("x", (d) => x(d.preDate))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.amount))
        .attr("height", (d) => y1(0) - y1(d.amount));
        
    },
    [data]
  );

 const renderTodaysVolume = () => {
    const delta = ((data[29].amount - data[28].amount)/data[28].amount*100).toFixed(2);
    const deltaStr = delta < 0 ? ` (${delta}%)` : ` (+${delta}%)`
    return (
      <div className={delta < 0 ? "delta-neg" : "delta-pos"}>
        <span className="amount">{`${data[29].amount}`}</span>
        <span className="amount-unit"> swipe(s) sold</span>{deltaStr}
      </div>
      )
  }

  return (
    <>
      <div className="today-stats">
        {renderTodaysVolume()}
      </div>
      <svg
        ref={ref}
        style={{
          height: 500,
          width: "100%",
          marginRight: "0px",
          marginLeft: "0px",
          // backgroundColor: "AliceBlue"
          backgroundColor: "White"
        }}
      >
        <g id={`bar-plot-area-${cafeId}`} />
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </>
  );
}

export default BarChart;