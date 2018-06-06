
// handled by the firebase database call
const promise = new Promise( (resolve, reject) => {
    // long running asyn task    
    setTimeout(() => {
        // can only return one arguement, but can resolve an object
        // Can only do one resolve in a promise.
        resolve('This is my resolved data');

        // reject will return an uncaught error
        // reject('something went wrong!');
    }, 5000);
    
});


console.log('before');

promise.then( (data)=> {
    console.log(1, data);
}).catch((error) => {
    // catch the error and return it in a console log
    console.log('error: ', error)
});

// alternative way to write the catch statement because promise then handles it as an additional param.
promise.then( (data)=> {
    console.log(1, data);
}, (error) => {
    // catch the error and return it in a console log
    console.log('error: ', error)
});



console.log('after');


// Promise chaining
// second then runs once the first promise is complete. The first callback and return data to the 2nd callback
promise.then( (data)=> {
    console.log(1, data);
    return 'some data';
}).then( (someData)=> {
    console.log('does this run?', someData);
}).catch((error) => {
    
    console.log('error: ', error)
});


// Promise chaining by returning a promise - reduces the need to have nested code
promise.then( (data)=> {
    console.log(1, data);
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('this is my other promise');
        }, 5000);
    });
}).then( (someData)=> {
    console.log('does this run?', someData);
}).catch((error) => {
    console.log('error: ', error)
});