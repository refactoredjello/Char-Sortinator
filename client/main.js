var getValue = function() {
  var str = document.getElementById('inputString').value
  return str
}

var addResult = function(str) {
  var newDiv = document.createElement('div')
  var newSortedString = document.createTextNode(str)
  newDiv.appendChild(newSortedString)

  var container = document.getElementById('container')
  container.appendChild(newDiv)
}

var postData = function(e){
  e.preventDefault()
  var stringToSend = getValue()
  var payload = {stringToSort: stringToSend}

  fetch('/sortinator', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: new Headers({'Content-Type': 'application/json'})
  })
  .then(function(resp) { return resp.json() })
  .catch(function(error) {console.log('Error')})
  .then(function(resp) {addResult(resp.sortedString)})
}

var submit = document.getElementById('submit')
submit.addEventListener('click', postData)