var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults='+options.max+'&order=relevance&q='+options.query+'&type=video&videoEmbeddable=true&key='+options.key,
      type: 'GET',
      dataType: 'json',
      success: callback,
      error: function(error) {
        console.error('failed to fetch responses', error);
      }
    });
};

export default searchYouTube;
// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=relevance&q=site%3Ayoutube.com&topicId=%2Fm%2F02vx4&key={YOUR_API_KEY}