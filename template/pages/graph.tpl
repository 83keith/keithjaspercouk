<br />
<div id="graph" style="width: 80vw; height: 80vh;"></div>
<script type="text/javascript">
    {literal}

        var dynamo = {/literal}{$GraphData}{literal}

        var timestamps = new Array;
        var dataUP = new Array;
        var dataDOWN = new Array;
        for (i = 0; i < dynamo.length; i++) {
            timestamps.push(new Date(dynamo[i]['timeStamp']).toISOString().split('T')[0]);
            dataUP.push(new Number(dynamo[i]["dataUP"] / 1024).toFixed(2));
            dataDOWN.push(new Number(dynamo[i]["dataDOWN"] / 1024).toFixed(2));
        }
    {/literal}
</script>

<script type="text/javascript">
    {literal}
        //TODO Extrct DATA from awsfunctions and translate to echart usingPHP
        // Initialize the echarts instance based on the prepared dom
        var myChart = echarts.init(document.getElementById("graph"), 'dark');
        //var myChart = echarts.init(chartDom, 'dark');
        // Specify the configuration items and data for the chart
        var option = (option = {
            title: {
                text: "Stacked Line",
            },
            tooltip: {
                trigger: "axis",
            },
            legend: {
                data: ["Data Out (Kb)", "Data In (Kb)"],
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                },
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: timestamps,
            },
            yAxis: {
                type: "value",
            },
            series: [{
                    name: "Data Out (Kb)",
                    type: "line",
                    stack: "Total",
                    data: dataUP,
                },
                {
                    name: "Data In (Kb)",
                    type: "line",
                    stack: "Total",
                    data: dataDOWN,
                },
            ],
        });
        // Display the chart using the configuration items and data just specified.
        myChart.setOption(option);
    {/literal}
</script>

