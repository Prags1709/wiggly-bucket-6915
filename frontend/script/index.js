 //////////////////////////////Explore carousel//////////////////////////////////////////

 let count2 = 0;
 document.querySelector("#ltexarrow").onclick = () => {
 console.log("clicked");

 if (count2 == 0) {
     return;
 }
 count2--;
 let val = count2 * 260;
 document.querySelector("#explore_container").style.transform = `translateX(-${val}px)`;
 };

 document.querySelector("#rtexarrow").onclick = () => {
 if (count2 > 4) {
     return;
 }
 count2++;
 let val = count2 * 260;
 document.querySelector("#explore_container").style.transform = `translateX(-${val}px)`;
 };

  //////////////////////////////brod carousel//////////////////////////////////////////

  let count3 = 0;
 document.querySelector("#Ltexarrow").onclick = () => {
 console.log("clicked");

 if (count3 == 0) {
     return;
 }
 count3--;
 let valu = count3 * 360;
 document.querySelector("#Explore_container").style.transform = `translateX(-${valu}px)`;
 };

 document.querySelector("#Rtexarrow").onclick = () => {
 if (count3 > 4) {
     return;
 }
 count3++;
 let valu = count3 * 360;
 document.querySelector("#Explore_container").style.transform = `translateX(-${valu}px)`;
 };

 //////////////USER BUTTONS//////////////

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

