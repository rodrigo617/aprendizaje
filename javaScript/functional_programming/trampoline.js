const trampoline = fn => (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result
}

const suma = (number, sum = 0) => (
    number === 0
    ? sum
    : suma(number-1, sum + number)
)

const r = suma(10000)
console.log(r)