import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default function Chart(props) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);

    x.data = props.data;

    let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "date";
    categoryAxis.renderer.labels.template.fontSize = 10;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.min = Math.min(...props.data.map((el) => el.value));
    valueAxis.renderer.labels.template.fontSize = 10;

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.categoryX = "date";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value} °C";
    series.name = "Temperature";
    x.cursor = new am4charts.XYCursor();

    x.legend = new am4charts.Legend();
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}
