
if(photocor[5]==1){
let imag=document.createElement("img");imag.setAttribute("id","photocorr5");
imag.setAttribute("src","photocorr5.jpg");
imag.addEventListener("click",()=>{playings();
document.querySelector("#exer").removeChild(event.currentTarget);tbcorr[5]=0;});
document.querySelector("#exer").append(imag);tbcorr[5]=1;
}