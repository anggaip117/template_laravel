function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}

function myFunction(){

    //var selec = $('#aioConceptName').val()
    //console.log(selec)
    FusionCharts.options.creditLabel = false;
    var get = 'charger'
    jQuery(document).ready(function ($) {
        $.getJSON(get, function(data) {
            var transaction_id = data.id;
            var val_energy = data.data_energy;
            var val_voltage = data.data_voltage;
            var val_current = data.data_current;
            var status_evo = data.status_evo;
            var status_bender = data.status_bender;

            if (status_evo[0]['status'] == 'Charging') {
                $('#statusEvo').html('Charging');
                var value_evo = data.value_evo2;
                var total_energy = val_energy[0]['value'] - value_evo[0]['start_value'];
                $('#transidEvo').html(value_evo[0]['transaction_pk']);
                var date = new Date(value_evo[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value_evo[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(val_energy[0]['value_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);

                $('#starttimeEvo').html(date);
                $('#startvalueEvo').html(value_evo[0]['start_value']);
                if (total_energy > 1){
                    $('#totalvalueEvo').html(total_energy);
                    $('#costEvo').html("Rp."+Math.ceil((total_energy)*2.466));
                    $('#chargingtimeEvo').html(charging_time);
                    }
                else {
                    $('#totalvalueEvo').html(" ");
                    $('#costEvo').html(" ");
                    $('#chargingtimeEvo').html(" ");
                }

            }
            else {
                var value_evo = data.value_evo1;
                $('#statusEvo').html('Charging Finished');
                $('#transidEvo').html(value_evo[0]['transaction_pk']);
                var date = new Date(value_evo[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value_evo[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value_evo[0]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttimeEvo').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value_evo[0]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptimeEvo').html(date);
                $('#totalvalueEvo').html(value_evo[0]['stop_value'] - value_evo[0]['start_value']);
                $('#costEvo').html("Rp."+Math.ceil((value_evo[0]['stop_value'] - value_evo[0]['start_value'])*2.466));
                $('#chargingtimeEvo').html(charging_time);

            }

            if (status_bender[0]['status'] == 'Charging') {
                $('#statusBender').html('Charging');
                var value_bender = data.value_bender2;
                var total_energy = val_energy[0]['value'] - value_bender[0]['start_value'];
                $('#transidBender').html(value_bender[0]['transaction_pk']);
                var date = new Date(value_bender[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value_bender[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(val_energy[0]['value_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttimeBender').html(date);
                $('#startvalueBender').html(value_Bender[0]['start_value']);
                if (total_energy > 1){
                    $('#totalvalueBender').html(total_energy);
                    $('#costBender').html("Rp."+Math.ceil((total_energy)*2.466));
                    $('#chargingtimeBender').html(charging_time);
                    }
                else {
                    $('#totalvalueBender').html(" ");
                    $('#costBender').html(" ");
                    $('#chargingtimeBender').html(" ");
                }

            }
            else {
                var value_bender = data.value_bender1;
                $('#statusBender').html('Charging Finished');
                $('#transidBender').html(value_bender[0]['transaction_pk']);
                var date = new Date(value_bender[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#starttimeBender').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value_bender[0]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value_bender[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value_bender[0]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#stoptimeBender').html(date);
                $('#totalvalueBender').html(value_bender[0]['stop_value'] - value_bender[0]['start_value']);
                $('#costBender').html("Rp."+Math.ceil((value_bender[0]['stop_value'] - value_bender[0]['start_value'])*2.466));
                $('#chargingtimeBender').html(charging_time);

            }

            const date_value = [];
            const total_value = [];
            const maxmin_value = [];


            if (val_voltage.length < 60) {
                for (let i = 0 ; i < val_voltage.length  ; i++) {

                    var daya = parseFloat(val_voltage[val_voltage.length -1 -i]['value']) * parseFloat(val_current[val_current.length -1 -i]['value']);
                    if (daya > 1) {
                    var date = new Date(val_voltage[val_voltage.length -1 -i]['value_timestamp']);
                        var date = date.toString();
                        var date = date.slice(16,24);

                    date_value.push({

                        "label": date,
                        //"label": val_voltage[val_voltage.length -1 -i]['value_timestamp'].slice(11,19),
                        //"value": val_data[val_data.length -1 -i]['total']
                    })

                        total_value.push({
                        "value": daya
                    })

                    maxmin_value.push(
                        daya
                    )
                    }

                  }
            }

            else {
                for (let i = 0; i < 60; i++) {
                    var daya = parseFloat(val_voltage[val_voltage.length -1 -i]['value']) * parseFloat(val_current[val_current.length -1 -i]['value']);
                    if (daya > 1) {
                    date_value.push({
                        "label": val_data[59 - i]['value_timestamp'].slice(11,19),
                        //"value": val_data[59 - i]['total']
                    })

                        total_value.push({
                        "value": daya
                    })

                    maxmin_value.push(
                        daya
                    )
                    }

                  }
            }

            const max_value = Math.max(...maxmin_value);
            const min_value = Math.min(...maxmin_value);
            //console.log(max_value);
            //console.log(min_value);
            //console.log(maxmin_value);

            $("#beranda-chart").insertFusionCharts({
                id: "beranda1",
                type: "msline",
                //creditLabel: false,
                width: '100%',
                height: "600",
                dataFormat: "json",
                dataSource:  {
                        chart: {
                            "caption": "Transaction ID "+transaction_id[0]['transaction_pk'],
                            //"subCaption": "Last month",
                            "yAxisName": "Power (Watt)",
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
                            "drawAnchors": 0,
                            "yAxisMaxValue": Math.ceil(max_value),
                            "yAxisMinValue": Math.floor(min_value)
                        },
                        categories: [
                            {
                              category: date_value
                            }
                          ],
                          dataset: [
                            {
                              seriesname: "Power",
                              data: total_value
                            }
                          ]

                }
            });

        });
    });
}


myFunction()

var myVar = setInterval(function() {
    updateData();
  }, 30000);

function updateData() {
    console.log("data updated")
    var chartVolt = FusionCharts("beranda1")


    var get = 'charger'


    jQuery(document).ready(function ($) {
        $.getJSON(get, function(data) {
            var transaction_id = data.id;
            var val_energy = data.data_energy;
            var val_voltage = data.data_voltage;
            var val_current = data.data_current;
            var status_evo = data.status_evo;
            var status_bender = data.status_bender;
            var last_value = data.last_value;

            function convertUTCDateToLocalDate(date) {
            var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

              var offset = date.getTimezoneOffset() / 60;
              var hours = date.getHours();

              newDate.setHours(hours - offset);

              return newDate;
    }

            $('#statusEvo').html(status_evo[0]['status']);
            $('#statusBender').html(status_bender[0]['status']);

            if (status_evo[0]['status'] == 'Charging') {
                $('#statusEvo').html('Charging');
                var value_evo = data.value_evo2;
                var total_energy = val_energy[0]['value'] - value_evo[0]['start_value'];
                $('#transidEvo').html(value_evo[0]['transaction_pk']);
                var date = new Date(value_evo[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value_evo[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(val_energy[0]['value_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);

                $('#starttimeEvo').html(date);
                $('#startvalueEvo').html(value_evo[0]['start_value']);
                if (total_energy > 1){
                    $('#totalvalueEvo').html(total_energy);
                    $('#costEvo').html("Rp."+Math.ceil((total_energy)*2.466));
                    $('#chargingtimeEvo').html(charging_time);
                    }
                else {
                    $('#totalvalueEvo').html(" ");
                    $('#costEvo').html(" ");
                    $('#chargingtimeEvo').html(" ");
                }

            }
            else {
                var value_evo = data.value_evo1;
                $('#statusEvo').html('Charging Finished');
                $('#transidEvo').html(value_evo[0]['transaction_pk']);
                var date = new Date(value_evo[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value_evo[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value_evo[0]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttimeEvo').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value_evo[0]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptimeEvo').html(date);
                $('#totalvalueEvo').html(value_evo[0]['stop_value'] - value_evo[0]['start_value']);
                $('#costEvo').html("Rp."+Math.ceil((value_evo[0]['stop_value'] - value_evo[0]['start_value'])*2.466));
                $('#chargingtimeEvo').html(charging_time);

            }

            if (status_bender[0]['status'] == 'Charging') {
                $('#statusBender').html('Charging');
                var value_bender = data.value_bender2;
                var total_energy = val_energy[0]['value'] - value_bender[0]['start_value'];
                $('#transidBender').html(value_bender[0]['transaction_pk']);
                var date = new Date(value_bender[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value_bender[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(val_energy[0]['value_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttimeBender').html(date);
                $('#startvalueBender').html(value_Bender[0]['start_value']);
                if (total_energy > 1){
                    $('#totalvalueBender').html(total_energy);
                    $('#costBender').html("Rp."+Math.ceil((total_energy)*2.466));
                    $('#chargingtimeBender').html(charging_time);
                    }
                else {
                    $('#totalvalueBender').html(" ");
                    $('#costBender').html(" ");
                    $('#chargingtimeBender').html(" ");
                }

            }
            else {
                var value_bender = data.value_bender1;
                $('#statusBender').html('Charging Finished');
                $('#transidBender').html(value_bender[0]['transaction_pk']);
                var date = new Date(value_bender[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#starttimeBender').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value_bender[0]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value_bender[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value_bender[0]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#stoptimeBender').html(date);
                $('#totalvalueBender').html(value_bender[0]['stop_value'] - value_bender[0]['start_value']);
                $('#costBender').html("Rp."+Math.ceil((value_bender[0]['stop_value'] - value_bender[0]['start_value'])*2.466));
                $('#chargingtimeBender').html(charging_time);

            }

            const date_value = [];
            const total_value = [];
            const maxmin_value = [];

            if (val_voltage.length < 60) {
                for (let i = 0 ; i < val_voltage.length  ; i++) {

                    var daya = parseFloat(val_voltage[val_voltage.length -1 -i]['value']) * parseFloat(val_current[val_current.length -1 -i]['value']);
                    if (daya > 1) {
                     var date = new Date(val_voltage[val_voltage.length -1 -i]['value_timestamp']);
                        var date = date.toString();
                        var date = date.slice(16,24);
                    date_value.push({

                        "label": date,
                        //"label": val_voltage[val_voltage.length -1 -i]['value_timestamp'].slice(11,19),
                        //"value": val_data[val_data.length -1 -i]['total']
                    })

                        total_value.push({
                        "value": daya
                    })

                    maxmin_value.push(
                        daya
                    )
                    }

                  }
            }
            else {
                for (let i = 0; i < 60; i++) {
                    var daya = parseFloat(val_voltage[val_voltage.length -1 -i]['value']) * parseFloat(val_current[val_current.length -1 -i]['value']);
                    if (daya > 1) {
                    date_value.push({
                        "label": val_data[59 - i]['value_timestamp'].slice(11,19),
                        //"value": val_data[59 - i]['total']
                    })

                        total_value.push({
                        "value": daya
                    })

                    maxmin_value.push(
                        daya
                    )
                    }

                  }
            }

            const max_value = Math.max(...maxmin_value);
            const min_value = Math.min(...maxmin_value);
            //console.log(max_value);
            //console.log(min_value);
            //console.log(maxmin_value);


            var year_2014 = {
                chart: {
                    "creditLabel": false,
                    "caption": "Transaction ID "+transaction_id[0]['transaction_pk'],
                    //"subCaption": "Last month",
                    "yAxisName": "Power (Watt)",
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
                    "drawAnchors": 0,
                    "yAxisMaxValue": Math.ceil(max_value),
                    "yAxisMinValue": Math.floor(min_value)
                },
                categories: [
                    {
                      category: date_value
                    }
                  ],
                  dataset: [
                    {
                      seriesname: "Power",
                      data: total_value
                    }
                  ]

        };

           chartVolt.setChartData(year_2014, "json");

    });
    });
}
