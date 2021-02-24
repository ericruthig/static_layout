var modal = document.getElementById("imgModal");

var img = document.getElementById("img1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}; 

btn.onclick = function() {
    modal.style.display = "block";
};
 
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};
