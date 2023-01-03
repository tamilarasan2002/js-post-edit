let row=document.querySelector(".row");
let email=document.querySelector(".emailid");
let save=document.querySelector(".saveid");

save.addEventListener("click",function(){

    var a={};
        a["emails"]=email.value;
    let content=document.createElement("div");
    row.appendChild(content);
    content.classList.add("content");
  
    let icon1=document.createElement("span");
    icon1.setAttribute("class","fa fa-trash");
    content.appendChild(icon1);

    icon1.addEventListener("click",function(){
    this.parentNode.remove();
    }); 

    para=document.createElement("p");
    para.classList.add("para")
    content.appendChild(para);
    para.textContent=email.value;
    email.value="";
    
    let icon2=document.createElement("span");
    icon2.setAttribute("class","fa fa-edit");
    content.appendChild(icon2);
    icon2.addEventListener("click",function(){
    email.value=this.previousElementSibling.innerText
    this.parentNode.remove();
    });


});
