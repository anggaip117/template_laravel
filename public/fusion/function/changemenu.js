$('#harian-container').hide();
$('#beranda-container').show();

jQuery(document).ready(function($){

    $( "a" ).click(function( event ) {

        show_content();

        function show_content() {

            setTimeout(function() {

                var url  = window.location.href;
                var hash = url.substring(url.indexOf('#'));

                switch (hash) {

                case "#beranda":
                    $('#harian-container').hide();
                    $('#beranda-container').show();
                    break;

                case "#harian":
                    $('#harian-container').show();
                    $('#beranda-container').hide();
                    break;

                default:
                    $('#harian-container').hide();
                    $('#beranda-container').show();
                    break;
                }


            },100);

        }});

});
