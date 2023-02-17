const router = require('express').Router();
const {getEdit} = require('../controller/openAIControllers.js');
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv').config()

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);


const axios = require('axios');

router.post('/', getEdit)

router.get("/",  async(req, res) => {

	  const {  prompt } = req.body;

const openai = new OpenAIApi(configuration);

async function runCompletion(){
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
  });
  res.render('chat',{  msg: completion.data.choices[0].text });
}

runCompletion();
}); 	




module.exports = router ;
