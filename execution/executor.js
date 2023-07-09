
const axios = require("axios");
const qs = require('qs');

module.exports = async (data) => {
  const datas = qs.stringify({
        'code': data.code,
        'language':data.language,
        'input':data.input
      });
  console.log(datas)
  const options = {
    method: "POST",
    url: 'https://api.codex.jaagrav.in',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: datas
  };
  console.log("options")
  try {
    const response = await axios(options);
    console.log("t1")
    const output =  response.data.output;
    console.log(output)
    return output
  } catch (error) {
    return {
      status:error.status,
      Message:error.message
    };
  }
};