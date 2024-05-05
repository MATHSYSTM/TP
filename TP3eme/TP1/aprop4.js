
if(photocor[4]==1){
let imag=document.createElement("img");imag.setAttribute("id","photocorr4");
imag.setAttribute("src","photocorr4.jpg");
imag.addEventListener("click",()=>{playings();
document.querySelector("#exer").removeChild(event.currentTarget);tbcorr[4]=0;});
document.querySelector("#exer").append(imag);tbcorr[4]=1;
}