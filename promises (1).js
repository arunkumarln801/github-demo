// fullfilled
// pending
// rejected

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

let promise = new Promise( (resolve , reject) =>{

        let myPromise = true;
        if(myPromise == true){
            console.log("Promise is fullfilled");
            resolve("I love you");
        }
        else{
            console.log("Promise is rejected");
            reject("I hate you : bcs u cheated me")
        }

});

promise.then(
    (data) =>{
        console.log(data);
        console.log("Same to you");
    }
).catch(
    (err) => {
       console.log(err); 
    }
)