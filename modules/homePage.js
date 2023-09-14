const products = [
    {
      id: 1,
      name: "Dairy Milk - Milk chocolate",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71egLp06xxL._SX569_.jpg",
      price: 98,
      quantity: 0,
    },
    {
      id: 2,
      name: "Dairy Milk - Hazel nut",
      image:
        "https://media.supermart.ae/12683-thickbox_default/cadbury-dairy-milk-chocolate-90g.jpg",
      price: 390,
      quantity: 0,
    },
    {
      id: 3,
      name: "Hershey's - cookies 'N' chocolate",
      image:
        "https://www.worldofsweets.de/out/pictures/master/product/1/hershey--039-s-cookies--039-n--039-chocolate-40g-no1-1553.jpg",
      price: 350,
      quantity: 0,
    },
    {
      id: 4,
      name: "Amul - Dark Chocolate",
      image:
        "https://th.bing.com/th/id/OIP.khe8Lo-tygltwW_Pp3HINgHaHa?pid=ImgDet&rs=1",
      price: 295,
      quantity: 0,
    },
    {
      id: 5,
      name: `Ferrero Rocher Milk Chocolate `,
      image:
        "https://m.media-amazon.com/images/I/41mXQMLcSpL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 559,
      quantity: 0,
    },
    {
      id: 6,
      name: "Fabelle Hazelnut Chocolate",
      image:
        "https://m.media-amazon.com/images/I/715oRoe4CcL._AC_UL400_.jpg",
      price: 727,
      quantity: 0,
    },
    {
      id: 7,
      name: "Ghirardelli Intense DarK",
      image:
        "https://m.media-amazon.com/images/I/81eEYLEsZ+L._AC_UL400_.jpg",
      price: 788,
      quantity: 0,
    },
    {
      id: 8,
      name: "Cadbury Bournville Rich Cocoa",
      image:
        "https://m.media-amazon.com/images/I/61ocWwtSKXL._AC_UL400_.jpg",
      price: 99,
      quantity: 0,
    },
    {
      id: 9,
      name: "Daarzel Dark",
      image:
        "https://m.media-amazon.com/images/I/41OlR0q9oML._SX300_SY300_QL70_FMwebp_.jpg",
      price: 684,
      quantity: 0,
    },
    {
      id: 10,
      name: "Chocholik 70% Cocoa chocolate",
      image:
        "https://m.media-amazon.com/images/I/71KFNjGP76L._AC_UL400_.jpg",
      price: 349,
      quantity: 0,
    },
  ];
  
  const productCardsContainer = document.getElementById("productCardsContainer");

  let maxQuantity=0;

  const createProductCard = (product) => {
    const card = document.createElement("div");
    card.classList.add("col-12", "col-sm-6", "col-md-4","col-lg-3", "mb-4");
    card.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h6 class="card-title">${product.name}</h6>
            <p class="card-text">Price: ₹${product.price}</p>
            <div class="quantity-container">
              <button class="btn-quantity btn-minus">-</button>
              <span class="text-quantity">${product.quantity}</span>
              <button class="btn-quantity btn-plus">+</button>
            </div>
          </div>
        </div>
      `;

    const quantityContainer = card.querySelector(".quantity-container");
  
    const minusButton = quantityContainer.querySelector(".btn-minus");
    const plusButton = quantityContainer.querySelector(".btn-plus");
  
    const quantityText = quantityContainer.querySelector(".text-quantity");
  
    const updateQuantityText = () => {
      quantityText.textContent = product.quantity;
    };
  
    minusButton.addEventListener("click", () => {
      if (product.quantity > 0) {
        product.quantity--;
        maxQuantity--;
        updateQuantityText();
      }
    });
  
    plusButton.addEventListener("click", () => {
      if (product.quantity < 8 && maxQuantity < 8) { 
          product.quantity++;
          maxQuantity++;
          updateQuantityText();
        } else if(maxQuantity==8){
          alert("Maximum number of chocolates in a pack can be 8 only!");
        }else {
          alert("Maximum number of chocolates in a pack can be 8 only!");
        }
    });
    return card;
  };
  
  const renderProductCards = (products) => {
    products.forEach((product) => {
      const productCard = createProductCard(product);
      productCardsContainer.appendChild(productCard);
    });
  };
  
  const viewCartButton = document.getElementById("viewCartButton");
  viewCartButton.addEventListener("click", () => {
    localStorage.setItem("cartItems", JSON.stringify(products));
  });
  
  renderProductCards(products);