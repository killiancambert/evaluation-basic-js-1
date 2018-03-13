var removeNegativeValue = function(values) {
  
  var input = [34, -5, 9, 18, 0, -7, 32]
  var output = input.filter(values => values >= 0)
  
  // output = [] --> 1

  /* input = []
     output = [] --> 2 */
  
  return output
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
