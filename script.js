const ramenArray =[
    { 
        name: "Shoyu Ramen",
        restaurant: "Inchiran",
         image: "shoyu.jpg", 
         rating: 5,
          comment: "Delicious!"
        },
    { 
        name: "Miso Ramen",
        restaurant: "Menya", 
        image: "miso.jpg",
        rating: 4, 
        comment:"The best dish ever!"
    },
    {
        name:"Tonkotsu Ramen",
        restaurant: "Ramen-ya",
        image: "tonkotsu.jpg" 
        }
];
function displayRamen(){
    const ramenMenu = document.getElementById("ramen-menu");
    
   ramenArray.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
   img.style.cursor = "pointer";

   img.addEventListener("click", () => handleClick(ramen));


   ramenMenu.appendChild(img);

   ramen.remove();
   
   })

}



const detail = document.getElementById("ramen-detail");
function handleClick(event){
        event.preventDefault();

        let name = document.getElementById("itemName").value;
        let restaurant =  document.getElementById("restaurantName").value;
        let comment = document.getElementById("commentsctn").value;
        let rating = document.getElementById("ratingsctn").value;


        if (!name || !restaurant || !comment ||!rating) {
            alert("please fill in all fields before submitting");
        }
           
        

        console.log("New Ramen Added");
        console.log("Name", name);
        console.log("Restaurant", restaurant);
        console.log("Comment", comment);
        console.log("Rating",rating);


        document.getElementById("ramenForm").form();

  
}



let submit = document.getElementById("btn");
 submitBtn.addSubmitListener("submit", function (){
   document.getElementById("output").innerText = "submit was clicked";

   addSubmitListener();

    });
    function main(){
        displayRamen();
        addSubmitListener();
    }
   

   document.addEventListener("DOMContentLoaded", main);