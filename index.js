function EMail() {
   let name = prompt('Whats is ur name?').toLowerCase().trim()
   let surname = prompt('Whats is ur surname?').toLowerCase().trim()
   let com = prompt('Gmail,Yahoo,Cookie?').toLowerCase().trim()
   let randomNum = Math.floor(Math.random() * 10000)
   
   alert(`${name}${surname}${randomNum}@${com}.com`)
}

EMail()


