var viz_1 = "choropleth_map.json";
vegaEmbed("#choropleth_map", viz_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);