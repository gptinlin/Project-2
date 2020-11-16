
$( document ).ready(function() {
    console.log( "ready!" );
    $('#fetch-from-api').on('click', () => {
        console.log('I was clicked');
    $.get('api.giphy.com/v1/gifs/search?api-key=bu2jBN3FbA4qjHRnUR5hglMKejHnNNCR',
        function(data) {
            console.log(date);
        //$( ".result" ).html( data );
        //alert( "Load was performed." );
      });
    })
});