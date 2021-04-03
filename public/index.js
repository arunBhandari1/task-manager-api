




const submitForm = document.querySelector('form')
const loginForm = document.querySelector('#form1')
const email=document.querySelector('#email')
const nameUser = document.querySelector('#name')
const password = document.querySelector('#password')
const email1=document.querySelector('#email1')
const password2 = document.querySelector('#password2')

submitForm.addEventListener('submit',(e)=>{
   e.preventDefault()
   const emailForm = email.value
    const nameForm = nameUser.value
    const passForm = password.value
    
   var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:3000/users", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    email: emailForm,
    name: nameForm,
    password:passForm
})
)
})


loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const emailForm1 = email1.value
     const passForm1 = password2.value
     
     console.log(emailForm)
     console.log(passForm)
    var xhr = new XMLHttpRequest();
 xhr.open("POST", "http://localhost:3000/users/login", true);
 xhr.setRequestHeader('Content-Type', 'application/json');
 xhr.send(JSON.stringify({
     email: emailForm1,
     password:passForm1
 }))

   
})
