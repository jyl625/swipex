import { useD3 } from '../hooks/useD3';
import React from 'react';
import * as d3 from 'd3';
import { scaleTime } from 'd3-scale'

import { withRouter } from 'react-router-dom';

function LineChart({ data, cafeId }) {

  const ref = useD3(
    (svg) => {
      const height = 500;
      const width = 500;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      // if (match.params.cafeteriaName !== "all")
        // d3.select(`.line-chart-lines`).remove();  
      // d3.select(`#line-chart-line-${cafeId}`).remove();
      // d3.select(`.line-chart-lines`).remove();
      d3.select(`#line-plot-area-${cafeId}`).select(`.line-chart-lines`).remove();

      const x = d3
        .scaleBand()
        .domain(Array.from({ length: 30 }, (_, i) => i + 1))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.closePrice)])
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

      const yAxis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "black")
          .call(d3.axisLeft(y).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) => g
            .append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(data.y)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(yAxis);

      // var dataSum = d3.sum(data, function (d) {
      //   return d.closePrice;
      // });

      svg.select(`#line-plot-area-${cafeId}`).append("path")
      // svg.select(".plot-area").append("path")
        .datum(data)
        .attr("id", `line-chart-line-${cafeId}`) // add id to the line and remove it at rerendering above at line 14: d3.select("#line-chart-lines").remove()
        .attr("class", `line-chart-lines`) // add id to the line and remove it at rerendering above at line 14: d3.select("#line-chart-lines").remove()
        .attr("fill", "none")
        .attr("stroke", "#09A603")
        .attr("stroke-width", 3)
        .attr("d", d3.line()
          .x(function (d) { return x(d.preDate) })
          .y(function (d) { return y(d.closePrice) })
        )
        // .attr("d2", d3.line()
        //   .x(function (d) { return x(d.preDate) })
        //   .y(function (d) { return y(dataSum / d.length) })
        // )

    },
    [data]
  );

  console.log(data[29].closePrice)

  return (
    <>
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
        <g id={`line-plot-area-${cafeId}`} />
        {/* <g className="plot-area" /> */}
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <div>
        Today's average price: ${data[29].closePrice}
      </div>
    </>
  );
}

export default withRouter(LineChart);