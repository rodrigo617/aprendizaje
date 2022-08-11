// const p1 = Promise.resolve(1)

// console.log(p1)

// p1
//     .then(x => x + 5)
//     .then(x => Promise.resolve(x + 5))
//     .then(x => Promise.reject('error!'))
//     .then(x => console.log('esto no se va a llamar'))
//     .catch(e => console.log(e))

// const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x), 1000))

// delayed(7)
//     .then(x => {
//         console.log(x)
//         return delayed(x+7)
//     })
//     .then(x => console.log(x))
//     .then(x => Promise.reject('hubo un error'))
//     .catch(e => console.log(e))
