let addtodo=document.getElementById("add");
let inputtodo=document.getElementById("inputfiled");
let listtodo=document.getElementById("list");

addtodo.addEventListener("click",function(){
    var paragraph=document.createElement("h1");
    var deletbutton=document.createElement("button")
    paragraph.innerText=inputfiled.value;
    paragraph.classList.add("para")
    deletbutton.classList.add("delet")
    listtodo.append(paragraph,deletbutton);
    inputfiled.value="";
    

paragraph.addEventListener("click",function(){
    paragraph.style.textDecoration="line-through"
})
paragraph.addEventListener("dblclick",function(){
    listtodo.remove(paragraph,deletbutton)

})
deletbutton.addEventListener("click",function(){
    listtodo.remove(deletbutton)
    
})
})