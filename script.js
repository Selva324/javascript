// selecting overlay,popup,l-btn
var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var btn=document.querySelector("#add-popup-btn")

btn.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})

// select cancel button
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
})
// select container, addpopup, popup-input-title, popup-input-author, popup-textarea
var container = document.querySelector(".container")
var addpopup = document.getElementById("add-popup")
var popupinputtitle = document.getElementById("popup-input-title")
var popupinputauthor = document.getElementById("popup-input-author")
var popuptextarea = document.getElementById("popup-textarea")
// select btn
var btn = document.querySelector(".btn")

addpopup.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${popupinputtitle.value}</h2> <h5>${popupinputauthor.value}</h5> <p>${popuptextarea.value}</p> <button onclick="deletebook(event)" class="btn">delete</button>`
    container.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})
// select btn
function deletebook(event){
    event.target.parentElement.remove()
}
