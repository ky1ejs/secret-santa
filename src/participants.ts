export interface ParticipantInfo {
  email: string;
  exclusions: string[];
}

export const participants = new Map<string, ParticipantInfo>([
  [
    "James",
    {
      email: "james@gifts.com",
      exclusions: ["Roger"],
    },
  ],
  [
    "Roger",
    {
      email: "roger@gifts.com",
      exclusions: [],
    },
  ],
  [
    "Brenda",
    {
      email: "brenda@gifts.com",
      exclusions: [],
    },
  ],
]);
