<div id="monthly-container">


    <br style="line-height: 10px" />
    <input type="month" input type="date" id="selectDate" style="width:13%; font-family:Arial, Helvetica, sans-serif;
    font-size:20px;" class="float-left" value="<?php echo date('Y-m'); ?>">
    <input type="text" id="total_transaction" name="total_transaction" style="width:29%; font-family:Arial, Helvetica, sans-serif;
    font-size:26px; border: none; background: transparent; text-align: center;" class="float-left" value="" readonly>
    <input type="text" id="total_energy" name="total_energy" style="width:29%; font-family:Arial, Helvetica, sans-serif;
    font-size:26px; border: none; background: transparent; text-align: center;" class="float-left" value="" readonly>
    <input type="text" id="total_cost" name="total_cost" style="width:29%; font-family:Arial, Helvetica, sans-serif;
    font-size:26px; border: none; background: transparent; text-align: center;" class="float-left" value="" readonly>
      <br>
      <div id="dvjson"></div>
<button id='DLtoExcel' class="btn btn-success" >Export Data to CSV</button>
</div>
      <br><br><br>

      <div id="monthly-chart" div style="float: center;padding: 5px"></div>

  </div>


