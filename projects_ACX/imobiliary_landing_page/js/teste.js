const btnmenu = document.querySelector(".menubtn");
const navmenu = document.querySelector(".navpc");
const links = document.querySelectorAll(".navlist>li>a");
btnmenu.addEventListener("click", () => {
    navmenu.classList.toggle("menumobile");
});
links.forEach((e) => {
    e.addEventListener("click", () => {
        navmenu.classList.remove("menumobile")
    })
})



const imobiliarysection = document.querySelector("#imobiliarysSection");
let sampleProperties = [
  {id: 1,name: "Modern Family House",img: "./img/landing_img1.jpg",price: "$200,000",type: "house",location: "Costa do Sol, Maputo",description:  "Modern 3-bedroom family house with spacious living areas, private garden and secure parking.",bedrooms: 3,bathrooms: 3,area: "240 m²",features: "Swimming Pool, Garden, Parking",},

  {id: 2,name: "Luxury City Apartment",img: "./img/landing_img2.jpg",price: "$140,000",type: "apartment",location: "Polana, Maputo",description:  "Elegant 2-bedroom apartment located in a prime area, ideal for families or professionals.",bedrooms: 2,bathrooms: 2,area: "120 m²",features: "Balcony, Elevator, 24/7 Security",},

  {id: 3,name: "Premium Office Space",img: "./img/landing_img1.jpg",price: "$950 / month",type: "office",location: "Downtown, Maputo",description:  "Modern commercial office space suitable for companies, agencies and professional services.",bedrooms: 0,bathrooms: 2,area: "150 m²",features: "Parking, Elevator, Reception",},

  {id: 4,name: "Contemporary Villa",img: "./img/landing_img2.jpg",price: "$280,000",type: "house",location: "Sommerschield, Maputo",description:  "Spacious contemporary villa featuring large interiors, private outdoor space and modern finishes.",bedrooms: 4,bathrooms: 4,area: "320 m²",features: "Swimming Pool, Garden, Garage",},

  {id: 5,name: "Modern City Flat",img: "./img/landing_img1.jpg",price: "$100,000",type: "apartment",location: "Malhangalene, Maputo",description:  "Comfortable modern flat with practical living spaces, ideal for young professionals or small families.",bedrooms: 2,bathrooms: 1,area: "95 m²",features: "Balcony, Parking, Security",},

  {id: 6,name: "Spacious Family Apartment",img: "./img/landing_img2.jpg",price: "$160,000",type: "apartment",location: "Coop, Maputo",description:  "Spacious 3-bedroom apartment with comfortable living areas and convenient access to schools and services.",bedrooms: 3,bathrooms: 2,area: "145 m²",features: "Balcony, Parking, 24/7 Security",},

    {id: 7, name: "Executive Apartment", img: "./img/landing_img2.jpg", price: "$180,000", type: "apartment", location: "Sommerschield, Maputo", description:   "Premium apartment designed for comfortable executive living in one of the city's most desirable areas.", bedrooms: 3, bathrooms: 3, area: "170 m²", features: "Swimming Pool, Gym, Parking",},

    {id: 8, name: "Business Office Center", img: "./img/landing_img1.jpg", price: "$1,200 / month", type: "office", location: "Baixa, Maputo", description:   "Professional office space in a central business area, suitable for companies and growing businesses.", bedrooms: 0, bathrooms: 2, area: "180 m²", features: "Reception, Elevator, Parking",},

    { id: 9, name: "Ocean View Residence", img: "./img/landing_img1.jpg", price: "$350,000", type: "house", location: "Triunfo, Maputo", description: "Exclusive 4-bedroom residence with spacious interiors, premium finishes and beautiful outdoor areas.", bedrooms: 4, bathrooms: 4, area: "380 m²", features: "Ocean View, Swimming Pool, Garden, Garage", },
];
sampleProperties.map((e, i) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <div class="imobiliary">
        <div class="img">
            <div class="type">${e.type}</div>
            <img src="${e.img}">
        </div>
            <div class="infos">
                <div class="name">${e.name}</div>
                <div class="price">${e.price}</div>
                <div class="location">${e.location}</div>
                <div class="description">${e.description}</div>
                <p>${e.bedrooms} Beds · ${e.bathrooms} Baths · ${e.area}</p>
                <div class="ctas"><button class="btn seemore">View Property</button><a href="https://wa.me/message/T2NJ5MWOD5JIL1" class="btn whatsAppbtn">Ask on WhatsApp</a></div>
            </div>
    </div>`;
  imobiliarysection.appendChild(div);
});

