let container=document.querySelector(".container");
let email=document.querySelector(".emailid");
let save=document.querySelector(".saveid");
save.addEventListener("click",function(){
    let content=document.createElement("div");
    container.appendChild(content);
    content.classList.add("content");

    let a={};
    a["emails"]=email.value;
   

    
  
    let icon1=document.createElement("span");
    icon1.setAttribute("class","fa fa-minus");
    content.appendChild(icon1);
    icon1.addEventListener("click",function(){
    this.parentNode.remove();
    }); 

    para=document.createElement("p");
    content.appendChild(para);
    para.textContent=email.value;
    email.value="";
    
    let icon2=document.createElement("span");
    icon2.setAttribute("class","fa fa-plus");
    content.appendChild(icon2);
    icon2.addEventListener("click",function(){
    email.value=this.parentNode.emails
    });


});
