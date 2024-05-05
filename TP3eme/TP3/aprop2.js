if(photocor[2]==1){
let imag=document.createElement("img");imag.setAttribute("id","photocorr2");
imag.setAttribute("src","photocorr2.jpg");
imag.addEventListener("click",()=>{playings();
document.querySelector("#exer").removeChild(event.currentTarget);tbcorr[2]=0;});
document.querySelector("#exer").append(imag);tbcorr[2]=1;
}