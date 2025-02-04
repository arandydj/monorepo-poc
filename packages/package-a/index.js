function greet(name) {
    return `Hello, ${name} (from package-a)`
}

console.log("minor change")

module.exports = greet;