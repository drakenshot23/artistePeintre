var btn = document.querySelector("#menuBtn");
var menu = document.querySelector("#menu");

btn.addEventListener("click", function()
{
   if(menu.className === "")
   {
       menu.className += " responsive";
   } else
   {
       menu.className = "";
   }
});