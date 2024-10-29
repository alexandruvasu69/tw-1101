const promise = new Promise((res, rej) => {
    setTimeout(() => {
        const success = false;
        if(success) {
            res("Operation succeeded");
        } else {
            rej(new Error("Operation failed"));
        }
    }, 2000);
});

promise
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));

console.log('here');