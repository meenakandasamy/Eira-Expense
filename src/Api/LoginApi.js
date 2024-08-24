import axios from "axios";

export const PostLogin = async (obj) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_PATH}${process.env.REACT_APP_LOGIN_API}`,
    obj
  );
  return response;
};
export const fetchViewticket = async (Id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_PATH}${process.env.REACT_APP_TICKET_VIEWTICKET_TABLE}/${Id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};