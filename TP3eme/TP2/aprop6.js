

if(photocor[6]==1){
let imag=document.createElement("img");imag.setAttribute("id","photocorr6");
imag.setAttribute("src","photocorr6.jpg");
imag.addEventListener("click",()=>{playings();
document.querySelector("#exer").removeChild(event.currentTarget);tbcorr[6]=0;});
document.querySelector("#exer").append(imag);tbcorr[6]=1;
}
