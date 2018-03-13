var applyMap = function() {
  
	// var output = [] --> 1

	// var inputValues = [5, 7, 18]
	// var output = [] --> 2

	



  var inputValues = [12, 26, 42]
  function map(value) {
      return value - 2
    }
    var inputMaps = [map]
    var output = [map(inputValues)]
  return output
}

module.exports = {
  title: 'Exercise 3',
  run: applyMap
}
