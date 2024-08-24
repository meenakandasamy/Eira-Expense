import axios from "axios";

export const PostLogin = async (obj) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_PATH}${process.env.REACT_APP_LOGIN_API}`,
    obj
  );
  return response;
};
