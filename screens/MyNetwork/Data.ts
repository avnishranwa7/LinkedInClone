export interface NetworkDataType {
  id: string;
  type: "location" | "recent activity" | "institute";
  typeValue?: string;
  users: Array<string>;
}

export const NetworkData: Array<NetworkDataType> = [
  {
    id: "1",
    type: "location",
    typeValue: "Greater Jaipur Area",
    users: ["user5", "user6", "user7", "user8"],
  },
  {
    id: "2",
    type: "recent activity",
    users: ["user9", "user15", "user16", "user17"],
  },
  {
    id: "3",
    type: "institute",
    typeValue: "JK Lakshmipat University, Jaipur",
    users: ["user11", "user12", "user13", "user14"],
  },
];
