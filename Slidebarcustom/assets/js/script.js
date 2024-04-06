

let btnleft=document.querySelector(".left");
let btnright=document.querySelector(".right");
let count=0;

function slideBox(n){
    let images=document.querySelectorAll(".slideimg");
    images.forEach(element => {
    element.style.display="none";
   });
   if (count<0) {
    count=images.length-1;
    n=count;
}
if (count>=images.length) {
    count=0;
    n=count;
}
   images[n].style.display="block";
}
slideBox(count);



btnleft.onclick = function(){
    count--;
 slideBox(count);
};
btnright.onclick = function(){
count++;
slideBox(count);
};