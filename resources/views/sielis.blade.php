<!doctype html>
<html lang="en">
  <head>
  	<title>Stasiun Pengisian Kendaraan Listrik ITB</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">
    <style>

    </style>
<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900,1200,1400,1600,1800,1900,2000" rel="stylesheet">


		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="{{ asset('/sielis_folder/css/style.css') }}">
    <script type="text/javascript" src="{{ asset('/fusion/js/jquery-3.6.0.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/fusion/js/fusioncharts.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/fusion/js/themes/fusioncharts.theme.fusion.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/fusion/integrations/jquery/js/jquery-fusioncharts.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

  </head>
  <body style="background-color:white;">
    <h2 class="text1">Stasiun Pengisian Kendaraan Listrik</h2>
    <h2 id="lokasi" class="text2">ITB</h2>
		<div class="wrapper d-flex align-items-stretch">





      <div id="content" class="pl-1">
        <div class="pos-f-t">
            <nav id="mainbar">
                <div class="custom-menu">

                </div>

            </nav>
          </div>
          <br>

        @include('beranda_chart.index')

      </div>

		</div>


    <script type="text/javascript" src="{{ asset('/fusion/function/beranda.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/fusion/function/changemenu.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/currency.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/popper.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/main.js') }}"></script>


  </body>
</html>
