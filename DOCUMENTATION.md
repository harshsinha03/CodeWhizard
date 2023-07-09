# Documentation

## Installation

To get started with the GitHub application, follow these steps:

1. Clone the repository from GitHub using the following command:

    ```bash
    git clone https://github.com/your/repository.git
    ```

2. Change into the project directory:

    ```bash
    cd repository
    ```
## Installation

To get started with the Probot application, follow these steps:

1. Install Node.js: Ensure that you have Node.js installed on your system. You can download it from the official Node.js website at [nodejs.org](https://nodejs.org) and follow the installation instructions for your operating system.

2. Create a Probot Application: Open your terminal or command prompt and run the following command to create a new Probot application:

Replace `<app-name>` with the desired name of your Probot application.

3. Configure the Application: The `npx create-probot-app` command will guide you through a configuration wizard. Enter the required information, such as your GitHub App ID and Webhook Secret, to configure the application properly.

4. Install Dependencies: Navigate to the project directory and run the following command to install the dependencies:

    ```bash
    npm install
    ```
5. Set Up Environment Variables: After you run the probot app the first time you will be directed to a link where you will authorize your app with permissions and your env key will automatically get filled.

## Configuration

1. Create a GitHub App on GitHub Developer Settings with the desired name and configuration.

2. Configure the GitHub App permissions based on the requirements of the task. Recommended permissions include:
   - Read & Write access to pull requests and repository contents
   - Comment on pull requests

3. Set the following environment variables:
   - `APP_ID`: The ID of your GitHub App
   - `WEBHOOK_SECRET`: The secret for securing the webhook communication
   - `GITHUB_TOKEN`: The GitHub token associated with the GitHub App

## Webhooks

Create a webhook on your GitHub repository's settings page.

- Set the webhook URL to the publicly accessible endpoint of the GitHub application.

- Set the webhook secret to the value of the `WEBHOOK_SECRET` environment variable.

- Select the events that the webhook should listen to, such as `pull_request.opened`, `pull_request.synchronize`, and `pull_request.edited`.

## Permissions

The GitHub App requires the following permissions to function properly:

- Repository Contents: Read access to retrieve the contents of the pull request files.
- Pull Requests: Read access to get information about pull requests and post comments.
- Issues: Read and Write access to post comments on pull requests.

Ensure that the GitHub App has been installed on the desired repositories and has the necessary permissions to access and interact with pull requests.

## Usage

1. Create a pull request on the repository with the desired code to execute.

2. Include the command `/execute` in the pull request title or body.

3. Ensure that the pull request contains only one changed file. The application currently supports executing code from a single file per pull request.

4. Wait for the GitHub application to process the pull request and execute the code.

5. Once the code execution is complete, the application will generate a comment on the pull request with the code output or appropriate error messages.
