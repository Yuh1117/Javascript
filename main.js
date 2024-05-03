//////////callback

// const callback = (error, data) => {
//     if (error) {
//         console.log('>>> calling callback with error', error)
//     }
//     if (data) {
//         console.log('>>> calling callback with data', data)
//     }
// }

// function getTodos(callback) {
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function () {
//         if (this.readyState === 4 && request.status === 200) {
//             // Typical action to be performed when the document is ready:
//             callback(undefined, request.responseText);
//         }
//         if (this.readyState === 4 && request.status !== 200) {
//             callback('Something wrongs', undefined);
//         }
//     };
//     request.open("GET", "https://jsonplaceholder.typicode.com/todos", true); 
//     request.send();
// }
// getTodos(callback)

//////////JSON

// const callback = (error, data) => {
//     if (error) {
//         console.log('>>> calling callback with error', error)
//     }
//     if (data) {
//         console.log('>>> calling callback with data', data)
//     }
// }

// function getTodos(callback) {
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function () {
//         if (this.readyState === 4 && request.status === 200) {
//             // Typical action to be performed when the document is ready:
//             const data = JSON.parse(request.responseText)
//             const dataString = JSON.stringify(data)
//             callback(undefined, data);
//             callback(undefined, dataString);
//         }
//         if (this.readyState === 4 && request.status !== 200) {
//             callback('Something wrongs', undefined);
//         }
//     };
//     request.open("GET", "data.json", true); 
//     request.send();
// }
// getTodos(callback);

//////////Promise

// const promiseExp = () => {
//     return new Promise((resolve, reject) => {
//         var request = new XMLHttpRequest();
//         request.open("GET", "data.json", true);
//         request.send();
//         request.onreadystatechange = function () {
//             if (this.readyState === 4 && request.status === 200) {
//                 resolve(request.responseText)
//             }
//             if (this.readyState === 4 && request.status !== 200) {
//                 reject("Error!")
//             }
//         };
        
//     })
// }

// promiseExp().then(data1 => {
//     console.log(`"data 1: ${data1}"`)

//     promiseExp().then(data2 =>{
//         console.log(`"data 2: ${data2}"`)

//     })
// }).catch(error =>{
//     console.log("ERROR")
// })

//////////Chaining promise

// const promiseExp = () => {
//         return new Promise((resolve, reject) => {
//             var request = new XMLHttpRequest();
//             request.open("GET", "data.json", true);
//             request.send();
//             request.onreadystatechange = function () {
//                 if (this.readyState === 4 && request.status === 200) {
//                     resolve(request.responseText)
//                 }
//                 if (this.readyState === 4 && request.status !== 200) {
//                     reject("Error!")
//                 }
//             };
            
//         })
//     }
    
//     promiseExp().then(data1 => {
//         console.log(`"data 1: ${data1}"`)
//         //*
//         return promiseExp()

//     }).then(data2 =>{
//         console.log(`data 2: ${data2}`)
//         return promiseExp()
//     }).then(data3 =>{
//         console.log(`data 3: ${data3}`)

//     })
    
//     .catch(error =>{
//         console.log("ERROR")
//     })

//////////Fetch api

fetch(`data.json`).then(response => {
    return response.json() //promise
}).then(data =>{
    console.log(data)
})