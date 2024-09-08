import express from 'express';
import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

let result;

const getQuote = async (req, res) => {
    try{

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        const prompt = "Give me motivational quote";
        const result = await model.generateContent(prompt);

        const quote = result.response.text();

        res.status(200).json({
            "quote": quote
        })

    }catch(e){
        console.log(e);
    }
}

// console.log(get.response.text());

app.get('/', (req, res) => {
    res.send("Hello World! from Quote & IP");
});

app.get('/quote', getQuote)

app.listen(process.env.PORT, () => {
    console.log(`IP and Greet listening on port ${process.env.PORT}`);
});

