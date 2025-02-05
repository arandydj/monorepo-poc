function greet(name) {
    return `Hello, ${name} (from another package)`
}

// console.log("minor change")

module.exports = greet;