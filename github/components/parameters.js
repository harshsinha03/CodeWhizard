module.exports = {
    parameters: (body) => {
      const regex = /Language:\s*(.*?)\s*Input:\s*([\s\S]+)/s;
  
      const matches = body.match(regex);
      if (!matches) {
        return {
          status: 400,
          message: "language and input not present",
        };
      }
  
      const [, language, Input] = matches;
      const supportedLanguages = ["java", "py", "cpp", "c", "go", "cs", "js"];
  
      if (!supportedLanguages.includes(language)) {
        return {
          status: 400,
          message: "Language not found. Please choose a valid programming language.The code should be in following languages-java, py, cpp, c, go, cs, js",
        };
      }
  
      return {
        status: 200,
        message: "Success",
        language,
        input: Input || "",
      };
    },
  };
  