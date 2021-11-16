
const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function (e) {

  //document.body.addEventListener('mousemove', function (event) {
  // console.log(e.clientX, e.clientY);
  // h1.textContent = `${e.screenX}, ${e.screenY}`;
  // h1.textContent = `${e.pageX}, ${e.pageY}`;
  h1.textContent = e.clientX + ", " + e.clientY;
  h1.style.border = 30 + "px";
  h1.style.background = 'blue';




})