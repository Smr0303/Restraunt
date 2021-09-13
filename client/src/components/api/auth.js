import axios from "axios";

export const Signup = async (data) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const res = await axios.post(
    "http://localhost:5000/auth/Signup",
    data,
    config
  );
  return res;
};
export const Signin = async (data) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const res = await axios.post(
    "http://localhost:5000/auth/Signin",
    JSON.stringify(data),
    config
  );
  return res;
};
