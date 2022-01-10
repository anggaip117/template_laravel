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

function formatRupiah(angka, prefix){
	var number_string = angka.toString(),
	split   		= number_string.split(','),
	sisa     		= split[0].length % 3,
	rupiah     		= split[0].substr(0, sisa),
	ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

	// tambahkan titik jika yang di input sudah menjadi angka ribuan
	if(ribuan){
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}

	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

function myFunction(){

    //var selec = $('#aioConceptName').val()
    //console.log(selec)
    FusionCharts.options.creditLabel = false;
    var get = 'bender'
    jQuery(document).ready(function ($) {
        $.getJSON(get, function(data) {
            var transaction_id = data.id;
            var charger_id = data.charger_type;
            var val_energy = data.data_energy;
            var val_voltage = data.data_voltage;
            var val_current = data.data_current;
            var val_power = data.data_power;
            var status_bender = data.status_bender;
            var value1 = data.value_1;
            var value2 = data.value_2;

            console.log(charger_id[0]['charge_box_id']);


            if (status_bender[0]['status'] == 'Charging') {
                $('#status1').html("Charging");
                var total_energy = val_energy[0]['value'] - value2[0]['start_value'];
                $('#transid1').html(value2[0]['transaction_pk']);
                var date = new Date(value2[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value2[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(val_energy[0]['value_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);

                $('#starttime1').html(date);
                $('#startvalue1').html(value2[0]['start_value']);
                if (total_energy > 1){
                    $('#totalvalue1').html(total_energy);
                    $('#cost1').html(formatRupiah((Math.ceil(total_energy*2.466)), 'Rp. '));

                    $('#chargingtime1').html(charging_time);
                    }
                else {
                    $('#totalvalue1').html(" ");
                    $('#cost1').html(" ");
                    $('#chargingtime1').html(" ");
                }

                $('#status2').html("Charging Finished");
                $('#transid2').html(value1[1]['transaction_pk']);
                var date = new Date(value1[1]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[1]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[1]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime2').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[1]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime2').html(date);
                $('#totalvalue2').html(value1[1]['stop_value'] - value1[1]['start_value']);
                $('#cost2').html(formatRupiah((Math.ceil((value1[1]['stop_value'] - value1[1]['start_value'])*2.466)), 'Rp. '));
                ('Rp.' + Math.ceil(energy_total*2.466))
                $('#chargingtime2').html(charging_time);

                $('#status3').html("Charging Finished");
                $('#transid3').html(value1[2]['transaction_pk']);
                var date = new Date(value1[2]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[2]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[2]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime3').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[2]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime3').html(date);
                $('#totalvalue3').html(value1[2]['stop_value'] - value1[2]['start_value']);
                $('#cost3').html(formatRupiah((Math.ceil((value1[2]['stop_value'] - value1[2]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime3').html(charging_time);

                $('#status4').html("Charging Finished");
                $('#transid4').html(value1[3]['transaction_pk']);
                var date = new Date(value1[3]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[3]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[3]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime4').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[3]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime4').html(date);
                $('#totalvalue4').html(value1[3]['stop_value'] - value1[3]['start_value']);
                $('#cost4').html(formatRupiah((Math.ceil((value1[3]['stop_value'] - value1[3]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime4').html(charging_time);

                $('#status5').html("Charging Finished");
                $('#transid5').html(value1[4]['transaction_pk']);
                var date = new Date(value1[4]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[4]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[4]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime5').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[4]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime5').html(date);
                $('#totalvalue5').html(value1[4]['stop_value'] - value1[4]['start_value']);
                $('#cost5').html(formatRupiah((Math.ceil((value1[4]['stop_value'] - value1[4]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime5').html(charging_time);

            }
            else {
                $('#status1').html("Charging Finished");
                $('#transid1').html(value1[0]['transaction_pk']);
                var date = new Date(value1[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[0]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime1').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[0]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime1').html(date);
                $('#totalvalue1').html(value1[0]['stop_value'] - value1[0]['start_value']);
                $('#cost1').html(formatRupiah((Math.ceil((value1[0]['stop_value'] - value1[0]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime1').html(charging_time);

                $('#status2').html("Charging Finished");
                $('#transid2').html(value1[1]['transaction_pk']);
                var date = new Date(value1[1]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[1]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[1]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime2').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[1]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime2').html(date);
                $('#totalvalue2').html(value1[1]['stop_value'] - value1[1]['start_value']);
                $('#cost2').html(formatRupiah((Math.ceil((value1[1]['stop_value'] - value1[1]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime2').html(charging_time);

                $('#status3').html("Charging Finished");
                $('#transid3').html(value1[2]['transaction_pk']);
                var date = new Date(value1[2]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[2]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[2]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime3').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[2]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime3').html(date);
                $('#totalvalue3').html(value1[2]['stop_value'] - value1[2]['start_value']);
                $('#cost3').html(formatRupiah((Math.ceil((value1[2]['stop_value'] - value1[2]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime3').html(charging_time);

                $('#status4').html("Charging Finished");
                $('#transid4').html(value1[3]['transaction_pk']);
                var date = new Date(value1[3]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[3]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[3]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime4').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[3]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime4').html(date);
                $('#totalvalue4').html(value1[3]['stop_value'] - value1[3]['start_value']);
                $('#cost4').html(formatRupiah((Math.ceil((value1[3]['stop_value'] - value1[3]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime4').html(charging_time);

                $('#status5').html("Charging Finished");
                $('#transid5').html(value1[4]['transaction_pk']);
                var date = new Date(value1[4]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[4]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[4]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime5').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[4]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime5').html(date);
                $('#totalvalue5').html(formatRupiah((Math.ceil((value1[4]['stop_value'] - value1[4]['start_value'])*2.466)), 'Rp. '));
                $('#cost5').html("Rp."+Math.ceil((value1[4]['stop_value'] - value1[4]['start_value'])*2.466));
                $('#chargingtime5').html(charging_time);

            }


            const date_value = [];
            const total_value = [];
            const maxmin_value = [];

            if (charger_id[0]['charge_box_id'] == 'Evocharge_iEVSE') {

                if (val_voltage.length < 60) {
                    console.log("true")
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

            }

            else {
                console.log("false")
                if (val_power.length < 60) {
                    for (let i = 0 ; i < val_power.length  ; i++) {

                        var daya = parseFloat(val_power[val_power.length -1 -i]['value']);
                        if (daya > 1) {
                        var date = new Date(val_power[val_power.length -1 -i]['value_timestamp']);
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
                        var daya = parseFloat(val_power[val_power.length -1 -i]['value']);
                        if (daya > 1) {
                        date_value.push({
                            "label": val_power[59 - i]['value_timestamp'].slice(11,19),
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


    var get = 'bender'


    jQuery(document).ready(function ($) {
        $.getJSON(get, function(data) {
            var transaction_id = data.id;
            var charger_id = data.charger_type;
            var val_energy = data.data_energy;
            var val_voltage = data.data_voltage;
            var val_current = data.data_current;
            var val_power = data.data_power;
            var status_bender = data.status_bender;
            var value1 = data.value_1;
            var value2 = data.value_2;

            console.log(charger_id[0]['charge_box_id']);


            if (status_bender[0]['status'] == 'Charging') {
                $('#status1').html("Charging");
                var total_energy = val_energy[0]['value'] - value2[0]['start_value'];
                $('#transid1').html(value2[0]['transaction_pk']);
                var date = new Date(value2[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value2[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(val_energy[0]['value_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);

                $('#starttime1').html(date);
                $('#startvalue1').html(value2[0]['start_value']);
                if (total_energy > 1){
                    $('#totalvalue1').html(total_energy);
                    $('#cost1').html(formatRupiah((Math.ceil(total_energy*2.466)), 'Rp. '));
                    $('#chargingtime1').html(charging_time);
                    }
                else {
                    $('#totalvalue1').html(" ");
                    $('#cost1').html(" ");
                    $('#chargingtime1').html(" ");
                }

                $('#status2').html("Charging Finished");
                $('#transid2').html(value1[1]['transaction_pk']);
                var date = new Date(value1[1]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[1]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[1]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime2').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[1]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime2').html(date);
                $('#totalvalue2').html(value1[1]['stop_value'] - value1[1]['start_value']);
                $('#cost2').html(formatRupiah((Math.ceil((value1[1]['stop_value'] - value1[1]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime2').html(charging_time);

                $('#status3').html("Charging Finished");
                $('#transid3').html(value1[2]['transaction_pk']);
                var date = new Date(value1[2]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[2]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[2]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime3').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[2]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime3').html(date);
                $('#totalvalue3').html(value1[2]['stop_value'] - value1[2]['start_value']);
                $('#cost3').html(formatRupiah((Math.ceil((value1[2]['stop_value'] - value1[2]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime3').html(charging_time);

                $('#status4').html("Charging Finished");
                $('#transid4').html(value1[3]['transaction_pk']);
                var date = new Date(value1[3]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[3]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[3]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime4').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[3]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime4').html(date);
                $('#totalvalue4').html(value1[3]['stop_value'] - value1[3]['start_value']);
                $('#cost4').html(formatRupiah((Math.ceil((value1[3]['stop_value'] - value1[3]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime4').html(charging_time);

                $('#status5').html("Charging Finished");
                $('#transid5').html(value1[4]['transaction_pk']);
                var date = new Date(value1[4]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[4]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[4]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime5').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[4]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime5').html(date);
                $('#totalvalue5').html(value1[4]['stop_value'] - value1[4]['start_value']);
                $('#cost5').html(formatRupiah((Math.ceil((value1[4]['stop_value'] - value1[4]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime5').html(charging_time);

            }
            else {
                $('#status1').html("Charging Finished");
                $('#transid1').html(value1[0]['transaction_pk']);
                var date = new Date(value1[0]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[0]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[0]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime1').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[0]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime1').html(date);
                $('#totalvalue1').html(value1[0]['stop_value'] - value1[0]['start_value']);
                $('#cost1').html(formatRupiah((Math.ceil((value1[0]['stop_value'] - value1[0]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime1').html(charging_time);

                $('#status2').html("Charging Finished");
                $('#transid2').html(value1[1]['transaction_pk']);
                var date = new Date(value1[1]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[1]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[1]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime2').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[1]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime2').html(date);
                $('#totalvalue2').html(value1[1]['stop_value'] - value1[1]['start_value']);
                $('#cost2').html(formatRupiah((Math.ceil((value1[1]['stop_value'] - value1[1]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime2').html(charging_time);

                $('#status3').html("Charging Finished");
                $('#transid3').html(value1[2]['transaction_pk']);
                var date = new Date(value1[2]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[2]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[2]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime3').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[2]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime3').html(date);
                $('#totalvalue3').html(value1[2]['stop_value'] - value1[2]['start_value']);
                $('#cost3').html(formatRupiah((Math.ceil((value1[2]['stop_value'] - value1[2]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime3').html(charging_time);

                $('#status4').html("Charging Finished");
                $('#transid4').html(value1[3]['transaction_pk']);
                var date = new Date(value1[3]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[3]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[3]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime4').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[3]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime4').html(date);
                $('#totalvalue4').html(value1[3]['stop_value'] - value1[3]['start_value']);
                $('#cost4').html(formatRupiah((Math.ceil((value1[3]['stop_value'] - value1[3]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime4').html(charging_time);

                $('#status5').html("Charging Finished");
                $('#transid5').html(value1[4]['transaction_pk']);
                var date = new Date(value1[4]['start_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24);
                var int_date = parseInt((new Date(value1[4]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value1[4]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging_time = secondsToHms(int_date2-int_date);
                $('#starttime5').html(date)
                //$('#starttimeEvo').html(value_evo[0]['start_timestamp'].slice(0,19));
                var date = new Date(value1[4]['stop_timestamp']);
                var date = date.toString();
                var date = date.slice(0,24)
                $('#stoptime5').html(date);
                $('#totalvalue5').html(value1[4]['stop_value'] - value1[4]['start_value']);
                $('#cost5').html(formatRupiah((Math.ceil((value1[4]['stop_value'] - value1[4]['start_value'])*2.466)), 'Rp. '));
                $('#chargingtime5').html(charging_time);

            }

            const date_value = [];
            const total_value = [];
            const maxmin_value = [];

            if (charger_id[0]['charge_box_id'] == 'Evocharge_iEVSE') {

                if (val_voltage.length < 60) {
                    console.log("true")
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

            }

            else {

                if (val_power.length < 60) {
                    console.log("false")
                    for (let i = 0 ; i < val_power.length  ; i++) {

                        var daya = parseFloat(val_power[val_power.length -1 -i]['value']);
                        if (daya > 1) {
                        var date = new Date(val_power[val_power.length -1 -i]['value_timestamp']);
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
                        var daya = parseFloat(val_power[val_power.length -1 -i]['value']);
                        if (daya > 1) {
                        date_value.push({
                            "label": val_power[59 - i]['value_timestamp'].slice(11,19),
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
