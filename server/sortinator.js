const sortString = (str) => {
  let strArr = str.split('')
  strArr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
  return strArr.join('')
}

module.exports = sortString;