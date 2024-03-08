import axios from "../baseUrl/axios";


export const getDashboardDetail = async (token, setUserdetail, setError) => {
  try {
    const response = await axios.get("https://beelsfinance.com/api/api/v1/ambassador/dashboard", {
      headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
    });

    if (response.data.status !== "Success") {
      console.log(response.data.message)
      setError(response.data.message);
    }
    setUserdetail(response.data?.data);

  } catch (err) {
    if (!err?.response) {
      setError("No Response from Server");
    } else {
      console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  }
};

export const getPersonalDetail = async (token, setUserdetail, setError, email) => {
  try {
    const response = await axios.get(`https://beelsfinance.com/api/api/v1/ambassador/details/${email}`, {
      headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
    });

    if (response.data.status !== "Success") {
      console.log(response.data.message)
      setError(response.data.message);
    }
    setUserdetail(response.data?.data);

  } catch (err) {
    if (!err?.response) {
      setError("No Response from Server");
    } else {
      console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  }
};