{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Pace App</title>
  <link rel="stylesheet" href="pace-theme-center-simple.css" />
  <script>
    paceOptions = {
      //elements: true
    };
  </script>
  <script src="pace.js"></script>
  <script>
    function load(time){
      var x = new XMLHttpRequest()
      x.open('GET', "http://localhost:3000/delay/" + time, true);
      console.log(time);
      x.send();
    };
    load(20);
    load(100);
    load(500);
    load(1000);
    load(2000);  
    load(3000);    
    setTimeout(function(){
      Pace.ignore(function(){
        load(3100);
      });
    }, 3000);
    Pace.on('hide', function(){
      console.log('done');
    });
  </script>
</head>
<body>
    <h1>Pace Test</h1>
    <p>Pace should inject a div that displays a progress bar for 3 seconds then become invisible.  This page is requesting delay responce pages from /delay/number where number is the delay and milliseconds and the number of post in the response text.</p>
</body>
</html>
{% endraw %}
