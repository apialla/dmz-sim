import express from "express"
const app = express()
app.use(express.json())

app.get('/health', async (req,res) => {
    return res.send("healthy")
});

/// APIGW middlewares 
app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'APIGW');
    next();
});

/// acting as a gateway for all outbound connection
app.get('/api/v1/get-request', async (req, res) => {
    const response = await fetch('http://app.external.dmz:21999/api/v1/get-users');
    const json = await response.json();
    return res.status(response.status).send(json)
})

app.listen('9999', () => {console.log("running...")})