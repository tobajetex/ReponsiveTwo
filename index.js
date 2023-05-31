// javascript
//document.getElementById("icon").addEventListener("click",handleClick);

//function handleClick(){
    
   // console.log(document.getElementsByClassName("nav-container").style.left)
//}
document.querySelector('#icon').addEventListener('click', () => {
  document.querySelector(' .nav-container').style.transform="translateX(0%)";
  document.querySelector(' .nav-container').style.transitionTimingFunction= "ease-out";
  document.querySelector(' .nav-container').style.transition="0.25s";
}); 

document.querySelector('#arrow-icon-1').addEventListener('click', () => {
  document.querySelector(' .nav-container').style.transform="translateX(-130%)";
}); 
function remover(){
    if(window.innerWidth >"500"){
       
  document.querySelector(' .nav-container').style.transform="translateX(0%)";

    }
    else{
        document.querySelector(' .nav-container').style.transform="translateX(-130%)";
    }
}
window.onresize =remover;