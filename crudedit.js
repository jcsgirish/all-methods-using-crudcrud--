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
axios.post("https://crudcrud.com/api/6cdbcb9a46f2418689d071099c346baf/savedetails",object)
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
    axios.get("https://crudcrud.com/api/6cdbcb9a46f2418689d071099c346baf/savedetails")
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

        axios.delete(`https://crudcrud.com/api/6cdbcb9a46f2418689d071099c346baf/savedetails/${object._id}`)
          .then((response) => {
            console.log(response)
            parentele.removeChild(childele)
          })
          .catch((error) => {
            console.log(error)
          })
}
childele.appendChild(delbutton)


const editbutton =document.createElement('input')
editbutton.style.border='1px solid blue'
editbutton.type='button'
editbutton.value='Edit'
editbutton.className='editbutton'

editbutton.onclick = ()=>{
  
  parentele.removeChild(childele)
  document.getElementById('name').value=object.myname
  document.getElementById('emailid').value=object.myemail
  document.getElementById('Number').value=object.myphnumber

}
childele.appendChild(editbutton)
}




