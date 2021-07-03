// let books= document.querySelectorAll("#book-list li .name");
// Array.from(books).forEach((books)=>{
//     books.textContent +="hello"
// })

// var book=document.querySelector("#book-list");
// //book.innerHTML ='<h2>Book more to add</h2>'
// book.innerHTML +='<h2>Book more to add</h2>'

// var blist=document.querySelector("#book-list")
// console.log(blist.children)
// console.log(blist.nextElementSibling);
// blist.previousElementSibling.querySelector('p').innerHTML='<br> yo yo'

document.addEventListener('DOMContentLoaded',()=>{

    //Delete the Activity

const list =document.querySelector('#item-list ul')

list.addEventListener('click',(e)=>{
    if(e.target.className=='delete'){
    const li1=e.target.parentElement
    list.removeChild(li1)
    }
})

// add Activity

var form=document.forms['add-item']
form.addEventListener('submit',(e)=>{
e.preventDefault()
const value=form.querySelector('input[type="text"]').value;

//create elements
const li2=document.createElement('li')
const title=document.createElement('span')
const deletebtn=document.createElement('span')

//textcontent

deletebtn.textContent='done'
title.textContent=value;

//add classes

title.classList.add('name')
deletebtn.classList.add('delete')

//append elememts

li2.appendChild(title)
li2.appendChild(deletebtn)
list.appendChild(li2)

})

//hide Activites

const hide=document.querySelector('#hide')
hide.addEventListener('change',(e)=>{
if(hide.checked)
    list.style.display="none";
else
    list.style.display="initial";
})

//search Items

var searchBox=document.forms['search-items'].querySelector('input')
searchBox.addEventListener('keyup',(e)=>{
const text=e.target.value.toLowerCase()
var items=list.getElementsByTagName('li')
Array.from(items).forEach((item)=>{
    var activity=item.firstElementChild.textContent
    if(activity.toLowerCase().indexOf(text)!=-1)
        item.style.display='block';
    else
        item.style.display='none';
})
})
})
