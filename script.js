vconst video = document.querySelector('video');
const select = document.querySelector('select');

// Apply selected filter effect
function changeEffect() {
  video.style.filter = select.value;
}
select.addEventListener('change', changeEffect);

// Request camera access
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    video.srcObject = stream;
    video.play(); // ensure autoplay works
  })
  .catch(function(err) {
    // Display error on the page
    const msg = document.createElement('p');
    msg.className = 'error';
    msg.textContent = 'Unable to access camera. Please allow camera access.';
    document.body.appendChild(msg);
  });


/*
<html>
  <body>
    
    <h1>Photo Booth</h1> 
    <p>Choose a special effect.</p> 
    <p> </p> 
    <p>Me: "Mirror, Mirror on the wall, who is the ugliest of them all?"</p> 
    <p>Magic Mirror: "This person ⬇️"</p> 
    <video autoplay></video>
    <select>
      <option value = "" > Choose an effect test</option>
      <option value = "blur(10px)" >Blur x 10</option>
      <option value = "blur(100px)" >Blur x 100</option> 
      <option value = "sepia(100%)">Sepia</option>
      <option value = "hue-rotate(90deg)">Color 1</option>
      <option value = "hue-rotate(180deg)">Color 2</option>
      <option value = "hue-rotate(270deg)">Color 3</option>
      <option value = "invert(100%)">Invert</option>
      <option value = "grayscale(100%)">Black and white</option>
      <option value = "hue-rotate(180deg) invert(100%) grayscale(75%) blur(3px)">Ghost</option>
      <option value = "contrast(500%)">Contrast</option>
      <option value = "blur(2px) brightness(100%) contrast(1000%) saturate(1000%) hue-rotate(200deg)">Pop art?</option>
      <option value = "saturate(1000%)">Saturate</option>
    </select>
    
    <script src = "script.js"></script> 
  </body>
</html> 
*/

/*
  
var video = document.querySelector('video'); 
var select = document.querySelector('select')

function changeEffect() {
  video.style.filter = select.value
}
select.addEventListener('change', changeEffect);

navigator.mediaDevices
  .getUserMedia({
    video: true,
  })
  .then(function (stream) {
    video.srcObject = stream; 
  });  
*/
