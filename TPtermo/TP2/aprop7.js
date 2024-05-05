
if(photocor[7]==1){
let imag=document.createElement("img");imag.setAttribute("id","photocorr7");
imag.setAttribute("src","photocorr7.jpg");
imag.addEventListener("click",()=>{playings();
document.querySelector("#exer").removeChild(event.currentTarget);tbcorr[7]=0;});
document.querySelector("#exer").append(imag);tbcorr[7]=1;
}