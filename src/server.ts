import * as dotenv from "dotenv";
import { Twilio } from "twilio";

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const myNumber = process.env.HEIDI_NUMBER;

if (accountSid && authToken && twilioNumber && myNumber) {
  const client = new Twilio(accountSid, authToken);

  client.messages
    .create({
      from: twilioNumber,
      to: myNumber,
      body: "This is Zach and I'm texing you from my compooper. 👻",
    })
    .then((message) => console.log(message.sid));
}
