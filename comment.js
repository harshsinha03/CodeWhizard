const github = require('@actions/github');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const octokit = github.getOctokit(GITHUB_TOKEN);


const comment = async(context, data) => {
  
      const errorMessage = `
      An unknown error occurred.
      
      Please try again later.And make sure the number of files that are changed is 1
      
      Please make sure the body of the pull request follows the correct format:
      
      Example:

      Language: py (required and allowed languages are: java, py, cpp, c, go, cs, js)
      Input:  (optional can be left black like how it is done in this example.)
      `;

  
    const commentBody = data.message === 'Success' ? data.output : errorMessage;

    await octokit.rest.issues.createComment({
      owner: context.repo().owner,
      repo: context.repo().repo,
      issue_number: context.payload.pull_request.number,
      body: commentBody
    });
  }
  

module.exports=comment;