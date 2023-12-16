import dotenv from "dotenv-safe";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { oraPromise } from "ora"; import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express().use(cors()).use(bodyParser.json());


app.post("/", async (req, res) => {
  try {
    // console.log(req.body.message)
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [
        {
          "role": "system",
          "content": 'You are to act as a classifier. Specifically, you are looking to evaluate pages for the existence of a checkout form and the elements inside of them. To be even more specific, you will be targetting elements that denote a first name, last name, credit card number, cvv, address, or expiration input field. You will be provided an array of objects in the format {TAG, NAME, ID, TYPE}, these are DOM objects and your goal is, for each of these objects, to classify whether or not they correspond to one of the aformentioned fields. To make this more clear, you will provide me an answer in the form of an array and label elements as a first_name, last_name, creditcard, cvv, expiration, address_field, or none. You will additionally express a percentage of confidence in decimal form. An example single output would be [{"id": ID, "classname": NAME, "type": "first_name", "certainty": .5}]'
        },
        {
          "role": "user",
          "content": req.body.message
        }
      ],
      temperature: 0.7,
      max_tokens: 4000,
      top_p: 1,
    });
    console.log(response.choices[0].message.content)
    res.json(response.choices[0].message.content)
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

async function start() {
  await oraPromise(
    new Promise((resolve) => app.listen(3000, () => resolve())),
    {
      text: `You may now use the extension`,
    }
  );
}


start();
