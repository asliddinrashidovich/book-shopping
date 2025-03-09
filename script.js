let sun = document.querySelector("#sun"),
  moon = document.querySelector("#moon"),
  body = document.querySelector("body"),
  cart = document.querySelector("#cart"),
  closeShopping = document.querySelector(".closeShopping"),
  homeBg = document.querySelector(".home_bg"),
  leftArrow = document.querySelector(".leftArrow"),
  rightArrow = document.querySelector(".rightArrow"),
  imageIcons = document.querySelectorAll(".image-icon"),
  list = document.querySelector(".product-right-bottom"),
  li = document.querySelectorAll(".list"),
  circle = document.querySelectorAll(".fa-circle"),
  allList = document.querySelector(".all-list"),
  listCard = document.querySelector(".listCard");
let total = document.querySelector(".total");
let quanity = document.querySelector(".quantity");
let bookType = document.querySelectorAll(".book-type");
const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

let products = [
  {
    id: 0,
    type: "modern",
    title: "big magic",
    author: "donna karan",
    image: "/Assets/Images/1.jpg",
    price: 20.0,
  },
  {
    id: 1,
    type: "classic",
    title: "i was born width music",
    author: "dolce & cabanna",
    image: "/Assets/Images/2.jpg",
    price: 200.0,
  },
  {
    id: 2,
    type: "biography",
    title: "i'm glad my mom died",
    author: "jennette mcCurdy",
    image: "/Assets/Images/3.jpg",
    price: 21.99,
  },
  {
    id: 3,
    type: "detective",
    title: "Warrior Soul: A Tye Caine Wilderness Mystery",
    author: "David Barbur",
    image: "/Assets/Images/4.jpg",
    price: 4.99,
  },
  {
    id: 4,
    type: "fantasy",
    title: "The Mountain in the Sea: A Novel",
    author: "Ray Nayler",
    image: "/Assets/Images/5.jpg",
    price: 18.0,
  },
  {
    id: 5,
    type: "cookbook",
    title: "Sweet Enough: A Dessert Cookbook",
    author: "Alison Roman",
    image: "/Assets/Images/6.webp",
    price: 32.55,
  },
  {
    id: 6,
    type: "fairy tale",
    title: "Fairy Tale",
    author: "Stephen King",
    image: "/Assets/Images/7.jpg",
    price: 30.23,
  },
  {
    id: 7,
    type: "fiction",
    title: "Flash Fiction America: 73 Very Short Stories",
    author: "John DuFresne , et al.",
    image: "/Assets/Images/8.jpg",
    price: 15.76,
  },
  {
    id: 8,
    type: "horror",
    title: "Taaqtumi: An Anthology of Arctic Horror Stories",
    author: "Thomas Anguti Johnston , et al.",
    image: "/Assets/Images/9.jpg",
    price: 15.76,
  },
  {
    id: 9,
    type: "historical fiction",
    title:
      "The Things We Cannot Say: A WWII Historical Fiction Novel (Original)",
    author: "Kelly Rimmer",
    image: "/Assets/Images/10.jpg",
    price: 15.8,
  },
  {
    id: 10,
    type: "history",
    title: "The Secret History",
    author: "Donna Tartt",
    image: "/Assets/Images/11.jpg",
    price: 16.74,
  },
  {
    id: 11,
    type: "romance",
    title: "Daughter of the Moon Goddess: A Fantasy Romance Novel",
    author: "Sue Lynn Tan",
    image: "/Assets/Images/12.jpg",
    price: 16.73,
  },
  {
    id: 12,
    type: "modern",
    title: "Women Without Men: A Novel of Modern Iran",
    author: "Shahrnush Parsipur , et al.",
    image: "/Assets/Images/13.jpg",
    price: 14.83,
  },
  {
    id: 13,
    type: "classic",
    title: "War and Peace",
    author: "Leo Tolstoy , et al.",
    image: "/Assets/Images/14.jpg",
    price: 20.46,
  },
  {
    id: 14,
    type: "biography",
    title: "Barkley: A Biography (Original)",
    author: "Timothy Bella",
    image: "/Assets/Images/15.jpg",
    price: 27.89,
  },
  {
    id: 15,
    type: "detective",
    title: "The Detective Up Late",
    author: "Adrian McKinty",
    image: "/Assets/Images/16.jpg",
    price: 25.1,
  },
  {
    id: 16,
    type: "fantasy",
    title: "Legends & Lattes: A Novel of High Fantasy and Low Stakes",
    author: "Travis Baldree",
    image: "/Assets/Images/17.jpg",
    price: 16.73,
  },
  {
    id: 17,
    type: "cookbook",
    title: "The Everlasting Meal Cookbook: Leftovers A-Z",
    author: "Tamar Adler , et al.",
    image: "/Assets/Images/18.jpg",
    price: 32.55,
  },
  {
    id: 18,
    type: "fairy tale",
    title: "Fairy Tales for Fearless Girls",
    author: "Anita Ganeri , et al.",
    image: "/Assets/Images/19.jpg",
    price: 18.59,
  },
  {
    id: 19,
    type: "fiction",
    title: "Wonderbook (Revised and Expanded)",
    author: "Jeff VanderMeer",
    image: "/Assets/Images/20.jpg",
    price: 25.58,
  },
  {
    id: 20,
    type: "horror",
    title: "Nightmare Fuel: The Science of Horror Films",
    author: "Nina Nesseth",
    image: "/Assets/Images/21.jpg",
    price: 24.17,
  },
  {
    id: 21,
    type: "historical fiction",
    title: "Falconland: A Novel of Medieval",
    author: "Reggie Connell",
    image: "/Assets/Images/22.jpg",
    price: 14.99,
  },
  {
    id: 22,
    type: "history",
    title: "We Are the Land: A History of Native California",
    author: "Damon B. Akins , et al.",
    image: "/Assets/Images/23.jpg",
    price: 27.85,
  },
  {
    id: 23,
    type: "romance",
    title: "Rough Around the Hedges: an Uncanny Romance Novel",
    author: "Lish McBride",
    image: "/Assets/Images/24.jpg",
    price: 16.73,
  },
];

let shopProducts = [];

// ============= menu bar ==============

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

// ============= dark mode  ==============

const toggleTheme = () => {
  body.classList.toggle("darkLight");
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
};

sun.addEventListener("click", toggleTheme);
moon.addEventListener("click", toggleTheme);

cart.addEventListener("click", () => {
  body.classList.toggle("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});
window.onscroll = () => {
  body.classList.remove("active");
};

// ================================== header slider ==================================

let imgs = homeBg.querySelectorAll("img");
imgs.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});
let counter = 0;
rightArrow.addEventListener("click", () => {
  if (counter == imgs.length - 1) {
    counter = 0;
    slideImage();
  } else {
    counter++;
    slideImage();
  }
});
leftArrow.addEventListener("click", () => {
  if (counter == 0) {
    counter = imgs.length - 1;
    slideImage();
  } else {
    counter--;
    slideImage();
  }
});
const slideImage = () => {
  imgs.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// ============= Asliddin Norboyev work is start ==============

function initApp() {
  products.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
}
initApp();

// Search input
const searchInput = document.getElementById('mySearch');
const searchBtn = document.getElementById('searchBtn');

searchInput.addEventListener('input', (e) => {
  let productsLists = document.querySelectorAll('.book-title')
  productsLists.forEach(item => {
    if(item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
      console.log(item.parentElement.parentElement)
      item.parentElement.parentElement.classList.remove('hide')
    } else {
      item.parentElement.parentElement.classList.add('hide')
    }
  })
})

// filter catergory 

function filterFunc(type) {
  const lists = document.querySelectorAll('.list');
  lists.forEach(item => {
    console.log(item.getAttribute('data-filter'))
    if(item.getAttribute('data-filter') == type) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
  let newProducts = type == 'all' ? products : [...products].filter(item => {
    return item.type == type
  })
  setData(newProducts)
}

function setData(data) {
  list.innerHTML = ''
  data.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                    </div>
                    </div>
                    `;
  });
}


// shopping card
let countTotal = 0;

function addCardShopping() {
  listCard.innerHTML = ''
  shopProducts.map((value, i) => {
    listCard.innerHTML += `
    <li class="item">
    <div class="shop__img">
    <img src=${value.image} alt="img">
    </div>
    <div class="">${value.title}</div>
    <div class="">${value.price}</div>
    <div class="">
              <button class="" onclick="changeQuanity(${i}, ${value.id}, 0)">-</button>
              <div class="count">${value.count}</div>
              <button class="" onclick="changeQuanity(${i}, ${value.id}, 2)">+</button>
            </div>
          </li>
    `
  })
}


function addToCard(id) {
  let item = {...products[id], count: 1}  
  let ids = [];
  shopProducts.forEach(item => ids.push(item.id))
  if(!ids.includes(item.id)) {
    shopProducts.push(item)
  } 
  document.getElementById('cardQuantity').innerHTML = shopProducts.length
  addCardShopping()
  countTotal = 0;
  totalCount()
}

const count = document.querySelectorAll('li .count');

function changeQuanity(id, valueId, ment) {
    let countNum = 0;
    products.forEach(pro => {
      if(pro.id == valueId) {
        countNum = pro
      }
    })
    if(ment == 0) {
      shopProducts[id].count--
      shopProducts[id].price = (shopProducts[id].count * 100) * countNum.price / 100
      if(shopProducts[id].count == 0) {
        let removedArr = shopProducts.filter(item => {
          return item.count !== 0
        })
        shopProducts = removedArr
      } 
      addCardShopping()
    } else {
      shopProducts[id].count++
      shopProducts[id].price = (shopProducts[id].count * 100) * countNum.price / 100
      addCardShopping()
    }
    countTotal = 0;
    totalCount()
}
  

//total

function totalCount() {
  shopProducts.forEach(item => {
    countTotal += item.price;
  })
  total.innerHTML = `$${countTotal == Math.floor(countTotal) ? countTotal : countTotal.toFixed(2)}`
}