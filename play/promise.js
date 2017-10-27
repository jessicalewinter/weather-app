var asyncAdd = (num1, num2) => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(typeof num1 === 'number' && typeof num2 === 'number'){
                    resolve(num1 + num2);
                }else{
                    reject('Arguments are not numbers');
                }
            }, 1500);
    });
};

asyncAdd(5,'7').then((result) => {
    console.log('Result:', result);
    return asyncAdd(result, 33);
}).then((result) => {
    console.log('Should be 45?', result);
}).catch((errorMessage) => {
    console.log(errorMessage);
});


// var somePromise = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         resolve('Hey. It worked!');
//         //reject('Unable to fulfill promise');
//     },2500);
// });

// somePromise.then((message)=> {
//     console.log('Success: ', message);
// },(errorMessage) => {
//     console.log('Error: ', errorMessage);
// });