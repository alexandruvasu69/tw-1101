function fetchDataFromServer(url, callback) {
    setTimeout(function () {
        const data = { name: 'John', age: 30};
        callback(data);
    }, 1000);
}

function displayData(data) {
    console.log(`Data: ${data}`);
}

