d3.csv("../../data/films.csv").then((data) => {
  console.log(data);

  // data preprocessing
  // i think i'm just going to make the data format the same as the example from the book just for simplicity, also i don't have a lot of time...
  // {
  //   "year": 1973,
  //   "vinyl": 8268.55,
  //   "eight_track": 2815.68,
  //   "cassette": 437.611081081,
  //   "cd": 0,
  //   "download": 0,
  //   "streaming": 0,
  //   "other": 89.825432432
  // }
  // this is the format, and each obj has a year, and the sales (i guess?), so i'll just focus on tickets sold since its a simple number no need for adjusting

  // what i want for this data is:
  // { "year": year
  // "Adventure": tickets sold for adventure in that year
  // "Action": tickets sold for action in that year
  //
  // }
  newData = {};
  data.forEach((element) => {
    newData[element["year"]] = {};
  });

  data.forEach((element) => {
    newData[element["year"]][element["genre"]] = element["tickets_sold"];
    // console.log(element);
  });

  let newNewData = [];

  for (const key in newData) {
    let temp = {};
    temp["year"] = Number(key);
    // console.log(`${key}: ${newData[key]}`);
    // newNewData.push({})
    for (const key1 in newData[key]) {
      console.log(`${key1}: ${newData[key][key1]}`);
      temp[key1] = Number(newData[key][key1]);
    }
    newNewData.push(temp);
  }
  const columns = [
    "Action",
    "Adventure",
    "Comedy",
    "Dark Comedy",
    "Documentary",
    "Drama",
    "Horror",
    "Romantic Comedy",
    "Thriller or Suspense",
    "Western",
    "Multiple Genres",
    "Musical",
    "Concert or Performance",
  ];
  for (const obj in newNewData) {
    console.log("test");
    console.log(newNewData[obj]);
    columns.forEach((column) => {
      if (newNewData[obj][column] === undefined) {
        newNewData[obj][column] = 0;
      }
      // console.log(column);
    });
  }

  console.log(newNewData);

  defineScales(newNewData);
  drawDonutCharts(newNewData);
  drawStackedBars(newNewData);
  drawStreamGraph(newNewData);
  addLegend();
});
