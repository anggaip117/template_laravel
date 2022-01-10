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
    <script type="text/javascript" src="{{ asset('/fusion/function/json2html.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/fusion/js/fusioncharts.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/fusion/js/themes/fusioncharts.theme.fusion.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/fusion/integrations/jquery/js/jquery-fusioncharts.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/bootstrap/js/bootstrap.bundle.min.js') }}"></script>



  </head>


  <body style="background-color:white;">
    <h2 class="text1">Stasiun Pengisian Kendaraan Listrik ITB</h2>
    <h2 id="lokasi" class="text2">Monthly Transaction History</h2>

		<div class="wrapper d-flex align-items-stretch">
            <nav id="sidebar" class="active">
				<div class="p-4">
		  		<h1><a href="index.html" class="logo">SPKL ITB</a></h1>
	        <ul class="list-unstyled components mb-5">
	          <li>
	            <a href="/spkl"><span class="fa fa-home mr-3"></span> Charging Station</a>
	          </li>
	          <li>
	              <a href="/transaction_daily"><span class="fa fa-user mr-3"></span> Daily Transaction</a>
	          </li>
	          <li>
              <a href="/transaction_monthly"><span class="fa fa-briefcase mr-3"></span> Monthly Transaction</a>
	          </li>

	        </ul>



            </div>
            </nav>

      <div id="content" class="pl-1">
        <div class="pos-f-t">
            <nav id="mainbar">
                <div class="custom-menu">
                    <button type="button" id="sidebarCollapse" class="btn btn-primary">

                        <i class="fa fa-bars"></i>
                        <span class="sr-only">Toggle Menu</span>
                        </button>
                </div>

            </nav>
          </div>
          <br>

        @include('monthly.index')

      </div>

		</div>


    <script type="text/javascript" src="{{ asset('/fusion/function/monthly.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/fusion/function/changemenu.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/currency.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/popper.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/main.js') }}"></script>


  </body>
</html>
