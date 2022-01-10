<div id="history-container">
    <div id="beranda-chart" div style="float: right;padding: 5px"></div>

    <br style="line-height: 10px" />
    <input type="date" input type="date" id="selectDate" style="width:10%; font-family:Arial, Helvetica, sans-serif;
    font-size:20px;" class="float-left" value="<?php echo date('Y-m-d'); ?>">
    <input type="text" id="total_transaction" name="total_transaction" style="width:30%; font-family:Arial, Helvetica, sans-serif;
    font-size:26px; border: none; background: transparent; text-align: center;" class="float-left" value=" " readonly>
    <input type="text" id="total_energy" name="total_energy" style="width:30%; font-family:Arial, Helvetica, sans-serif;
    font-size:26px; border: none; background: transparent; text-align: center;" class="float-left" value=" " readonly>
    <input type="text" id="total_cost" name="total_cost" style="width:30%; font-family:Arial, Helvetica, sans-serif;
    font-size:26px; border: none; background: transparent; text-align: center;" class="float-left" value="Total Cost : Rp.2000 " readonly>
      <br>
      <div id="dvjson"></div>
<button id='DLtoExcel' class="btn btn-success" >Export Data to CSV</button>
</div>
      <br><br><br>
      <table class="table" id="tablebody">
        <thead>
          <tr>
            <th style="text-align:center; font-family:Arial, Helvetica, sans-serif;
            font-size:24px;" scope="col">Transaction ID</th>


            <th style="text-align:center; font-family:Arial, Helvetica, sans-serif;
            font-size:22px;" scope="col">Start Time</th>
            <th style="text-align:center;font-family:Arial, Helvetica, sans-serif;
            font-size:22px;" scope="col">Stop Time</th>
            <th style="text-align:center;font-family:Arial, Helvetica, sans-serif;
            font-size:22px;" scope="col">Charging Time</th>
            <th style="text-align:center;font-family:Arial, Helvetica, sans-serif;
            font-size:22px;" scope="col">Energy(Wh)</th>
            <th style="text-align:center;font-family:Arial, Helvetica, sans-serif;
            font-size:22px;" scope="col">Cost</th>
            <script type="text/javascript" src="{{ asset('/fusion/function/daily.js') }}"></script>
          </tr>
        </thead>

      </table>


        <table>
         <tbody id="tbody">
         </tbody>
        </table>
  </div>


