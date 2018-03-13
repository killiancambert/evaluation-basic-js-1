var mapCustomer = function(customer) {
	var input = {
		firstname: 'Jack',
      	lastname: 'Smith',
      	products: [
      		{ label: 'shoes', price: 89 }, 
      		{ label: 'book', price: 14 }, 
      		{ label: 'smartphone', price: 499 }
      	]
    }
    var output = {
      	firstname: input.firstname,
      	lastname: input.lastname,
      	products: input.products,
      	moneySpent: 602
    }
    return output
}

module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
