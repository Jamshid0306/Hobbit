let menu = {
    crazy: {
        name: 'Crazy',
        price: 31000,
        img: "images/products/burger-1.png",
        amount: 0,
        get totalSum() {
            return this.price * this.amount;
        }
    },
    light: {
        name: 'Light',
        price: 26000,
        img: "images/products/burger-2.png",
        amount: 0,
        get totalSum() {
            return this.price * this.amount;
        }

    },
    cheeseburger: {
        name: 'CheeseBurger',
        price: 29000,
        img: "images/products/burger-3.png",
        amount: 0,
        get totalSum() {
            return this.price * this.amount;
        }
    },
    dburger: {
        name: 'dBurger',
        price: 24000,
        img: "images/products/burger-4.png",
        amount: 0,
        get totalSum() {
            return this.price * this.amount;
        }
    },

}


let burgerBtns = document.querySelectorAll('.wrapper__list-btn'),
    cartBtn = document.querySelector('.wrapper__navbar-btn'),
    cartlist = document.querySelector('.wrapper__navbar-basket'),
    cartClose = document.querySelector('.wrapper__navbar-close'),
    cartAmount = document.querySelector('.warapper__navbar-count'),
    cartTotalPrice = document.querySelector('.wrapper__navbar-totalprice'),
    cartListItem = document.querySelector(".wrapper__navbar-checklist");




burgerBtns.forEach((btn, i) => {


    btn.addEventListener("click", function () {
        addAmount(this)
    })

})


function addAmount(btn) {

    let parent = btn.closest('.wrapper__list-card')
    // console.log(parent);

    let id = parent.getAttribute("id");

    // console.log(id);
    menu[id].amount++
    basket()
}

function basket() {


    let carts = [];

    for (let key in menu) {
        let burger = menu[key];
        // console.log(burger);
        let productBurger = document.querySelector(`#${key}`)
        let productCount = productBurger.querySelector('.wrapper__list-count')

        if (burger.amount > 0) {
            carts.push(burger)
            productCount.classList.add('active')
            productCount.innerHTML = burger.amount
        } else {
            productCount.classList.remove("active")
            productCount.innerHTML = ""
        }

    }

    let allCount = totalAmount()

    // console.log(allCount);

    if (allCount > 0) {
        cartAmount.classList.add("active")
        cartAmount.innerHTML = allCount
    } else {
        cartAmount.classList.remove("active")
    }

    cartListItem.innerHTML = "";
    carts.forEach((item) => {
        // console.log(item);
        cartListItem.innerHTML += createBuger(item)
    })

    cartTotalPrice.innerHTML = allSum()

}


function createBuger(burger) {
    //    console.log(burger);

    return `<div class="nav__item" id="${burger.name.toLowerCase()}-item">
    <div class="nav__item-left">
        <img src="${burger.img}" alt="">
        <div class="nav__item-info">
            <p>${burger.name}</p>
            <p>${burger.totalSum} сум</p>
        </div>
    </div>
    <div class="nav__item-right">
        <button class="nav__item-btn" data-symbol="-">-</button>
        <span class="nav__item-count">${burger.amount}</span>
        <button class="nav__item-btn" data-symbol="+">+</button>
    </div>


</div>`
}



window.addEventListener("click", (event) => {


    if (event.target.classList.contains('nav__item-btn')) {

        let dataValue = event.target.getAttribute('data-symbol')

        let parentBurger = event.target.closest('.nav__item')

        if (parentBurger) {

            let id = parentBurger.getAttribute('id').split("-")[0]

            if (dataValue == '-') {
                menu[id].amount--
            } else if (dataValue == '+') {
                menu[id].amount++
            }
            basket()


        }



    }

})




function allSum() {

    let allsum = 0;

    for (let i in menu) {
        allsum += menu[i].totalSum
    }

    return allsum
}



function totalAmount() {

    let total = 0;
    for (let key in menu) {
        total += menu[key].amount;
    }
    return total

}



cartBtn.addEventListener("click", () => {
    cartlist.classList.add("active")
})

cartClose.addEventListener("click", () => {
    cartlist.classList.remove("active")
})


// string matn
// number son
// boolean true false
// null, boshliq
// undefined aniqlanmagan qiymat
// BigInt milardan katta songa ishlidi
// Symbol 


// massive array 
// objec 
// function


