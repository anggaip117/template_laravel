
  <div id="harian-container">

    <div id="harian-chart" div style="float: right;padding: 5px"></div>

    <br style="line-height: 10px" />
    <div class="card border-success mb-3" style="max-width: 35rem; div float: right;padding: 5px">
        <div class="card-header bg-transparent border-success">
            <h5 class="card-title" style="    font-weight:    bold;">Konsumsi Energi Listrik Harian</h5>
        </div>
        <div class="card-body text-success">

          <div class="my_text" id="areaId" >Area:
            <select id="idGedung" style="width:50%;" class="float-right">
                <option value="1">Gedung 1 </option>
                <option value="2">Gedung 2</option>
            </select>
          </div>
          <div>
          <div class="my_text float-left"  style="color: black; text-align: start; display: inline-block;" >Pilih Tanggal:</div>
          <input type="date" input type="date" id="selectDate" style="width:50%; font-family:Arial, Helvetica, sans-serif;
          font-size:18px;" class="float-right" value="<?php echo date('Y-m-d'); ?>">
          <br><br>
          <div class="my_text float-left"  style="color: black; text-align: start; display: inline-block;" >Harian:</div>
          <div class="my_text float-right" id="nowHarian" style="color: black; text-align: end;">Rp. - ( kWh)</div>
          <br><br>
          <div class="my_text float-left"  style="color: black; text-align: start; display: inline-block;" >Rata-rata harian:</div>
          <div class="my_text float-right" id="averageHarian" style="color: black; text-align: end;">Rp. - / hour ( kWh)</div>
          <br><br>
          <div class="my_text float-left"  style="color: black; text-align: start; display: inline-block;" >Bulan lalu:</div>
          <div class="my_text float-right" id="monthHarian" style="color: black; text-align: end;">Rp.  ( kWh)</div>
          <br><br>
          <div class="my_text float-left"  style="color: black; text-align: start; display: inline-block;" >Rata-rata Bulan lalu:</div>
          <div class="my_text float-right" id="avgmonthHarian" style="color: black; text-align: end;">Rp.  /day ( kWh/day)</div>
          <br><br>
          <div class="my_text float-left"  style="color: black; text-align: start; display: inline-block;" >Keterangan:</div>
          <div class="my_text float-right" id="keteranganHarian1" style="color: black; text-align: center;"> </div>
          <div class="my_text float-right" id="keteranganHarian2" style="color: black; text-align: start;"> dibandingkan rata-rata perjam bulan lalu</div>
          <br><br>
          </div>
        </div>

      </div>

      <br>
      {{-- <table class="table">
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Voltage (VLN)</th>
            <th scope="col">Frequency(Hz)</th>
            <th scope="col">Power Factor</th>
            <th scope="col">Current (A)</th>
            <th scope="col">Current (A1)</th>
            <th scope="col">Current (A2)</th>
            <th scope="col">Current (A3)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row"  id="detailTime" ></td>
            <td id="detailVoltage"></td>
            <td id="detailFreq"></td>
            <td id="detailPF"></td>
            <td id="detailC"></td>
            <td id="detailC1"></td>
            <td id="detailC2"></td>
            <td id="detailC3"></td>
          </tr>
        </tbody>
      </table> --}}
  </div>

