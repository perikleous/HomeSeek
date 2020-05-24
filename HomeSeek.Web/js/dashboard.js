'use strict';
function legendClickCallback(event) {
    event = event || window.event;

    var target = event.target || event.srcElement;
    while (target.nodeName !== 'LI') {
        target = target.parentElement;
    }
    var parent = target.parentElement;
    var chartId = parseInt(parent.classList[0].split("-")[0], 10);
    var chart = Chart.instances[chartId];
    var index = Array.prototype.slice.call(parent.children).indexOf(target);
    var meta = chart.getDatasetMeta(index);
    if (meta.hidden === null) {
        meta.hidden = !chart.data.datasets[index].hidden;
        target.classList.add('hidden-lable');
    } else {
        target.classList.remove('hidden-lable');
        meta.hidden = null;
    }
    chart.update();
}
var config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
        datasets: [{
                label: 'Bookings per Month',
                fill: true,
                animation: false,
                backgroundColor: "rgba(94, 207, 177, 0.2)",
                borderColor: "#5ECFB1",
				pointBackgroundColor:"#fff",
                pointBorderWidth: 1,
				pointBorderColor: "#5ECFB1",
                pointHoverBorderWidth: 1,
                data: [0, 0, 0, 0, 1, 1, 1,0,0,0,0,0]
            },
            {
                label: 'Places per City',
                fill: true,
                animation: false,
                backgroundColor: "rgba(77, 183, 254, 0.2)",
                borderColor: "#4DB7FE",
				pointBackgroundColor:"#fff",
                pointBorderWidth: 1,
				pointBorderColor: "#4DB7FE",
                pointBorderWidth: 1,
                pointHoverBorderWidth: 1,

                data: [12, 32, 62, 12, 49, 12, 92]
            },

        ]
    },
    options: {
        legend: {
            display: false
        },
        hover: {
            onHover: function (e) {
                var point = this.getElementAtEvent(e);
                if (point.length) e.target.style.cursor = 'pointer';
                else e.target.style.cursor = 'default';
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.2)",
                    fontStyle: "bold",
                    beginAtZero: true,

                    padding: 20
                },
                gridLines: {

                    display: true,
                    zeroLineColor: "transparent"
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }],

        },
        tooltips: {
            backgroundColor: "rgba(0,0,0,0.6)",
            titleMarginBottom: 10,
            footerMarginTop: 6,
            xPadding: 22,
            yPadding: 12
        }
    }
};
var ctx = document.getElementById("canvas-chart");
var myLegendContainer = document.getElementById("myChartLegend");

var myChart = new Chart(ctx, config);
myLegendContainer.innerHTML = myChart.generateLegend();
var legendItems = myLegendContainer.getElementsByTagName('li');
for (var i = 0; i < legendItems.length; i += 1) {
    legendItems[i].addEventListener("click", legendClickCallback, false);
}

var config1 = {
    type: 'line',
    data: {
        labels: ['Psichiko', 'Nea Makri', 'Mykonos'],
        datasets: [{
            label: 'Places per City',
            fill: true,
            animation: false,
            backgroundColor: "rgba(94, 207, 177, 0.2)",
            borderColor: "#5ECFB1",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointBorderColor: "#5ECFB1",
            pointHoverBorderWidth: 1,
            data: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
        },
        {
            label: 'Places per City',
            fill: true,
            animation: false,
            backgroundColor: "rgba(77, 183, 254, 0.2)",
            borderColor: "#4DB7FE",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointBorderColor: "#4DB7FE",
            pointBorderWidth: 1,
            pointHoverBorderWidth: 1,

            data: [12, 32, 62, 12, 49, 12, 92]
        },

        ]
    },
    options: {
        legend: {
            display: false
        },
        hover: {
            onHover: function (e) {
                var point = this.getElementAtEvent(e);
                if (point.length) e.target.style.cursor = 'pointer';
                else e.target.style.cursor = 'default';
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.2)",
                    fontStyle: "bold",
                    beginAtZero: true,

                    padding: 20
                },
                gridLines: {

                    display: true,
                    zeroLineColor: "transparent"
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }],

        },
        tooltips: {
            backgroundColor: "rgba(0,0,0,0.6)",
            titleMarginBottom: 10,
            footerMarginTop: 6,
            xPadding: 22,
            yPadding: 12
        }
    }
};
var ctx1 = document.getElementById("canvas-chart1");
var myLegendContainer = document.getElementById("myChartLegend1");

var myChart1 = new Chart(ctx1, config1);
myLegendContainer.innerHTML = myChart1.generateLegend();
var legendItems = myLegendContainer.getElementsByTagName('li');
for (var i = 0; i < legendItems.length; i += 1) {
    legendItems[i].addEventListener("click", legendClickCallback, false);
}