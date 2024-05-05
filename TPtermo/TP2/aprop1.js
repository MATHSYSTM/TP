

if(photocor[1]==1){
let imag=document.createElement("img");imag.setAttribute("id","photocorr1");
imag.setAttribute("src","photocorr1.jpg");
imag.addEventListener("click",()=>{

for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();sndnum[ply]=0;}}
document.querySelector("#exer").removeChild(event.currentTarget);tbcorr[1]=0;});
document.querySelector("#exer").append(imag);tbcorr[1]=1;
}