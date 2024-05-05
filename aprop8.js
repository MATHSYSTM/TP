
if(photocor[8]==1){
let imag=document.createElement("img");imag.setAttribute("id","photocorr8");
imag.setAttribute("src","photocorr8.jpg");
imag.addEventListener("click",()=>{playings();
document.querySelector("#exer").removeChild(event.currentTarget);tbcorr[8]=0;});
document.querySelector("#exer").append(imag);tbcorr[8]=1;
}
