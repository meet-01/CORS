const fetch = require("node-fetch");

const API_ENDPOINT =
  "https://prr7fx7sh0.execute-api.ap-south-1.amazonaws.com/dev/pten/funds";

exports.handler = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
