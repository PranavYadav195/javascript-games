
let btn=document.querySelectorAll(".btn");
let reset=document.querySelector(".reset-btn");
let p=document.querySelector("#paragraph");
let button=document.getElementById('reset-btn')
let winpatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [2,4,5],
  [6,7,8],
  
]
cat();


function cat(){
  console.log("hii");
  let turn0=true;
btn.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("clicked");
    if(turn0){
      box.innerHTML="x";
      turn0=false;
    
    }
    else{
      box.innerHTML="0";
      turn0=true;
    }
    box.disabled=true;
    winner();

  })
})}

function winner(){
  for(let pattern of winpatterns )
  {
    
    
    
    

    let val1=btn[pattern[0]].innerText;
    let val2=btn[pattern[1]].innerText;
    let val3=btn[pattern[2]].innerText;
    if(val1 != "" && val2 != "" && val3 != ""){
      if(val1 === val2 && val2 === val3 ){
        p.innerHTML="winner"
       
    
        
        
      

  
      }
    }

  }
}
function toto(){
   btn.forEach((boxes)=>{
          boxes.disabled=false;
          p.innerHTML="";
        })
}
button.addEventListener("click",()=>{
  p.innerHTML="";

  btn.forEach((btns)=>{
    btns.innerHTML="";
    btns.disabled=false;
  })

    
  cat();
})
  

