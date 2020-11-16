$( document ).ready(function() {
    console.log( "ready!" );

    $('#fetch-from-api').on('click', async () => {
      console.log('I was clicked!');
      $.get('https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=smores&limit=10', function(giphyResponse) {
        console.log(giphyResponse);
        console.log('giphyData', giphyResponse.data)
        console.log('giphyData result 0 (1st result)', giphyResponse.data[0]);
        console.log('giphyData result 0 (1st result) - all images list', giphyResponse.data[0].images);
        console.log('giphyData result 0 (1st result) - all images list - original image', giphyResponse.data[0].images.original);

        console.log('giphyData result 0 (1st result) - all images list - original image - url', giphyResponse.data[0].images.original.url);


        for (let image of giphyResponse.data) {        
        let imgHtml = `<img src=${image.images.original.url} />`
        $('#first-result-image').append(imgHtml);
        }
      });

    })



});
