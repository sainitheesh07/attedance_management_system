const logBtn=document.getElementById("login")
logBtn.addEventListener("click",function(){
    event.preventDefault()
    const email=document.getElementById("email").value
    const password=document.getElementById("pass").value
    console.log(password)
    if(password==="" || email===""){
        alert("please fill all the fields")
        return
    }
    const user={
        email:email,
        password:password
    }
    const users=JSON.parse(localStorage.getItem("users"))
    const matchingusers=users.find(function(user){
        return(user.email===email && user.password=== password)
    })
    if(matchingusers){
        alert("login successfull")
        window.location.href="index.html"
    }
    else{
        alert("invalid user name or password")
    }
})