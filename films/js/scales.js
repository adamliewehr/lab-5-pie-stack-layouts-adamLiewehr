// Initialize the scales here

const xScale = d3.scaleBand();
// band scales accept a discrete input as a domain and return a continuous output from the range.

const colorScale = d3.scaleOrdinal();

const defineScales = (data) => {
  // Define the scales domain and range here

  // this is saying the xScale is
  xScale
    .domain(data.map((d) => d.year)) // these are all the years in the original data array
    .range([0, innerWidth]) // width of the chart
    .paddingInner(0.2); // this is for the stacked bar chart for later (doesn't effect the donut charts)

  colorScale
    .domain(formatsInfo.map((f) => f.id))
    .range(formatsInfo.map((f) => f.color));
};
