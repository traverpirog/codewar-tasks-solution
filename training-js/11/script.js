function changeToHex(num) {
  return num.toString(16).length < 2 ? `0${num.toString(16)}` : num.toString(16);
}

function colorOf(r,g,b){
  return `#${changeToHex(r) + changeToHex(g) + changeToHex(b)}`
}