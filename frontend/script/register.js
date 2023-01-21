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

 let women = document.querySelector("#women")
 women.addEventListener("click",()=>{
    window.location.href = "women.html"
 })

 let men = document.querySelector("#men")
 men.addEventListener("click",()=>{
    window.location.href = "men.html"
 })

 let cart_page = document.querySelector("#cart_bag")
 cart_page.addEventListener("click",()=>{
   window.location.href = "cart.html"
 })

 let apply = document.querySelector("#apply")
 apply.addEventListener("click",async ()=>{
    let first_Name = document.querySelector("#firstname").value ;
    let last_Name = document.querySelector("#lastname").value;
    let Phone = document.querySelector("#phone").value;
    let Gender = document.querySelector("#gender").value;
    let Dob = document.querySelector("#dob").value;
    let Email = document.querySelector("#email").value;
    let Password = document.querySelector("#password").value;

    let user_data = {
        first_name: first_Name,
        last_name: last_Name,
        phone: Phone,
        gender: Gender,
        DOB: Dob,
        email: Email,
        pass: Password
    }

    try {
        let res = await fetch("http://localhost:2023/users/register", {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(user_data)
        })

        if(res.ok==true){
            alert(`Hello ${user_data.first_name}, You are Registration Successfully Completed`)
            window.location.href = "index.html"
        }
    } catch (error) {
        console.log(error);
    }

 })