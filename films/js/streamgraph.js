const drawStreamGraph = (data) => {
  // Generate the streamgraph here

  /*******************************/
  /*    Append the containers    */
  /*******************************/
  const svg = d3
    .select("#streamgraph")
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .style("border", "1px solid black");

  const innerChart = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const stackGenerator = d3
    .stack()
    .keys(formatsInfo.map((f) => f.id))
    .order(d3.stackOrderInsideOut)
    .offset(d3.stackOffsetSilhouette);

  const annotatedData = stackGenerator(data);
  console.log(annotatedData);

  const minLowerBoundaries = [];
  const maxLowerBoundaries = [];

  annotatedData.forEach((series) => {
    minLowerBoundaries.push(d3.min(series, (d) => d[0]));
    maxLowerBoundaries.push(d3.max(series, (d) => d[1]));
  });

  console.log(minLowerBoundaries, maxLowerBoundaries);

  const minDomain = d3.min(minLowerBoundaries);
  const maxDomain = d3.max(maxLowerBoundaries);

  const yScale = d3
    .scaleLinear()
    .domain([minDomain, maxDomain])
    .range([innerHeight, 0])
    .nice();

  //   // this was used before we centered the stream graph
  //   // const maxUpperBoundary = d3.max(
  //   //   annotatedData[annotatedData.length - 1],
  //   //   (d) => d[1],
  //   // );

  const bottomAxis = d3
    .axisBottom(xScale)
    .tickValues(d3.range(1995, 2018, 3))
    .tickSizeOuter(0)
    .tickSize(innerHeight * -1);

  innerChart
    .append("g")
    .attr("class", "x-axis-streamgraph")
    .attr("transform", `translate(0, ${innerHeight})`)
    .call(bottomAxis);

  const areaGenerator = d3
    .area()
    .x((d) => xScale(d.data.year) + xScale.bandwidth() / 2)
    .y0((d) => yScale(d[0]))
    .y1((d) => yScale(d[1]))
    .curve(d3.curveCatmullRom);

  innerChart
    .append("g")
    .attr("class", "areas-container")
    .selectAll("path")
    .data(annotatedData)
    .join("path")
    .attr("d", areaGenerator)
    .attr("fill", (d) => colorScale(d.key));

  const leftAxis = d3.axisLeft(yScale);

  innerChart.append("g").call(leftAxis);

  const leftAxisLabel = svg.append("text").attr("dominant-baseline", "hanging");

  leftAxisLabel.append("tspan").text("Total Tickets Sold");
  leftAxisLabel.append("tspan").attr("dx", 5).attr("fill-opacity", 0.7);
};
