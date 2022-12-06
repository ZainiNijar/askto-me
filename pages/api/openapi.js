import { Configuration, OpenAIApi } from "openai";

export default function openapi(req, res) {

    const OPENAI_API_KEY = "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"

    const configuration = new Configuration({
        apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const getAnswers = async () => {
        await openai.createCompletion({
            model: "text-davinci-003",
            prompt: req.query.questions,
            temperature: 0,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0.2,
            presence_penalty: 0,
        }).then((response) => {
            return res.status(200).json({ data: response.data })
        });
    }

    getAnswers()

}