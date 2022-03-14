const myName = document.getElementById("name");
const myEmail = document.getElementById("email");
const myMessage = document.getElementById("enterYourMessage");
const myForm = document.getElementById("form");
const myButton = document.getElementById("submit");

myButton.addEventListener("click", (e)=>{
  e.preventDefault()
  checkInputs()
})
  
 function checkInputs(){
  const nm = myName.value
  const el = myEmail.value
   const eym = myMessage.value
  alert("This is the name: "+nm + "This is the email: "+el + "This is the message:  "+eym);
 }
 

 $(document).ready(function(){
   $(".design").click(function(){
     $("#design-i").toggle()
     $("#design-p").toggle()
   })
 })

 $(document).ready(function(){
   $(".development").click(function(){
     $("#development-i").toggle()
     $("#development-p").toggle()
   })
 })

 $(document).ready(function(){
   $(".product").click(function(){
     $("#product-i").toggle()
     $("#product-p").toggle()
   })
 })