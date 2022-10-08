let push = document.querySelector("#push");
let pop = document.querySelector("#pop");
let peek = document.querySelector("#peek");
let element = document.querySelector("#push-input");
let pointer = document.querySelector("#top");
let status = document.querySelector("#status");



push.addEventListener("click",pushOp);
let balance = [0,10,15,15,0]
let i =0

let bottom=0

function pushOp(event){
    
   

    if(element.value==""){

    }else{
        if(i<5){
            let stack = document.querySelector("#stack");
            let box = document.createElement("div");
            box.innerText=element.value
            box.classList.add('box', 'new-box');

            stack.append(box);
            
            bottom+=58
            pointer.style.marginBottom=bottom+"px"
            i++
            status.innerText="Happy 😁"
            status.style.color="yellowgreen"
            
        }else{
            // alert("overflow")
            status.innerText="Overflow 😨"
            status.style.color="yellow"
            status.style.textShadow="-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"


            
            shake()
        }
      
       

    }
 

}
pop.addEventListener("click",popOp);

function popOp(event){
    if(bottom>0){
        bottom-=58
        i--
        pointer.style.marginBottom=bottom+"px"
        // console.log(bottom)
        status.innerText="Happy 😁"
        status.style.color="yellowgreen"
        
    }else{
        shake()
        
        // alert("underflow")
        status.innerText="Underflow 😨"
        status.style.color="red"
        status.style.textShadow="-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"

    }
  

let box = document.querySelector("#stack>div:last-child");
    document.querySelector("#stack>div:last-child").classList.add('box', 'box-out');
    setTimeout(() => {
        box.remove();

    }, 300);




}

function shake(){
    for(let i =0; i<3; i++){
        stack.style.transform="rotate(10deg)"
        stack.style.transition="transform 0.1s"

        setTimeout(() => {
            stack.style.transform="rotate(-10deg)"

            
        }, 150);


        setTimeout(() => {
            stack.style.transform="rotate(0deg)"

        },300);

       

    }
}


peek.addEventListener("click",function(){

    pelement=document.querySelector("#stack>div:last-child").innerText
    status.innerText = pelement

})

