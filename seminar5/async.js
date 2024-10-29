// function logger(message) {
//     console.log(message);
// }

// async function logger2(message) {
//     console.log(message);
// }

// const arrLogger = async (message) => {
//     console.log(message);
// }

async function f() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('error message')), 1000);
        });
    
        let result = await promise;
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

console.log(2);


f();

