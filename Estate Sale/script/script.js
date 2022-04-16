const shoppingCart = []
const homeButton = document.getElementById("home-add")
const catButton = document.getElementById("cat-add")
const carButton = document.getElementById("car-add")
const teethButton = document.getElementById("teeth-add")
const boatButton = document.getElementById("boat-add")
const magazineButton = document.getElementById("magazine-add")
const checkoutButton = document.getElementById("checkout")

function homeClick() {
    console.log("clicked home")
    shoppingCart.push([750, 'home-add', 'home'])
}
homeButton.addEventListener('click', homeClick)

function catClick() {
    console.log("clicked cat")
    shoppingCart.push([27, 'cat-add', 'cat'])
}
catButton.addEventListener('click', catClick)

function carClick() {
    console.log("clicked car")
    shoppingCart.push([13000, 'car-add', 'car'])
}
carButton.addEventListener('click', carClick)

function teethClick() {
    console.log("clicked teeth")
    shoppingCart.push([13, 'teeth-add', 'teeth'])
}
teethButton.addEventListener('click', teethClick)

function boatClick() {
    console.log("clicked boat")
    shoppingCart.push([70, 'boat-add', 'boat'])
}
boatButton.addEventListener('click', boatClick)

function magazineClick() {
    console.log("clicked magazine")
    shoppingCart.push([9, 'magazine-add', 'magazine'])
}
magazineButton.addEventListener('click', magazineClick)

function checkoutClick() {
    console.log("checkout clicked")
    console.log(shoppingCart)
    console.log(shoppingCart[0][0] + shoppingCart[1][0])
    const totalCartPrice = shoppingCart.reduce((total, current) => total + current[0], 0)

}
checkoutButton.addEventListener('click', checkoutClick)