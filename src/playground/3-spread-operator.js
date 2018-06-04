const user = {
    name: 'jen',
    age: 24
}

console.log({
    ...user,
    location: 'phily',
    age: 27         // overrides the user's age
})

console.log({
    age: 27,        // doesn't override the user's age
    ...user,
    location: 'phily'
    
})