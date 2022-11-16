import axios from "axios";
import { stringify } from "qs";

const API_KEY = ""; // TODO
const DOMAIN = ""; // TODO

export function sendEmail(recipient: string, subject: string, message: string) {
  axios
    .post(
      `https://api.mailgun.net/v3/${DOMAIN}/messages`,
      stringify({
        from: `Santa <santa@${DOMAIN}>`,
        to: recipient,
        subject: subject,
        text: message,
      }),
      {
        auth: {
          username: "api",
          password: API_KEY,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then(() => console.log(`email sent to: ${recipient}`));
}
