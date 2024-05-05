

if(photocor[3]==1){
let imag=document.createElement("img");imag.setAttribute("id","photocorr3");
imag.setAttribute("src","photocorr3.jpg");
imag.addEventListener("click",()=>{playings();
document.querySelector("#exer").removeChild(event.currentTarget);tbcorr[3]=0;});
document.querySelector("#exer").append(imag);tbcorr[3]=1;
}
