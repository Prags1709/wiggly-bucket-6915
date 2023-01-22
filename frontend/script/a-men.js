let logo = document.querySelector("#logo")
logo.addEventListener("click",()=>{
    window.location.href = "index.html"
})

//---------------------//

let apply = document.querySelector("#click")
apply.addEventListener("click",async ()=>{
let Name = document.querySelector("#name").value ;
let image = document.querySelector("#image").value;
let Price = document.querySelector("#price").value;
let Rating = document.querySelector("#rating").value;

let user_data = {
    name: Name,
    avatar: image,
    price: Price,
    rating: Rating
}
console.log(user_data);
try {
    let res = await fetch("http://localhost:2023/men/create", {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization:localStorage.getItem("token")
        },
        body: JSON.stringify(user_data)
    })

    if(res.ok==true){
        alert(`Product Added Successfully`)
        window.location.href = "a-men.html"
    }
} catch (error) {
    alert("Something Went wrong")
    console.log(error);
}

})

//---Product data-----------//
window.addEventListener("load",()=>{
display()
})

let global_data = [];

async function display(){
try {
    let res = await fetch("http://localhost:2023/men/",{
        headers: {
            'content-type': 'application/json',
            Authorization:localStorage.getItem("token")
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
  let length = document.querySelector("#item")
  length.innerHTML = `<h3>(${pro_data.length} Items)</h3>`

  let continer = document.querySelector("#add")
  continer.innerHTML = ""

  let New_data = pro_data.map((elm)=>{
     return`
     <tr class="cart-row">
        <td class="d-name">
                        <img src=${elm.avatar} alt="pho">
                    </td>
                    <td class="d-phone">
                        <p class="phone">${elm.name}</p>
                    </td>
                    <td class="d-age">
                        <p class="age">$${elm.price}.00</p>
                    </td>
                    <td class="d-dob">
                        <p class="dob">${elm.rating}</p>
                    </td>
                    <td class="del">
                        <button id="close" data-id=${elm._id}>Remove</button>
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
    let res = await fetch(`http://localhost:2023/men/delete/${id}`,{
        method:"DELETE",
        headers:{
            'content-type': 'application/json',
            Authorization:localStorage.getItem("token")
        }
    })

    if(res.ok==true){
        alert("Product has been deleted");
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