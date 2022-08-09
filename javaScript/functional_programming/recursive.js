// function recurse() {

//     if(condition){
//         //stop calling itself
//         //..
//     } else {
//         recurse()
//     }
// }

// let countDown = fromNumer => {
//     if(fromNumer === 0){
//         return
//     }
//     console.log(fromNumer)
//     countDown(fromNumer -1 )
// }

// countDown(7)

const n = 9
let parImpar = (number) => {
    if(number === 0){
        return console.log(`${n} es Par`)
    }
    else if(number === 1){
        return console.log(`${n} es Impar`)
    }else{
        return parImpar(number -2 )
    }
}
parImpar(n)

