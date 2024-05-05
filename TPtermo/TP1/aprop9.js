
if(photocor[9]==1){
let imag=document.createElement("img");imag.setAttribute("id","photocorr9");
imag.setAttribute("src","photocorr9.jpg");
imag.addEventListener("click",()=>{playings();
document.querySelector("#exer").removeChild(event.currentTarget);tbcorr[9]=0;});
document.querySelector("#exer").append(imag);tbcorr[9]=1;
}