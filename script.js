const form = document.querySelector('.form');
const text = document.querySelector(".input-name");
const add = document.querySelector(".add");

form.addEventListener("submit",function (e) {
    e.preventDefault();
    const list = document.createElement("li");
    list.setAttribute("class","list")
    list.textContent = text.value;
    document.querySelector(".ul").appendChild(list);
    text.value = "";
});

const ul =document.querySelector('.ul');
ul.addEventListener("click", function(e) {  
    let list = document.querySelector(".list");  
  //  list.textContent =''; 
    ul.removeChild(list);
}); 