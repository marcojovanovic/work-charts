// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
function Pie3D({data}) {

   const values = Object.values(data)
    

  
  // STEP 2 - Chart Data
const chartData = values

 
// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "pie3d", // The chart type
  width: "50%", // Width of the chart -- mora u procentima da bude lepo responsive
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Most Popular",
      //Set the chart subcaption
      //Set the x-axis name
      xAxisName: "Repos",
      //Set the y-axis name
      yAxisName: "Most popular language",
      numberSuffix: "K",
      //Set the theme for your chart
      theme: "fusion",  //(druge teme: ocean, candy, carbon, zune, gammel)
      // more chart options 
      
      decimals:0,  
      decimals:0,
      doughnutRadius:'45%',  // svaki chart treba da ima svoj nazivRadius
      showPercentValues:0,    // kada je 0 onda su prikazani okrugli brojevi a ne u procentima
     
  

    },
    // Chart Data
    data: chartData
  }
};

    return (<ReactFC {...chartConfigs} />);
}

export default Pie3D
