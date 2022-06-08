const fs = require('fs')
const path = require('path');



// fs.appendFile('./text.txt', "Hello World", (err) => {
//     if(err === true){
//         console.log(err)
//     }else{console.log('Success!')}
// })

fs.readFile(`./text.txt`, 'utf-8', (err, data) => {
    if(err === true){
        console.log(err)
    }else{
        console.log(data)
    }
})
fs.unlink('./helloWorld.txt', (err) => {
    if(err === true){
        console.log(err)
    }else{
        console.log('Delete Successful!')
    }
})
fs.rename('./text.txt', './helloWorld.txt', (err) => {
    if(err === true){
        console.log(err)
    }else(
        console.log('Success!')
    )
})

fs.writeFile('./text.txt', "This is a test", (err) => {
    if(err === true){
        console.log(err)
    }else{console.log('Success!')}
})

fs.unlink(path.join(".", "helloWorld.txt"), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Path Join Success!");
    }
  }
)
