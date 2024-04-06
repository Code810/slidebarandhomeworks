let search=document.querySelector(".searchText");
let list=document.querySelectorAll(".list-group-item");
search.onkeyup=function(){
   list.forEach(element => {
      if (!element.innerText.toLowerCase().indexOf(this.value.toLowerCase())) {
         element.style.display="block";
      }
      else element.style.display = "none";
   });
}
