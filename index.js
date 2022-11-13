const x=  [73, 67, 38, 33]
let gradesarray = []
x.forEach ( (el) => {
  var makeCeil = Math.ceil(el/5)*5
  if ((makeCeil - el) < 3){
    if (makeCeil < 40) {
      gradesarray.push(el)
    } else {
      gradesarray.push(makeCeil)
    }   
  } else {
    gradesarray.push(el)
  }
})
console.log(gradesarray)