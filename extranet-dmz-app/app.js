import express from "express"
const app = express()
app.use(express.json())

app.get('/health', async (req,res) => {
    return res.send("healthy")
});

app.get('/api/v1/get-users', async (req, res) => {
    return res.status(200).send({result: ['bassam', 'adnan']})
})

app.listen('21999', () => {console.log("running...")})