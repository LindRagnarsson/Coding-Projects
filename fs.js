const fs = require('fs')

// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const second = fs.readFileSync('./data/second.txt')

// console.log(first)
// console.log(second.toString())

// const contenido = 'este es un cuarto archivo '

// //Sobreescribir contenido o añadir
// fs.writeFileSync('./data/four.txt', contenido,{
//     flag: 'a'
// })

fs.readFile('./data/first.txt', 'utf-8', function(error, data){
    if(error){
        console.log(error)
    }
    console.log(data)

    fs.readFile('./data/second.txt', 'utf-8', function(error, data){
        if(error){
            console.log(error)
        }
        console.log(data)

        fs.writeFile('./data/newfile2.txt', 'archivo creado desde fs ', (err, data) => {
            console.log(err)
            console.log(data)

            fs.writeFile('./data/newfile3.txt', 'archivo creado desde fs ', (err, data) => {
                console.log(err)
                console.log(data)
            })
        })
    })
})