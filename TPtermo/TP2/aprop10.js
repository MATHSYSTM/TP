if(photocor[10]==1){
let imag=document.createElement("img");imag.setAttribute("id","photocorr10");
imag.setAttribute("src","photocorr10.jpg");
imag.addEventListener("click",()=>{playings();
document.querySelector("#exer").removeChild(event.currentTarget);tbcorr[10]=0;});
document.querySelector("#exer").append(imag);tbcorr[10]=1;
}