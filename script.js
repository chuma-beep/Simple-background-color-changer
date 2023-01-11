//image variables 
var i = 0;
var image = []; 
var time = 3000;

//image list 
image[0] = "car1.jpg";
image[1] = "car2.jpg";
image[2] = "car3.jpg";


// fucntion that change the image
function changeImg(){
  document.slide.src  =image[i];
if (i < image.length -1){
  i++;
}else{
  i = 0;
}
  setTimeout("changeImg()", time);
};
window.onload = changeImg;
