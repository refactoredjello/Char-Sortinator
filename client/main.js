var getValue = function() {
  var str = document.getElementById('inputString').value
  return str
}

var postData = function(){
  var stringToSend = getValue()
  var payload = {stringToSort: stringToSend}

  fetch('/sortinator', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: new Headers({'Content-Type': 'application/json'})
  })
}

var submit = document.getElementById('submit')
submit.addEventListener('click', postData)