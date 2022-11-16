import { ParticipantInfo } from "./participants";
import { getRandomInt, removeElement } from "./util";

export function pick(
  participants: Map<string, ParticipantInfo>
): Map<string, string> {
  const remainingGivers = Array.from(participants.keys());
  const remainingReceivers = Array.from(participants.keys());

  function findGiver(): string {
    const giverIndex = getRandomInt(remainingGivers.length - 1);
    const giver = remainingGivers[giverIndex];
    remainingGivers.splice(giverIndex, 1);
    return giver;
  }

  function findReceiver(giver: string): string {
    const options: Array<string> = Object.assign([], remainingReceivers);
    removeElement(options, giver);
    participants
      .get(giver)!
      .exclusions.forEach((e) => removeElement(options, e));

    const receiverIndex = getRandomInt(options.length - 1);
    const receiver = options[receiverIndex];
    removeElement(remainingReceivers, receiver);
    return receiver;
  }

  const result = new Map<string, string>();
  while (remainingGivers.length > 0) {
    const giver = findGiver();
    const receiver = findReceiver(giver);

    result.set(giver, receiver);
  }
  return result;
}
