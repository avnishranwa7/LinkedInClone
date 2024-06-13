import { createSlice } from "@reduxjs/toolkit";

// local imports
import { User as UserType } from "../components/types";

export interface User {
  profile: UserType;
}

const initialState: User = {
  profile: {
    id: "user0",
    name: "Avnish Ranwa",
    bio: "Software Engineer | 3 ★ CodeChef",
    imageUri:
      "https://media.licdn.com/dms/image/C4E03AQF1cIAhhxanBQ/profile-displayphoto-shrink_200_200/0/1620457372637?e=2147483647&v=beta&t=aUEN6qzPDKTnTp3BNbnMo0hS8e-r8YVrIzu-onP0TAM",
    address: "Jaipur, Rajasthan, India",
    company: "Softsensor.ai",
  },
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = user.actions;

export default user.reducer;
