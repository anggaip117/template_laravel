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

var $btnDLtoExcel = $('#DLtoExcel');



$btnDLtoExcel.on('click', function () {


    jQuery(document).ready(function ($) {

        var get = 'transaction/2021-12-21';
        $.getJSON(get, function(data) {
            let value = data.value;
            var energy_total = 0;
            let valval = [];
            for (x in value) {
                var int_date = parseInt((new Date(value[x]['start_timestamp']).getTime() / 1000).toFixed(0))
                var int_date2 = parseInt((new Date(value[x]['stop_timestamp']).getTime() / 1000).toFixed(0))
                var charging = secondsToHms(int_date2-int_date);
                var energy = value[x]['stop_value'] - value[x]['start_value']
                var cost = "Rp."+Math.ceil(energy*2.466)
                energy_total = energy_total+energy
                valval.push({'No':x+1
                ,'Transaction ID':value[x]['transaction_pk'],
                'Start Time':value[x]['start_timestamp'].slice(0,19),
                'Stop Time':value[x]['stop_timestamp'].slice(0,19),
                'Charging Time':charging,
                'Total Energy': energy,
                'Total Cost': cost

            })
            }

            $("#dvjson").excelexportjs({
                containerid: "dvjson"
                   , datatype: 'json'
                   , dataset: valval
                   , columns: getColumns(valval)

            });

        });
        });





});

