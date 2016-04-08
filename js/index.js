function getQuote(){
  $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
      beforeSend: function(xhr) { 
        xhr.setRequestHeader("X-Mashape-Key", "JstKGLb9n2msha4K5Kc3rgOtmrXzp1TPLnhjsnhFQpUTf4U369"); 
      },
      type: 'POST',
      dataType: 'json',
      success: function (data) {
        //set current quote and author
        var currentQuote = data.quote;
        var currentAuthor = data.author;
        
        $("#quoteText").html('"' + currentQuote + '"');
        $("#quoteAuthor").html("<cite>" + currentAuthor + "</cite>");
        
        //set the twitter button to link to the tweet widget with the quote
        $("#tweetQuote").attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" - ' + currentAuthor));
        
      },
      error: function(){
        console.log("Cannot get data");
      }
  });
}

$(document).ready(function() {
  getQuote();
  $("#getQuote").click(getQuote);
});