const { parameters } = require("./components/parameters");
const codeExtract = require("./components/code");


module.exports = async (context) => {
    try {
      const { changed_files } = context.payload.pull_request;
      if (changed_files > 1) {
        throw new Error("Please try on a single file");
      }
      
      const response = parameters(context.payload.pull_request.body);

      if (response.status == 400) {
        throw new Error(response.message);
      }
      const code = await codeExtract(context);
      console.log(code)

      return {
        status:200,
        message:"Success",
        code:code,
        language:response.language,
        input:response.input,
      }
  
    } catch (error){
      console.log(error.message)
      return {
        status:400,
        message:error.message,
        code:null
      }
    }
  };