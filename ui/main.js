var button = document.getElementById("counter");

button.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
      
      if (reques.readyState === XMLHttpRequest.DONE) {
          
          if (request.status === 200) {
              var counter = request.responseText
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
      }
        
    };
    
    request.open('GET', 'http://raghavgupta0399.imad.hasura-app.io/counter', true);
    request.send(null);
}