let logo = document.querySelector("#logo")
 logo.addEventListener("click",()=>{
    window.location.href = "index.html"
 })

 let reg = document.querySelector("#register")
 reg.addEventListener("click",()=>{
    window.location.href = "register.html"
 })

 let signin = document.querySelector("#signin")
 signin.addEventListener("click",()=>{
    window.location.href = "signin.html"
 })

 let regi = document.querySelector("#create")
 regi.addEventListener("click",()=>{
    window.location.href = "register.html"
 })

 let women = document.querySelector("#women")
 women.addEventListener("click",()=>{
    window.location.href = "women.html"
 })

 let men = document.querySelector("#men")
 men.addEventListener("click",()=>{
    window.location.href = "men.html"
 })


 let  sign_IN= document.querySelector("#sign_in")
 sign_IN.addEventListener("click",async ()=>{
    let Email = document.querySelector("#email").value;
    let Password = document.querySelector("#password").value;

    let user_data = {
        email: Email,
        pass: Password
    }

    //console.log(user_data);
    try {
        let res = await fetch("http://localhost:2023/users/login", {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(user_data)
        })

        let data =await res.json()
        localStorage.setItem("token",data.token)
         console.log(data)

        if(res.ok==true){
            alert(`Welcome, You are Signin Successfully Completed`)
            window.location.href = "index.html"
        }
    } catch (error) {
        console.log(error);
    }

})   
