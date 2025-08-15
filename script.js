var video = document.querySelector('video');
var select = document.querySelector('select')

function changeEffect() {
  video.style.filter = select.value
}
select.addEveentListerner('change', changeEffect)

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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
