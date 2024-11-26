import express from "express"
const app = express()
app.use(express.json())

app.get('/health', async (req,res) => {
    return res.send("healthy")
});

app.get('/apigw/api/v1/exapp/get-users', async (req, res) => {
    /// this api should work as apigw within the same network

    /// in this request we've simulated an api going from a source to a destination
    /// in different network going through an APIGW.

    /// APIGW is the only allowed channel that can communicate with extranet DMZ network
    const response = await fetch('http://apigw:9999/api/v1/get-request');
    const json = await response.json();
    return res.status(response.status).send(json)
})

app.get('/api/v1/not-allowed', async (req, res) => {
    /// this api shouldn't work as [app.external.dmz] not within the same network
    try {
        const response = await fetch('http://app.external.dmz:21999/api/v1/get-users');
        const json = await response.json()
        return res.status(response.status).send(json);
    } catch (error) {
        return res.status(500).send()
    }
})

app.listen('1111', () => {console.log("running...")})