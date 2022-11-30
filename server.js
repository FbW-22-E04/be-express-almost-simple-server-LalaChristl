import express from 'express';

const app = express();

const server = app.listen(3001, () => {
   console.log("The server is listening... 🐒") 
});

// ("----TASK 2----");

app.get('/hello', (request, response) => {
    console.log("hello from hello");
    response.send("hello from hello")
});

// ("----TASK 4----");

const event = new Date();
app.get('/time', (request, response) => {
    console.log(event.toISOString());
    response.send(event)
});

// ("----TASK 5----");

let randomNumber = Math.random().toString()

app.get('/random', (request, response) => {
    console.log(randomNumber);
    response.send(randomNumber)
});

// ("----TASK 6----");


// let randomNumber = Math.random().toString()

// app.get('/isNumber/:id', (request, response) => {
//     const { id }= request.params;
//     // console.log('hello from isNumber', request.params.id)
//     // response.send({id})
//     if (isNaN(Number(id))) {
//         response.send("This is not a number")
//     } else {
//         response.send("This is a number")
//     }
// });

app.get('/isNumber/:value', (request, response) => {
    const { value } = request.params;

    if (isNaN(Number(value))) {
        response.send("This is not a number")
    } else {
        response.send("This is a number")
    }
});
