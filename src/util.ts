import { ParticipantInfo } from "./participants";

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function removeElement<T>(array: Array<T>, key: T) {
  const index = array.indexOf(key, 0);
  if (index > -1) {
    array.splice(index, 1);
  }
}

export function validateResult(
  participants: Map<string, ParticipantInfo>,
  result: Map<string, string>
): boolean {
  const receiversLength = Array.from(result.values()).filter(
    (i) => i !== null && i !== undefined
  ).length;
  const participantsCount = Array.from(participants.entries()).length;
  return receiversLength === participantsCount;
}
