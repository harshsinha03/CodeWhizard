const github=require('./github/index');
const executor=require('./execution/executor');
const comment=require('./comment')

module.exports = (app) => {

  app.log.info("Yay, the app was loaded!");
  
  app.on(
    ["pull_request.opened", "pull_request.synchronize", "pull_request.edited"],
    async (context) => {

      const {pull_request:data}=context.payload;

      const {title,body}=data;
      console.log(title)
      console.log(body)
      let titlePR = title.toLowerCase();
      let bodyPR = body.toLowerCase();
      
      if(bodyPR.search("/execute")==null && titlePR.search("/execute")==-1){
        app.log.info("Execute command is not present");
        return;
      }
      try {
        console.log("trying")
        const res=await github(context);
        if(res.status==400){
          throw new Error(res.message);
        }
        console.log(res.code);

        const options={
          code:res.code,
          language:res.language,
          input:res.input=='null'?null:res.input,
        }
        console.log(options)
        const output=await executor(options);
        console.log("execution worked")
        if(output.status==400){
          throw new Error(output.message);
        }
        const body={
          output:output,
          message:"Success"
        }
        console.log(body)
        await comment(context,body);
        console.log("comment ")
        
      } catch (error) {
        await comment(context,error.message);
      }
    }
  );
};