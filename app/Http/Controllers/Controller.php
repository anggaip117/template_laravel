<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Models\Value;
use InfluxDB;
use DB;

date_default_timezone_set("Asia/Jakarta");



class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function harian($lokasi=null,$date=null) {
        if($date == null and $lokasi == null){
            $today = date ('Y-m-d');
            $start = $today ." 00:00:00";
            $end = $today ." 23:59:59";

            $result = DB::select("select timestamp, avg(total) as total, avg(pump) as pump, avg(ac) as ac, avg(Voltage) as voltage, avg(Frequency) as frequency, avg(Power_Factor) as pf, avg(Current) as current, avg(Current1) as current1 , avg(Current2) as current2 , avg(Current3) as current3 from sielis where id = 1 and timestamp between '$start' and '$end' GROUP BY HOUR( timestamp ) ");


        }
        else{
            $today = $date;
            $start = $today ." 00:00:00";
            $end = $today ." 23:59:59";
            $id = $lokasi;

            //$result = DB::select('select * from battery where timestamp between "2021-06-24 10:00" and  "2021-06-24 11:00"');
            $result = DB::select("select timestamp, avg(total) as total, avg(pump) as pump, avg(ac) as ac, avg(Voltage) as voltage, avg(Frequency) as frequency, avg(Power_Factor) as pf, avg(Current) as current, avg(Current1) as current1 , avg(Current2) as current2 , avg(Current3) as current3  from sielis where id = $id and timestamp between '$start' and '$end' GROUP BY HOUR( timestamp ) ");
           // $result= DB::selectRaw('avg(total) as total')->whereRaw('timestamp between $start dan $end')
            //return response()->json(['success' => true, 'msg' => "Data displayed", 'detail_data' => $result ]);
        }
        return response()->json(['data' =>$result]);
    }

    public function charger() {

        #$today = date ('Y-m-d');
        #$start = $today ." 00:00:00";
        #$end = $today ." 23:59:59";

        //$result = DB::select('select * from battery where timestamp between "2021-06-24 10:00" and  "2021-06-24 11:00"');
        //$result = DB::select("select * from spkl where connector_pk = 1 order by timestamp desc");
        $id = DB::select("SELECT `transaction_pk` FROM `transaction_start` ORDER BY `transaction_pk` DESC limit 1");
        $status_evo = DB::select("SELECT `status` FROM `connector_status` WHERE `connector_pk` = (SELECT `connector_pk` FROM `connector` WHERE `charge_box_id` = 'Evocharge_iEVSE' ) order by `status_timestamp` desc limit 1");
        $status_bender = DB::select("SELECT `status` FROM `connector_status` WHERE `connector_pk` = (SELECT `connector_pk` FROM `connector` WHERE `charge_box_id` = 'Bender_Charger3' ORDER BY `connector_pk` desc limit 1) or `connector_pk` = (SELECT `connector_pk` FROM `connector` WHERE `charge_box_id` = 'Bender_Charger3' ORDER BY `connector_pk` asc limit 1) order by `status_timestamp` desc limit 1");

        $result_voltage = DB::select("SELECT `value_timestamp`,`value` FROM `connector_meter_value` WHERE `transaction_pk` = (SELECT `transaction_pk` FROM `transaction_start` order by `transaction_pk` desc limit 1) and `measurand` = 'Voltage' order by `value_timestamp` desc limit 20");
        $result_current = DB::select("SELECT `value_timestamp`,`value` FROM `connector_meter_value` WHERE `transaction_pk` = (SELECT `transaction_pk` FROM `transaction_start` order by `transaction_pk` desc limit 1) and `measurand` = 'Current.Import' order by `value_timestamp` desc limit 20");
        $result_energy = DB::select("SELECT `value_timestamp`,`value` FROM `connector_meter_value` WHERE `transaction_pk` = (SELECT `transaction_pk` FROM `transaction_start` order by `transaction_pk` desc limit 1) and `measurand` = 'Energy.Active.Import.Register' order by `value_timestamp` desc limit 1");
        $result_last = DB::select("SELECT `value_timestamp`,`value` FROM `connector_meter_value` WHERE `transaction_pk` = (SELECT `transaction_pk` FROM `transaction_start` order by `transaction_pk` desc limit 1) and `measurand` = 'Energy.Active.Import.Register' order by `value_timestamp` desc limit 1");

        $value_evo1 = DB::select("SELECT o.transaction_pk,o.start_timestamp,i.stop_timestamp,o.start_value,i.stop_value FROM transaction_start o INNER JOIN transaction_stop i ON o.transaction_pk = i.transaction_pk where i.`transaction_pk` = (SELECT `transaction_pk` FROM `transaction_start` WHERE `connector_pk` = (SELECT `connector_pk` FROM `connector` WHERE `charge_box_id` = 'Evocharge_iEVSE' )order by `transaction_pk` desc limit 1) ORDER BY `o`.`transaction_pk` DESC");
        $value_evo2 = DB::select("SELECT `transaction_pk`,`start_timestamp`,`start_value` FROM `transaction_start` WHERE `connector_pk` = (SELECT `connector_pk` FROM `connector` WHERE `charge_box_id` = 'Evocharge_iEVSE' ) order by `transaction_pk` desc limit 1");

        $value_bender1 = DB::select("SELECT o.transaction_pk,o.start_timestamp,i.stop_timestamp,o.start_value,i.stop_value FROM transaction_start o INNER JOIN transaction_stop i ON o.transaction_pk = i.transaction_pk where i.`transaction_pk` = (SELECT `transaction_pk` FROM `transaction_start` WHERE `connector_pk` = (SELECT `connector_pk` FROM `connector` WHERE `charge_box_id` = 'Bender_Charger3' ORDER BY `connector_pk` desc limit 1) or `connector_pk` = (SELECT `connector_pk` FROM `connector` WHERE `charge_box_id` = 'Bender_Charger3' ORDER BY `connector_pk` asc limit 1)  order by `transaction_pk` desc limit 1) ORDER BY `o`.`transaction_pk` DESC");
        $value_bender2 = DB::select("SELECT `transaction_pk`,`start_timestamp`,`start_value` FROM `transaction_start` WHERE `connector_pk` = (SELECT `connector_pk` FROM `connector` WHERE `charge_box_id` = 'Bender_Charger3' order by `connector_pk` desc limit 1 ) or `connector_pk` = (SELECT `connector_pk` FROM `connector` WHERE `charge_box_id` = 'Bender_Charger3' order by `connector_pk` asc limit 1 ) order by `transaction_pk` desc limit 1");


        return response()->json(['id' =>$id ,'status_evo'=>$status_evo, 'status_bender'=>$status_bender ,'data_energy' =>$result_energy,'data_voltage' =>$result_voltage,'data_current' =>$result_current ,'value_evo1' => $value_evo1,'value_evo2' => $value_evo2,'value_bender1' => $value_bender1,'value_bender2' => $value_bender2 , 'last_value' => $result_last]);

    }

    public function bender() {


        $id = DB::select("SELECT `transaction_pk` FROM `transaction_start` ORDER BY `transaction_pk` DESC limit 1");
        //$status_bender = DB::select("SELECT `status` FROM `connector_status` WHERE `connector_pk` = (SELECT `connector_pk` FROM `connector` WHERE `charge_box_id` = 'Bender_Charger3' ORDER BY `connector_pk` desc limit 1) or `connector_pk` = (SELECT `connector_pk` FROM `connector` WHERE `charge_box_id` = 'Bender_Charger3' ORDER BY `connector_pk` asc limit 1) order by `status_timestamp` desc limit 1");
        $charger_type = DB::select("SELECT `charge_box_id` FROM `connector` WHERE `connector_pk` = (SELECT `connector_pk` FROM `transaction_start` ORDER BY `event_timestamp` desc limit 1)");
        $status_bender = DB::select("SELECT `connector_pk`,`status_timestamp`,`status` FROM `connector_status` WHERE `connector_pk` = (SELECT `connector_pk` FROM `transaction_start` ORDER BY `event_timestamp` desc limit 1) order by `status_timestamp` desc limit 1");

        $result_voltage = DB::select("SELECT `value_timestamp`,`value` FROM `connector_meter_value` WHERE `transaction_pk` = (SELECT `transaction_pk` FROM `transaction_start` order by `transaction_pk` desc limit 1) and `measurand` = 'Voltage' order by `value_timestamp` desc limit 20");
        $result_power = DB::select("SELECT `value_timestamp`,`value` FROM `connector_meter_value` WHERE `transaction_pk` = (SELECT `transaction_pk` FROM `transaction_start` order by `transaction_pk` desc limit 1) and `measurand` = 'Power.Import' order by `value_timestamp` desc limit 20");
        $result_current = DB::select("SELECT `value_timestamp`,`value` FROM `connector_meter_value` WHERE `transaction_pk` = (SELECT `transaction_pk` FROM `transaction_start` order by `transaction_pk` desc limit 1) and `measurand` = 'Current.Import' order by `value_timestamp` desc limit 20");
        $result_energy = DB::select("SELECT `value_timestamp`,`value` FROM `connector_meter_value` WHERE `transaction_pk` = (SELECT `transaction_pk` FROM `transaction_start` order by `transaction_pk` desc limit 1) and `measurand` = 'Energy.Active.Import.Register' order by `value_timestamp` desc limit 1");
        $result_last = DB::select("SELECT `value_timestamp`,`value` FROM `connector_meter_value` WHERE `transaction_pk` = (SELECT `transaction_pk` FROM `transaction_start` order by `transaction_pk` desc limit 1) and `measurand` = 'Energy.Active.Import.Register' order by `value_timestamp` desc limit 1");

        $value1 = DB::select("SELECT o.transaction_pk,o.start_timestamp,i.stop_timestamp,o.start_value,i.stop_value FROM transaction_start o INNER JOIN transaction_stop i ON o.transaction_pk = i.transaction_pk  where i.stop_value > 0  ORDER BY `o`.`transaction_pk` DESC limit 5");
        $value2 = DB::select("SELECT `transaction_pk`,`start_timestamp`,`start_value` FROM `transaction_start` order by `transaction_pk` desc limit 1");


        return response()->json(['id' =>$id ,'charger_type'=>$charger_type,'status_bender'=>$status_bender ,'data_energy' =>$result_energy,'data_power' =>$result_power,'data_voltage' =>$result_voltage,'data_current' =>$result_current ,'value_1' => $value1,'value_2' => $value2 , 'last_value' => $result_last]);

    }

    public function history($date=null) {

        if($date == null){
        $today = date ('Y-m-d');
        $start = $today ." 00:00:00";
        $end = $today ." 23:59:59";

        $value = DB::select("SELECT o.transaction_pk,o.start_timestamp,i.stop_timestamp,o.start_value,i.stop_value FROM transaction_start o INNER JOIN transaction_stop i ON o.transaction_pk = i.transaction_pk  where i.stop_value > 0 and o.start_timestamp BETWEEN '$start' and '$end'  ORDER BY `o`.`transaction_pk` ");

        return response()->json(['value' =>$value]);
        }

        else{

        $today = $date;
        $start = $today ." 00:00:00";
        $end = $today ." 23:59:59";

        $value = DB::select("SELECT o.transaction_pk,o.start_timestamp,i.stop_timestamp,o.start_value,i.stop_value FROM transaction_start o INNER JOIN transaction_stop i ON o.transaction_pk = i.transaction_pk  where i.stop_value > 0 and o.start_timestamp BETWEEN '$start' and '$end'  ORDER BY `o`.`transaction_pk` ");
        return response()->json(['value' =>$value]);
    }
    }

    public function monthly($date=null) {

        if($date == null){
        $today = date ('Y-m');
        $start = $today ."-01";
        $end = $today ."-31";

        $total = DB::select("SELECT day(i.stop_timestamp) as date,sum(i.stop_value - o.start_value) as total FROM transaction_start o INNER JOIN transaction_stop i ON o.transaction_pk = i.transaction_pk where i.stop_value > 0 and o.start_timestamp BETWEEN '$start' and '$end' GROUP BY year(i.stop_timestamp), month(i.stop_timestamp), day(i.stop_timestamp) ORDER BY `o`.`transaction_pk`");
        $id = DB::select("SELECT count(`transaction_pk`) as transaction FROM `transaction_stop` WHERE `stop_timestamp` between '$start' and '$end' and`stop_value` > 0");
        return response()->json(['id' =>$id,'total' =>$total]);
        }

        else{

        $today = $date;
        $start = $today ."-01";
        $end = $today ."-31";

        $total = DB::select("SELECT day(i.stop_timestamp) as date,sum(i.stop_value - o.start_value) as total FROM transaction_start o INNER JOIN transaction_stop i ON o.transaction_pk = i.transaction_pk where i.stop_value > 0 and o.start_timestamp BETWEEN '$start' and '$end' GROUP BY year(i.stop_timestamp), month(i.stop_timestamp), day(i.stop_timestamp) ORDER BY `o`.`transaction_pk`");
        $id = DB::select("SELECT count(`transaction_pk`) as transaction FROM `transaction_stop` WHERE `stop_timestamp` between '$start' and '$end' and`stop_value` > 0");
        return response()->json(['id' =>$id,'total' =>$total]);
    }
    }


    public function historymonth($date=null) {

        if($date == null){
        $today = date ('Y-m');
        $start = $today ."-01";
        $end = $today ."-31";

        $value = DB::select("SELECT o.transaction_pk,o.start_timestamp,i.stop_timestamp,o.start_value,i.stop_value FROM transaction_start o INNER JOIN transaction_stop i ON o.transaction_pk = i.transaction_pk  where i.stop_value > 0 and o.start_timestamp BETWEEN '$start' and '$end'  ORDER BY `o`.`transaction_pk` ");

        return response()->json(['value' =>$value]);
        }

        else{

        $today = $date;
        $start = $today ."-01";
        $end = $today ."-31";

        $value = DB::select("SELECT o.transaction_pk,o.start_timestamp,i.stop_timestamp,o.start_value,i.stop_value FROM transaction_start o INNER JOIN transaction_stop i ON o.transaction_pk = i.transaction_pk  where i.stop_value > 0 and o.start_timestamp BETWEEN '$start' and '$end'  ORDER BY `o`.`transaction_pk` ");
        return response()->json(['value' =>$value]);
    }
    }

    public function history2($date=null) {

        if($date == null){
        $today = date ('Y-m-d');
        //$today = $date;
        $start = $today ." 00:00:00";
        $end = $today ." 23:59:59";
        $rp = 2.466;
        $location = 'FTI';
        $value = DB::select("SELECT o.transaction_pk as transaction_id ,o.start_timestamp,i.stop_timestamp,(i.stop_value - o.start_value) as value_data , ceiling((i.stop_value - o.start_value)*$rp) as cost  FROM transaction_start o INNER JOIN transaction_stop i ON o.transaction_pk = i.transaction_pk  where i.stop_value > 0   ORDER BY `o`.`transaction_pk` ");
        return response()->json(['location' => $location, 'value' =>$value]);
        }

        else{

        $today = $date;
        $start = $today ." 00:00:00";
        $end = $today ." 23:59:59";
        $rp = 2.466;
        $location = 'FTI';
        $value = DB::select("SELECT o.transaction_pk as transaction_id ,o.start_timestamp,i.stop_timestamp,(i.stop_value - o.start_value) as value_data , ceiling((i.stop_value - o.start_value)*$rp) as cost  FROM transaction_start o INNER JOIN transaction_stop i ON o.transaction_pk = i.transaction_pk  where i.stop_value > 0   ORDER BY `o`.`transaction_pk` ");
        return response()->json(['location' => $location, 'value' =>$value]);
    }
    }


}
