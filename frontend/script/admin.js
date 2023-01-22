let logo = document.querySelector("#logo")
    logo.addEventListener("click",()=>{
        window.location.href = "index.html"
    })

    //---------------------//

let apply = document.querySelector("#click")
apply.addEventListener("click",async ()=>{
    let Name = document.querySelector("#name").value ;
    let Email = document.querySelector("#email").value;
    let Password = document.querySelector("#password").value;

    let user_data = {
        name: Name,
        email: Email,
        pass: Password
    }

    try {
        let res = await fetch("http://localhost:2023/admin/register", {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(user_data)
        })

        if(res.ok==true){
            alert(`Registration Completed`)
            window.location.href = "admin.html"
        }
    } catch (error) {
        alert("Something Went wrong")
        console.log(error);
    }

 })

 //---customer data-----------//
 window.addEventListener("load",()=>{
    display()
 })

 let global_data = [];

 async function display(){
    try {
        let res = await fetch("http://localhost:2023/users/",{
            headers: {
                'content-type': 'application/json',
            }
        })

        let pro_data = await res.json()
        console.log(pro_data);
        global_data = [...pro_data]
        render(pro_data)
    } catch (error) {
        alert(`Please Signin First`)
        console.log(error);
    }
 }

 function render(pro_data){

      let continer = document.querySelector("#add")
      continer.innerHTML = ""

      let New_data = pro_data.map((elm)=>{
         return`
         <tr class="cart-row">
                        <td class="d-name">
                            <p class="name">${elm.first_name+" "+elm.last_name}</p>
                        </td>
                        <td class="d-phone">
                            <p class="phone">${elm.phone}</p>
                        </td>
                        <td class="d-age">
                            <p class="age">${elm.gender}</p>
                        </td>
                        <td class="d-dob">
                            <p class="dob">${elm.DOB}</p>
                        </td>
                        <td class="d-email">
                            <p class="mail">${elm.email}</p>
                        </td>
                        <td class="del">
                            <button id="close" data-id="${elm._id}">Remove</button>
                        </td>
            </tr>
           
         `
      })

      continer.innerHTML = New_data.join(" ")

      let btns = document.querySelectorAll("#close")

        for(let btn of btns){
            btn.addEventListener("click",(e)=>{
                let id = e.target.dataset.id
                //console.log(id);
                Remove_data(id)
            })
        }
 }

 async function Remove_data(id){
    try {
        let res = await fetch(`http://localhost:2023/users/delete/${id}`,{
            method:"DELETE",
            headers:{
                'content-type': 'application/json'
            }
        })

        if(res.ok==true){
            alert("User data has been deleted");
            display()
        }
        // window.addEventListener("load",()=>{
        //     display()
        //  })
    } catch (error) {
        alert("Something Went wrong")
        console.log(error);
    }
}
