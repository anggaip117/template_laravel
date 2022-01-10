
function myFunction(){

    var selec = $('#aioConceptName').val()
    console.log(selec)
    var get = 'now2'
    jQuery(document).ready(function ($) {
        $.getJSON(get, function(data) {
            const RP = value => currency(value, { symbol: 'Rp.', decimal: '.', separator: ',' });


            var val_data = data.data;
            var last = val_data[0]['timestamp'].slice(11,16);
            $('#lastId').text(last);

            var price = 1250;

            var nowrp = (val_data[0]['Voltage'] * price);

            var avgrp = (nowrp/24).toFixed(2);
            var avgrp2 = (val_data[0]['Voltage']/24).toFixed(1);

            var nextrp = (val_data[1]['Voltage'] * price);

            var avgnext = (nextrp*0.8).toFixed(2);
            var avgnext2 = (val_data[1]['Voltage']/0.8).toFixed(1);

            var avgnext3 = (nextrp/24).toFixed(2);
            var avgnext4 = (val_data[1]['Voltage']/24).toFixed(1);

            if (avgrp2 > avgnext4) {
                $('#keteranganId1').text("Rata-rata perjam hari ini lebih boros");
              } else {
                $('#keteranganId1').text("Rata-rata perjam hari ini lebih hemat");
              }



            $('#nowId').text(RP(nowrp).format()+" ("+val_data[0]['Voltage']+" kWh)");
            $('#averageId').text(RP(avgrp).format()+" ("+avgrp2+" kWh)");
            $('#monthId').text(RP(nextrp).format()+" ("+val_data[1]['Voltage']+" kWh)");
            $('#avgmonthId').text(RP(avgnext).format()+" ("+avgnext2+" kWh)");
            $('#avgmonth2Id').text(RP(avgnext3).format()+" ("+avgnext4+" kWh)");

            const date_value = [];
            const total_value = [];
            const pump_value = [];
            const ac_value = [];

            $('#detailTime').html(last);
            $('#detailVoltage').html(val_data[0]['Voltage']);
            $('#detailFreq').html(val_data[0]['Frequency']);
            $('#detailPF').html(val_data[0]['Power_Factor']);
            $('#detailC').html(val_data[0]['Current']);
            $('#detailC1').html(val_data[0]['Current1']);
            $('#detailC2').html(val_data[0]['Current2']);
            $('#detailC3').html(val_data[0]['Current3']);




            if (val_data.length < 60) {
                for (let i = 0 ; i < val_data.length  ; i++) {
                    date_value.push({
                        "label": val_data[val_data.length -1 -i]['timestamp'].slice(11,16),
                        //"value": val_data[val_data.length -1 -i]['total']
                    })
                    total_value.push({
                        "value": val_data[val_data.length -1 -i]['total']
                    })
                    pump_value.push({
                        "value": val_data[val_data.length -1 -i]['pump']
                    })
                    ac_value.push({
                        "value": val_data[val_data.length -1 -i]['ac']
                    })
                  }
            }
            else {
                for (let i = 0; i < 60; i++) {
                    date_value.push({
                        "label": val_data[59 - i]['timestamp'].slice(11,16),
                        //"value": val_data[59 - i]['total']
                    })
                    total_value.push({
                        "value": val_data[val_data.length -1 -i]['total']
                    })
                    pump_value.push({
                        "value": val_data[val_data.length -1 -i]['pump']
                    })
                    ac_value.push({
                        "value": val_data[val_data.length -1 -i]['ac']
                    })
                  }
            }


            $("#beranda-chart").insertFusionCharts({
                id: "beranda1",
                type: "msline",
                width: "1100",
                height: "600",
                dataFormat: "json",
                dataSource:  {
                        chart: {
                            "caption": "Electricity Power Consumption (kW) last hour",
                            //"subCaption": "Last month",
                            "yAxisName": "Power (kW)",
                            "xAxisName": "Time",
                            "theme": "fusion",
                            //"lineColor": '344feb',
                            "lineThickness" : 5,
                            "plottooltext" : "$seriesName : $dataValue kW",
                            "xAxisNameFontSize": 20,
                            "xAxisNameFontBold": 1,
                            "yAxisNameFontSize": 20,
                            "yAxisNameFontBold": 1,
                            "captionFontSize":30,
                            "yAxisValueFontSize": 18,
                            "labelFontSize": 18,
                            "exportEnabled": 1,
                            "showBorder": 1,
                            "drawAnchors": 0
                        },
                        categories: [
                            {
                              category: date_value
                            }
                          ],
                          dataset: [
                            {
                              seriesname: "Total",
                              data: total_value
                            },
                            {
                              seriesname: "Pump",
                              data: pump_value
                            },
                            {
                              seriesname: "AC",
                              data: ac_value
                            }
                          ]

                }
            });

        });
    });
}

function updateData1() {
    var chartVolt = FusionCharts("beranda1")

    jQuery(document).ready(function ($) {
        $.getJSON("now2", function(data) {
            const RP = value => currency(value, { symbol: 'Rp.', decimal: '.', separator: ',' });

            var val_data = data.data;
            var last = val_data[0]['timestamp'].slice(11,16);
            $('#lastId').text(last);

            var price = 1250;

            var nowrp = (val_data[0]['Voltage'] * price);

            var avgrp = (nowrp/24).toFixed(2);
            var avgrp2 = (val_data[0]['Voltage']/24).toFixed(1);

            var nextrp = (val_data[1]['Voltage'] * price);

            var avgnext = (nextrp*0.8).toFixed(2);
            var avgnext2 = (val_data[1]['Voltage']/0.8).toFixed(1);

            var avgnext3 = (nextrp/24).toFixed(2);
            var avgnext4 = (val_data[1]['Voltage']/24).toFixed(1);

            if (avgrp2 > avgnext4) {
                $('#keteranganId1').text("Rata-rata perjam hari ini lebih boros");
              } else {
                $('#keteranganId1').text("Rata-rata perjam hari ini lebih hemat");
              }



            $('#nowId').text(RP(nowrp).format()+" ("+val_data[0]['Voltage']+" kWh)");
            $('#averageId').text(RP(avgrp).format()+" ("+avgrp2+" kWh)");
            $('#monthId').text(RP(nextrp).format()+" ("+val_data[1]['Voltage']+" kWh)");
            $('#avgmonthId').text(RP(avgnext).format()+" ("+avgnext2+" kWh)");
            $('#avgmonth2Id').text(RP(avgnext3).format()+" ("+avgnext4+" kWh)");

            const date_value = [];
            const total_value = [];
            const pump_value = [];
            const ac_value = [];

            $('#detailTime').html(last);
            $('#detailVoltage').html(val_data[0]['Voltage']);
            $('#detailFreq').html(val_data[0]['Frequency']);
            $('#detailPF').html(val_data[0]['Power_Factor']);
            $('#detailC').html(val_data[0]['Current']);
            $('#detailC1').html(val_data[0]['Current1']);
            $('#detailC2').html(val_data[0]['Current2']);
            $('#detailC3').html(val_data[0]['Current3']);


            if (val_data.length < 60) {
                for (let i = 0 ; i < val_data.length  ; i++) {
                    date_value.push({
                        "label": val_data[val_data.length -1 -i]['timestamp'].slice(11,16),
                        //"value": val_data[val_data.length -1 -i]['total']
                    })
                    total_value.push({
                        "value": val_data[val_data.length -1 -i]['total']
                    })
                    pump_value.push({
                        "value": val_data[val_data.length -1 -i]['pump']
                    })
                    ac_value.push({
                        "value": val_data[val_data.length -1 -i]['ac']
                    })
                  }
            }
            else {
                for (let i = 0; i < 60; i++) {
                    date_value.push({
                        "label": val_data[59 - i]['timestamp'].slice(11,16),
                        //"value": val_data[59 - i]['total']
                    })
                    total_value.push({
                        "value": val_data[val_data.length -1 -i]['total']
                    })
                    pump_value.push({
                        "value": val_data[val_data.length -1 -i]['pump']
                    })
                    ac_value.push({
                        "value": val_data[val_data.length -1 -i]['ac']
                    })
                  }
            }


            var chart1 = {
                chart: {
                    "caption": "Electricity Power Consumption (kW) last hour",
                    //"subCaption": "Last month",
                    "yAxisName": "Power (kW)",
                    "xAxisName": "Time",
                    "theme": "fusion",
                    //"lineColor": '344feb',
                    "lineThickness" : 5,
                    "plottooltext" : "$seriesName : $dataValue kW",
                    "xAxisNameFontSize": 20,
                    "xAxisNameFontBold": 1,
                    "yAxisNameFontSize": 20,
                    "yAxisNameFontBold": 1,
                    "captionFontSize":30,
                    "yAxisValueFontSize": 18,
                    "labelFontSize": 18,
                    "exportEnabled": 1,
                    "showBorder": 1,
                    "drawAnchors": 0
                },
                categories: [
                    {
                      category: date_value
                    }
                  ],
                  dataset: [
                    {
                      seriesname: "Total",
                      data: total_value
                    },
                    {
                      seriesname: "Pump",
                      data: pump_value
                    },
                    {
                      seriesname: "AC",
                      data: ac_value
                    }
                  ]

        };

           chartVolt.setChartData(chart1, "json");

    });
    });
}

function updateData2() {
    var chartVolt = FusionCharts("beranda1")

    jQuery(document).ready(function ($) {
        $.getJSON("now2x", function(data) {
            const RP = value => currency(value, { symbol: 'Rp.', decimal: '.', separator: ',' });

            var val_data = data.data;
            var last = val_data[0]['timestamp'].slice(11,16);
            $('#lastId').text(last);

            var price = 1250;

            var nowrp = (val_data[0]['Voltage'] * price);

            var avgrp = (nowrp/24).toFixed(2);
            var avgrp2 = (val_data[0]['Voltage']/24).toFixed(1);

            var nextrp = (val_data[1]['Voltage'] * price);

            var avgnext = (nextrp*0.8).toFixed(2);
            var avgnext2 = (val_data[1]['Voltage']/0.8).toFixed(1);

            var avgnext3 = (nextrp/24).toFixed(2);
            var avgnext4 = (val_data[1]['Voltage']/24).toFixed(1);

            if (avgrp2 > avgnext4) {
                $('#keteranganId1').text("Rata-rata perjam hari ini lebih boros");
              } else {
                $('#keteranganId1').text("Rata-rata perjam hari ini lebih hemat");
              }



            $('#nowId').text(RP(nowrp).format()+" ("+val_data[0]['Voltage']+" kWh)");
            $('#averageId').text(RP(avgrp).format()+" ("+avgrp2+" kWh)");
            $('#monthId').text(RP(nextrp).format()+" ("+val_data[1]['Voltage']+" kWh)");
            $('#avgmonthId').text(RP(avgnext).format()+" ("+avgnext2+" kWh)");
            $('#avgmonth2Id').text(RP(avgnext3).format()+" ("+avgnext4+" kWh)");

            const date_value = [];
            const total_value = [];
            const pump_value = [];
            const ac_value = [];


            $('#detailTime').html(last);
            $('#detailVoltage').html(val_data[0]['Voltage']);
            $('#detailFreq').html(val_data[0]['Frequency']);
            $('#detailPF').html(val_data[0]['Power_Factor']);
            $('#detailC').html(val_data[0]['Current']);
            $('#detailC1').html(val_data[0]['Current1']);
            $('#detailC2').html(val_data[0]['Current2']);
            $('#detailC3').html(val_data[0]['Current3']);


            if (val_data.length < 60) {
                for (let i = 0 ; i < val_data.length  ; i++) {
                    date_value.push({
                        "label": val_data[val_data.length -1 -i]['timestamp'].slice(11,16),
                        //"value": val_data[val_data.length -1 -i]['total']
                    })
                    total_value.push({
                        "value": val_data[val_data.length -1 -i]['total']
                    })
                    pump_value.push({
                        "value": val_data[val_data.length -1 -i]['pump']
                    })
                    ac_value.push({
                        "value": val_data[val_data.length -1 -i]['ac']
                    })
                  }
            }
            else {
                for (let i = 0; i < 60; i++) {
                    date_value.push({
                        "label": val_data[59 - i]['timestamp'].slice(11,16),
                        //"value": val_data[59 - i]['total']
                    })
                    total_value.push({
                        "value": val_data[val_data.length -1 -i]['total']
                    })
                    pump_value.push({
                        "value": val_data[val_data.length -1 -i]['pump']
                    })
                    ac_value.push({
                        "value": val_data[val_data.length -1 -i]['ac']
                    })
                  }
            }


            var chart2 = {
                chart: {
                    "caption": "Electricity Power Consumption (kW) last hour",
                    //"subCaption": "Last month",
                    "yAxisName": "Power (kW)",
                    "xAxisName": "Time",
                    "theme": "fusion",
                    //"lineColor": '344feb',
                    "lineThickness" : 5,
                    "plottooltext" : "$seriesName : $dataValue kW",
                    "xAxisNameFontSize": 20,
                    "xAxisNameFontBold": 1,
                    "yAxisNameFontSize": 20,
                    "yAxisNameFontBold": 1,
                    "captionFontSize":30,
                    "yAxisValueFontSize": 18,
                    "labelFontSize": 18,
                    "exportEnabled": 1,
                    "showBorder": 1,
                    "drawAnchors": 0
                },
                categories: [
                    {
                      category: date_value
                    }
                  ],
                  dataset: [
                    {
                      seriesname: "Total",
                      data: total_value
                    },
                    {
                      seriesname: "Pump",
                      data: pump_value
                    },
                    {
                      seriesname: "AC",
                      data: ac_value
                    }
                  ]

        };

           chartVolt.setChartData(chart2, "json");

    });
    });
}

myFunction()

var myVar = setInterval(function() {
    updateData();
  }, 20000);


$(function() {
    $('#aioConceptName').change(function() {
        var selec = $('#aioConceptName').val()
        console.log(selec)
        if (selec == 0) {
            var lokasi = "Gedung 1";
            updateData1()
          }
        else {var lokasi = "Gedung 2";
            updateData2()
          }

        $('#lokasi').text(lokasi);
    });
});


var myTime = setInterval(function() {
    timenow();
  }, 1000);

var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

function timenow() {

    var date = new Date();
    var dateStr =

    ("00" + date.getDate()).slice(-2) + " " +
    month[date.getMonth()] + " " +
    date.getFullYear() + " " +
    ("00" + date.getHours()).slice(-2) + ":" +
    ("00" + date.getMinutes()).slice(-2) + ":" +
    ("00" + date.getSeconds()).slice(-2);

    $('#waktuId').text(dateStr);
};



function updateData() {
    var chartVolt = FusionCharts("beranda1")
    var selec = $('#aioConceptName').val()

    console.log(selec)
    if (selec == 0) {
        var get = 'now2'
      }
    else {
        var get = 'now2x'
      }

    jQuery(document).ready(function ($) {
        $.getJSON(get, function(data) {
            const RP = value => currency(value, { symbol: 'Rp.', decimal: '.', separator: ',' });

            var val_data = data.data;
            var last = val_data[0]['timestamp'].slice(11,16);
            $('#lastId').text(last);

            var price = 1250;

            var nowrp = (val_data[0]['Voltage'] * price);

            var avgrp = (nowrp/24).toFixed(2);
            var avgrp2 = (val_data[0]['Voltage']/24).toFixed(1);

            var nextrp = (val_data[1]['Voltage'] * price);

            var avgnext = (nextrp*0.8).toFixed(2);
            var avgnext2 = (val_data[1]['Voltage']/0.8).toFixed(1);

            var avgnext3 = (nextrp/24).toFixed(2);
            var avgnext4 = (val_data[1]['Voltage']/24).toFixed(1);

            if (avgrp2 > avgnext4) {
                $('#keteranganId1').text("Rata-rata perjam hari ini lebih boros");
              } else {
                $('#keteranganId1').text("Rata-rata perjam hari ini lebih hemat");
              }



            $('#nowId').text(RP(nowrp).format()+" ("+val_data[0]['Voltage']+" kWh)");
            $('#averageId').text(RP(avgrp).format()+" ("+avgrp2+" kWh)");
            $('#monthId').text(RP(nextrp).format()+" ("+val_data[1]['Voltage']+" kWh)");
            $('#avgmonthId').text(RP(avgnext).format()+" ("+avgnext2+" kWh)");
            $('#avgmonth2Id').text(RP(avgnext3).format()+" ("+avgnext4+" kWh)");

            const date_value = [];
            const total_value = [];
            const pump_value = [];
            const ac_value = [];

            $('#detailTime').html(last);
            $('#detailVoltage').html(val_data[0]['Voltage']);
            $('#detailFreq').html(val_data[0]['Frequency']);
            $('#detailPF').html(val_data[0]['Power_Factor']);
            $('#detailC').html(val_data[0]['Current']);
            $('#detailC1').html(val_data[0]['Current1']);
            $('#detailC2').html(val_data[0]['Current2']);
            $('#detailC3').html(val_data[0]['Current3']);

            if (val_data.length < 60) {
                for (let i = 0 ; i < val_data.length  ; i++) {
                    date_value.push({
                        "label": val_data[val_data.length -1 -i]['timestamp'].slice(11,16),
                        //"value": val_data[val_data.length -1 -i]['total']
                    })
                    total_value.push({
                        "value": val_data[val_data.length -1 -i]['total']
                    })
                    pump_value.push({
                        "value": val_data[val_data.length -1 -i]['pump']
                    })
                    ac_value.push({
                        "value": val_data[val_data.length -1 -i]['ac']
                    })
                  }
            }
            else {
                for (let i = 0; i < 60; i++) {
                    date_value.push({
                        "label": val_data[59 - i]['timestamp'].slice(11,16),
                        //"value": val_data[59 - i]['total']
                    })
                    total_value.push({
                        "value": val_data[val_data.length -1 -i]['total']
                    })
                    pump_value.push({
                        "value": val_data[val_data.length -1 -i]['pump']
                    })
                    ac_value.push({
                        "value": val_data[val_data.length -1 -i]['ac']
                    })
                  }
            }


            var year_2014 = {
                chart: {
                    "caption": "Electricity Power Consumption (kW) last hour",
                    //"subCaption": "Last month",
                    "yAxisName": "Power (kW)",
                    "xAxisName": "Time",
                    "theme": "fusion",
                    //"lineColor": '344feb',
                    "lineThickness" : 5,
                    "plottooltext" : "$seriesName : $dataValue kW",
                    "xAxisNameFontSize": 20,
                    "xAxisNameFontBold": 1,
                    "yAxisNameFontSize": 20,
                    "yAxisNameFontBold": 1,
                    "captionFontSize":30,
                    "yAxisValueFontSize": 18,
                    "labelFontSize": 18,
                    "exportEnabled": 1,
                    "showBorder": 1,
                    "drawAnchors": 0
                },
                categories: [
                    {
                      category: date_value
                    }
                  ],
                  dataset: [
                    {
                      seriesname: "Total",
                      data: total_value
                    },
                    {
                      seriesname: "Pump",
                      data: pump_value
                    },
                    {
                      seriesname: "AC",
                      data: ac_value
                    }
                  ]

        };

           chartVolt.setChartData(year_2014, "json");

    });
    });
}
