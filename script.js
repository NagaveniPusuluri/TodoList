const form = document.querySelector('.form');
const text = document.querySelector(".input-name");
const add = document.querySelector(".add");
const ul=document.querySelector(".ul");

form.addEventListener("submit",function (e) {
    e.preventDefault();
    //creating list tag
    const list = document.createElement("li");
    list.setAttribute("class","list")
    const p = document.createElement("p");
    p.textContent =text.value;
    list.appendChild(p);
    document.querySelector(".ul").appendChild(list);
    //creating button
    const removeBtn=document.createElement("button");
    removeBtn.innerText="Remove";
    list.appendChild(removeBtn);
    text.value = "";
});

ul.addEventListener("click",function(e){
  e.preventDefault();
  if(e.target.innerHTML==="Remove")
  ul.removeChild(e.target.parentElement);
})
