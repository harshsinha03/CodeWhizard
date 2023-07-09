
# CodeWhizard

Click Here for Documentaion: [docs](/DOCUMENTATION.md)
## Summary

Project Overview
----------------

The goal of this project was to create a GitHub application using Probot and integrate it with CodeX-API to execute code in response to pull requests. The application would validate the pull request, extract code, execute it, and generate comments with the output or appropriate error messages.

Project Details
---------------

Environment Setup
-----------------
The project started by setting up the necessary dependencies, including Probot, axios, and qs. These libraries provided the required functionality for GitHub integration and making API requests.

GitHub App Integration
----------------------
A GitHub App was created and configured with the necessary permissions. This allowed the Probot application to interact with GitHub repositories and listen to specific events, such as `pull_request`.

Pull Request Event Handling
---------------------------
Event handlers were implemented for relevant pull request events, including `pull_request.opened`, `pull_request.synchronize`, and `pull_request.edited`. These event handlers processed the pull requests and triggered code execution based on specific conditions.

Pull Request Validation
-----------------------
Validation checks were added to ensure that the pull request met specific criteria before executing the code. This included verifying the presence of the "/execute" command in the pull request title or body. Additionally, it was ensured that the number of changed files in the pull request was limited to one to handle single-file execution.

Code Extraction
---------------
Logic was developed to extract the code from the pull request. The GitHub REST API was used to retrieve the content of the file associated with the pull request, ensuring that only a single file was considered for code execution.

Code Execution
--------------
The CodeX-API was integrated for executing the extracted code. Using the axios library, a POST request was made to the CodeX-API endpoint, passing the code, language, and input parameters. The response from the API provided the output of the code execution.

Comment Generation
------------------
A module was implemented to generate comments based on the code execution results. The Octokit library was used to create a comment on the pull request using the GitHub REST API. The comment included the code output or appropriate error messages.

Error Handling
--------------
Error handling mechanisms were incorporated to handle exceptions or errors that might occur during code execution or comment generation. Clear error messages were provided to users in case of failures, ensuring effective communication and troubleshooting.

Deployment and Testing
----------------------
The GitHub application was deployed, and comprehensive testing was performed to validate its functionality. Pull requests with the required format were created and tested to ensure that the application correctly executed the code and generated comments with the expected output.

Additional Notes
----------------
The current implementation supports handling only single-file changes in pull requests. However, the application can be enhanced in the future to handle multi-file changes and accommodate more complex scenarios.

Technologies Used
-----------------
- Probot: A framework for building GitHub Apps with Node.js
- GitHub REST API (via Octokit): Used for interacting with GitHub repositories and creating comments
- CodeX-API: Integrated for code execution
- Axios: A library for making HTTP requests
- qs: A library for serializing and parsing URL query strings
- diff: A javascript text differencing implementation.

The project followed best practices to ensure secure and efficient code execution within the GitHub environment.

Overall, the GitHub application successfully executes code based on specific commands in pull requests and provides feedback through comments. It can be further customized and expanded based on specific requirements and use cases.

## Contributing

If you have suggestions for how CodeWhizard could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 harsh
=======
# CodeWhizard
A Github App that gives the output of the code to users upon creating pull requests
>>>>>>> origin/master
