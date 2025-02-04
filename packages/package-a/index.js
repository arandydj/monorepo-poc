function greet(name) {
    return `Hello, ${name} (from package-a)`
}

console.log('package A')

module.exports = greet;