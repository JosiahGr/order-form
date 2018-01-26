function showImage(){
  var selector = document.getElementById('main-products');
  var selected = selector.selectedIndex;
  document.getElementById('target-image').innerHTML = selector.options[selected].text;

}
showImage();