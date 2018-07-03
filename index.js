var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
 var itemNamePrice = ({[item]: price})
 cart.push(itemNamePrice)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length===0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length===1) {
    var oneItem = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
   return oneItem
  }
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
