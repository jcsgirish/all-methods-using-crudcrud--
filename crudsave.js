function save(event)
{
  event.preventDefault()
  var myname=event.target.Name.value
  var myemail=event.target.Email.value
  var myphnumber=event.target.phonenumber.value

var object={
  myname,
  myemail,
  myphnumber,
}
axios.post("https://crudcrud.com/api/0ea59b2c9d2245b09a74bf3ac1567939/savedetails",object)
.then((respone)=>{
    onscreen(respone.data)
    console.log(respone)


})
.catch((err)=>{
    console.log(err)
})
//localStorage.setItem(object.myemail,JSON.stringify(object))
//onscreen(object)
}
window.document.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/0ea59b2c9d2245b09a74bf3ac1567939/savedetails")
    .then((response)=>{
        console.log(response)

        for(var i=0;i<response.data.length;i++){
            onscreen(response.data[i])
        }
    })
    .catch((error)=>{
        console.log(error)
    })
   
})


function onscreen(object)
{

var  parentele=document.getElementById('listofusers')
var childele=document.createElement('li')
childele.textContent=(object.myname+"--"+object.myemail+'--'+object.myphnumber+'--')
parentele.appendChild(childele)


const delbutton =document.createElement('input')
delbutton.style.border='1px solid red'
delbutton.type='button'
delbutton.value='Delete'
delbutton.className='deletebutton'

delbutton.onclick = ()=>{
  localStorage.removeItem(object.myemail)
  parentele.removeChild(childele)
 
 
}
childele.appendChild(delbutton)

const editbutton =document.createElement('input')
editbutton.style.border='1px solid blue'
editbutton.type='button'
editbutton.value='Edit'
editbutton.className='editbutton'

editbutton.onclick = ()=>{
  localStorage.removeItem(object.myemail)
  parentele.removeChild(childele)
  document.getElementById('name').value=object.myname
  document.getElementById('emailid').value=object.myemail
  document.getElementById('Number').value=object.myphnumber

}
childele.appendChild(editbutton)
}
