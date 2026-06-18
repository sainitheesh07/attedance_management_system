const regBtn= document.getElementById("reg-button")
/*console.log(regBtn)*/
regBtn.addEventListener("click",function(){
    event.preventDefault()
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const password=document.getElementById("pass").value
    const repassword=document.getElementById("re").value
    if(name ==="" || password==="" || repassword==="" || password===""){
        alert("please fill all the fields")
    }
    if(password!==repassword){
        alert("password mismatch")
    }
    const user={
        name:name,
        email:email,
        password:password
    }
    let users = JSON.parse(localStorage.getItem("user")) || []
    users.push(user)
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users))
    alert("registration successfull")
    window.location.href="login.html"
    
})