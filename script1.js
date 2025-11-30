const list = document.querySelector("#myList");
const button = document.querySelector("#addBtn");
button.addEventListener("click", function(){

    const newLi = document.createElement("li");
    const count = list.children.length+1;
    newLi.textContent = "New Item" + count;

    if(count%2!==0){
        newLi.style.fontWeight = "bold";
        newLi.style.color = "blue";
    } else{
        newLi.style.fontStyle = "italic";
        newLi.style.color = "red";
    }
    list.appendChild(newLi);
});