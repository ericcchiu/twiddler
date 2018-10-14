$(document).ready(function(){
  const momentTime = function() {
    return moment().fromNow()
  }

  // Append contents to page 
  const $list = $('ul');

  let index = 0;
  
  // Append Tweets 
  const appendTweets = function() {
    while (index < streams.home.length) {
    
    let tweet = streams.home[index];  

    const $tweet = $(
      `<li class = "tweetHolder">
        <div class = "usernamedate">
          <span class= 'user'><strong>@${tweet.user}</strong></span>
          <span class= 'date' data-dates= "${tweet.created_at}">${moment(tweet.created_at).fromNow()}</span>
          </div>
              <div class ='tweetText'>${tweet.message}</div>
      </li>`);
    
    // Prepend random tweets to tweetsContainer
    $tweet.prependTo($list); 
    index ++;             
    }
  };
  appendTweets();



/***EVENT HANDLERS ***/

  // On hover over add more tweets button the colour changes to blue 
  $('#addTweet').hover(function() {
    $(this).css("background-color", blue);
  }, function() {
    $(this).css("background-color", 'rgb(143,198,134)');
  });

// Button that adds 5 tweets when clicked
  $('#addTweet').click(function() {
    //Add 5 new tweets
    for (let j = 0; j < 5; j++) {
      generateRandomTweet();
    }
    // Add new tweets when button clicked
    appendTweets();

    const date = $('span.date')
      for (let i = date.length - 1; i >= 0; i--) {
        let inverse = date.length;
        $(date[i]).text(moment(streams.home[(inverse-1-i)].created_at).fromNow())
      }
  });

  // Filter by username and see their timelines
  $(document).on("click","div.usernamedate span", function() {
    //build a function that alerts the username
      let iD= ($(this).text())
      $(`li:not(:contains(${iD}))`).hide()
  });

  
});


