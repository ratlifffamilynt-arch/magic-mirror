
  
  
  
  
  
  
  var video = document.querySelector('video');

navigator.mediaDevices
  .getUserMedia({
    video: true,
  })
  .then(function (stream) {
    video.srcObject = stream;
  });
  
  /*
  
  <h1>Magic Mirror</h1>
    <p>Choose a special effect</p>
    <video autoplay></video>
    <script src = "script.js"></script>
  
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
