const collection = [
    {
        image: "cloth 1.jpg",
        title: "Product 1"
    },
    {
        image: "cloth 4.webp",
        title: "Product 2"
    },
    {
        image: "cloth2.jpeg",
        title: "Product 3"
    }
];

const gallery = document.getElementById("gallery");

collection.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <p>${item.title}</p>
    `;

    gallery.appendChild(card);
});
const main = document.getElementById("main");

const topSection = document.createElement("div");
topSection.className = "top-section";

const heading = document.createElement("h1");
heading.textContent = "Explore Our Collection";

const paragraph = document.createElement("p");
paragraph.textContent =
"Discover elegant designs inspired by the rich culture and modern fashion of Pakistan. Each piece is carefully crafted to bring comfort, style, and confidence to your everyday and special moments.";

topSection.appendChild(heading);
topSection.appendChild(paragraph);

main.appendChild(topSection);


main.appendChild(topSection);



const products = [
{name:"Elegant Dress", price:5000, image:"cloth 11.jpg"},
{name:"Elegant Dress", price:3000, image:"cloth 12.webp"},
{name:"Elegant Dress", price:8000, image:"cloth 8.webp"},
{name:"Elegant Dress", price:7500, image:"cloth 8.jpg"},
{name:"Elegant Dress", price:6500, image:"cloth 6.jpg"},
{name:"Elegant Dress", price:9000, image:"cloth 7.webp"},
{name:"Elegant Dress", price:8500, image:"cloth3.jpeg"},
{name:"Elegant Dress", price:4000, image:"cloth 2.jpg"},
{name:"Elegant Dress", price:9500, image:"colth 12.jpg"}
];



const container = document.createElement("div");
container.className = "container";

products.forEach(product => {

    const discountPrice = product.price - (product.price * 0.25);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${product.image}">
        <div class="card-content">
            <h3>${product.name}</h3>
            <p class="discount">25% Discount</p>
            <p><b>Rs ${discountPrice}</b></p>
            <button>Add to Cart</button>
        </div>
    `;

    card.querySelector("button").addEventListener("click", function(){
        alert(product.name + " add to cart!");
    });

    container.appendChild(card);
});

main.appendChild(container);


