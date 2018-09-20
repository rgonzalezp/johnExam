import React, {Component} from "react";
import vegaEmbed from 'vega-embed';

class BarChart extends Component {

	componentDidMount()
	{
		// do the fetch here of the data and order it


		var config = {
      // default view background color
      // covers the entire view component
      background: "#ffffff",
      axis: {
        labelFont: "serif",
        labelFontSize: 16,
        tickWidth: 3,
        tickColor: "red"
      }
    };
    var spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "description": "A simple bar chart with embedded data.",
      "data": {
        "values": [
          { "a": "A", "b": 28 }, { "a": "B", "b": 55 }, { "a": "C", "b": 43 },
          { "a": "D", "b": 91 }, { "a": "E", "b": 81 }, { "a": "F", "b": 53 },
          { "a": "G", "b": 19 }, { "a": "H", "b": 87 }, { "a": "I", "b": 52 }
        ]
      },
      "mark": "bar",
      "encoding": {
        "x": { "field": "a", "type": "ordinal" },
        "y": { "field": "b", "type": "quantitative" },
        "tooltip": { "field": "b", "type": "quantitative" }
      }
    }
    vegaEmbed('#vis', spec, { config: config, tooltip: { theme: 'dark' }, defaultStyle: true }).then(function (result) {
      console.log(result);
    }).catch(console.error);
	}

	render() {
		return(
			<div></div>
			)
	}

}
export default BarChart;