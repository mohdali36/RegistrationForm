
function startListen(){

var form = document.getElementById('form')

form.addEventListener('submit', function(e)
{
e.preventDefault()
alert("Thank you for submitting your information. Our team will contact you soon.")
var firstname = document.getElementById('firstname').value
var lastname = document.getElementById('lastname').value
var email = document.getElementById('email').value
var phone = document.getElementById('phone').value
var Experience = document.getElementById('Experience').value
var currently = document.getElementById('Role').value
var Skills = document.getElementById('Skills').value
var Address = document.getElementById('Address').value

console.log("First Name :"+ firstname)
console.log("Last Name :"+lastname)
console.log("Email :"+email)
console.log("Phoneno :"+phone)
console.log("Experience :"+Experience)
console.log("Skills :"+Skills)
console.log("Position :"+currently)
console.log("Address :"+Address)
})
}

