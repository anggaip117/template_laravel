function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
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

function monthlyValue(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    var date = $('#selectDate').val()
    var year = date.substring(0, 4);
    var month = date.substring(5, 7);
    var d = new Date(year, month, 0);
    var day = d.getDate();
    var get ='monthly'
    //console.log((d.toString()).substring(4,7));
    jQuery(document).ready(function ($) {
        $.getJSON(get, function(data) {
            var id = data.id;
            var total = data.total;
            var value = [];
            var date_value = [];
            var energy = 0;

            $('#total_transaction').val('');
            $('#total_energy').val('');
            $('#total_cost').val(' ' );

            if (total.length > 0){

                for (let x = 0; x < day; x++) {

                    value.push({'label': (x+1).toString() , 'value':0})

                }
                for (x in total) {
                    date = total[x]['date']
                    val = total[x]['total']
                    value[date] = {'label': (date).toString() , 'value':val}
                    energy = energy + val
                }


            $('#total_transaction').val('Total Transaction : ' + id[0]['transaction']);
            $('#total_energy').val('Total Energy : ' + energy+' Wh');
            $('#total_cost').val('Total Cost : Rp.' + Math.ceil(energy*2.466));
            }

            else{
                for (let x = 0; x < day; x++) {
                    value.push({'label': (x+1).toString() , 'value':0})
                    //date_value.push({'label': x+1},)
                }
            }

            //console.log(value)
            //console.log(date_value)
            $("#monthly-chart").insertFusionCharts({
                id: "monthly1",
                type: "column2d",
                //creditLabel: false,
                width: '100%',
                height: "700",
                dataFormat: "json",
                dataSource:  {
                        chart: {
                            "caption": monthNames[d.getMonth()]+"  "+ d.getFullYear(),
                            //"subCaption": "Last month",
                            "yAxisName": "Energy (Wh)",
                            "xAxisName": "Date",
                            "theme": "fusion",
                            //"lineColor": '344feb',
                            //"lineThickness" : 5,
                            "plottooltext" : "Energy : $Value Wh",
                            "xAxisNameFontSize": 20,
                            "xAxisNameFontBold": 1,
                            "yAxisNameFontSize": 20,
                            "yAxisNameFontBold": 1,
                            "captionFontSize":30,
                            //"yAxisValueFontSize": 18,
                            //"labelFontSize": 18,
                            //"exportEnabled": 1,
                            //"showBorder": 1,
                            //"drawAnchors": 0
                        },
                        data: value



                }
            });


        });
    });
}

monthlyValue();

$(function() {
    $('#selectDate').change(function() {

        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];

        var chart = FusionCharts("monthly1")
        var date = $('#selectDate').val()
        var year = date.substring(0, 4);
        var month = date.substring(5, 7);
        var d = new Date(year, month, 0);
        var day = d.getDate();
        var get ='monthly/'+date;

    jQuery(document).ready(function ($) {
        $.getJSON(get, function(data) {
            var id = data.id;
            var total = data.total;
            var value = []
            var energy = 0;

            $('#total_transaction').val('');
            $('#total_energy').val('');
            $('#total_cost').val(' ' );

            if (total.length > 0){

                for (let x = 0; x < day; x++) {

                    value.push({'label': (x+1).toString() , 'value':0})

                }
                for (x in total) {
                    date = total[x]['date']
                    val = total[x]['total']
                    value[date] = {'label': (date).toString() , 'value':val}
                    energy = energy + val
                }


            $('#total_transaction').val('Total Transaction : ' + id[0]['transaction']);
            $('#total_energy').val('Total Energy : ' + energy+' Wh');
            $('#total_cost').val('Total Cost : ' + formatRupiah((Math.ceil(energy*2.466)), 'Rp. '));

            }

            else{
                for (let x = 0; x < day; x++) {
                    value.push({'label': (x+1).toString() , 'value':0})
                    //date_value.push({'label': x+1},)
                }

            }

            var year_2014 = {
                chart: {
                    "caption": monthNames[d.getMonth()]+"  "+ d.getFullYear(),
                    //"subCaption": "Last month",
                    "yAxisName": "Energy (Wh)",
                    "xAxisName": "Date",
                    "theme": "fusion",
                    //"lineColor": '344feb',
                    //"lineThickness" : 5,
                    "plottooltext" : "Energy : $Value Wh",
                    "xAxisNameFontSize": 20,
                    "xAxisNameFontBold": 1,
                    "yAxisNameFontSize": 20,
                    "yAxisNameFontBold": 1,
                    "captionFontSize":30,
                    //"yAxisValueFontSize": 18,
                    //"labelFontSize": 18,
                    //"exportEnabled": 1,
                    //"showBorder": 1,
                    //"drawAnchors": 0
                },
                data: value
            };

            chart.setChartData(year_2014, "json");
        });
    });


    });
});


var $btnDLtoExcel = $('#DLtoExcel');



$btnDLtoExcel.on('click', function () {


    jQuery(document).ready(function ($) {

        var date = $('#selectDate').val()
        var year = date.substring(0, 4);
        var month = date.substring(5, 7);
        var d = new Date(year, month, 0);
        var day = d.getDate();

        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];

        var get ='transaction_month/'+date;

        $.getJSON(get, function(data) {
            let value = data.value;
            var energy_total = 0;
            let valval = [];
            //console.log(value.length);
            for (x in value) {
                var int_date = parseInt((new Date(value[x]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value[x]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging = secondsToHms(int_date2-int_date);
                var energy = value[x]['stop_value'] - value[x]['start_value']
                var cost = Math.ceil(energy*2.466)
                energy_total = energy_total+energy
                valval.push({'No':parseInt(x)+1
                ,'Transaction_ID':value[x]['transaction_pk'],
                'Start_Time':value[x]['start_timestamp'].slice(0,19),
                'Stop_Time':value[x]['stop_timestamp'].slice(0,19),
                'Charging_Time':charging,
                'Total_Energy': energy,
                'Total_Cost': cost

            })
            }

            var headers = {
                No: 'No'.replace(/,/g, ''), // remove commas to avoid errors
                Transaction_ID: "Transaction ID",
                Start_Time: "Start Time",
                Stop_Time: "Stop Time",
                Charging_Time: "Charging Time",
                Total_Energy: "Energy(Wh)",
                Total_Cost: "Cost(Rp)"
            };


            var itemsFormatted = [];

            // format the data
            valval.forEach((item) => {
                itemsFormatted.push({
                    No: item.No, // remove commas to avoid errors,
                    Transaction_ID: item.Transaction_ID,
                    Start_Time: item.Start_Time,
                    Stop_Time: item.Stop_Time,
                    Charging_Time: item.Charging_Time,
                    Total_Energy: item.Total_Energy,
                    Total_Cost: item.Total_Cost
                });
            });
            var title = "Transaction History "
            title = title + monthNames[d.getMonth()]+"  "+ d.getFullYear()
            var fileTitle = title; // or 'my-unique-title'

            exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download

        });
        });





});



function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}



