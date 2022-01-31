/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51K92PbFjq4578bewC6QgIFtYdiTvLw0lFOhP3bTGYCC3wlfPQ3I9sQU2sX8uC5Nv8eeZZQM2LdVfGH3QXmSoZEje00uJaMPdmD");

// - App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());// alow to send data and pass in json format

// API routes
app.get("/", (request, response) => response.status(200).send("hello haris world"));

app.post("/payments/create", async(request, response) => {
    const total = request.query.total;
    console.log('Payment Recieved for this amount',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: "usd",
    });
      // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});
// Listen command
exports.api = functions.https.onRequest(app);

// 
// http://localhost:5001/e-cart-44849/us-central1/api

