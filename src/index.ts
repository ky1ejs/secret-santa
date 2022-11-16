import { participants } from "./participants";
import { sendEmail } from "./email";
import { pick } from "./pick";
import { validateResult } from "./util";

let result = new Map<string, string>();

while (validateResult(participants, result) === false) {
  result = pick(participants); // BUG: may run forever if exclusions make picking impossible
}

result.forEach((giver, receiver) => {
  const email = participants.get(giver)!.email;
  const subject = "You're gifting for...";
  const message = `${receiver}!`;
  sendEmail(email, subject, message);
});
