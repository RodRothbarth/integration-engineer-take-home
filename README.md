# Integration Engineer Test

We appreciate your interest in the Integration Engineer role at our company. This test helps us understand your skills in creating a Node.js backend API and a ReactJS frontend. You should finish the test within a few hours. Please read the instructions carefully.

## Task Overview:

Your task is to build a simple task management application. This template offers a basic setup for a React frontend using Vite, which connects to a Node/Express backend. Users should be able to view, create, update, and delete tasks.

There are different parts to this exercise:

1. Set up the backend and frontend, resolving any issues that may arise (some issues might not have been noticed by the original developer since 'it works locally').
2. Complete the endpoints for task creation and deletion.
3. Implement missing functions in the React frontend to interact with the new endpoints for task creation and deletion.
4. Develop a new endpoint in the Express app for updating tasks. Create a UI allowing users to update tasks and communicate with this new endpoint.
5. Update the CSS to improve the usability of the solution.

*Additional Information*

* Tasks should be stored temporarily in memory; permanent storage is not necessary.
* Prevent creating or updating tasks with empty titles or descriptions. Display an error if users attempt to submit an invalid task. (Your backend should handle this check and return an error.)
* No guidance is available from the previous developer on setting up the project on a new machine. You'll need to use the existing files to figure it out, considering possible mistakes.
* The backend is in JavaScript, while the frontend React code is in a .tsx file. Make sure your work is valid TypeScript.
* Enable CORS support in the API to permit cross-origin requests.
* The app's rudimentary styling by the previous developer can be improved for better user experience.
* BONUS: If you can optimize the React app's rendering for efficiency, feel free to make changes.

*Submission Guidelines*

* Fork this GitHub repository to your own GitHub account.
* Develop the backend and frontend using the provided directory structure.
* Edit this README below to explain how to run both the backend and frontend.
* Once done, share the link to your forked repository via email.

*Evaluation Criteria*

* Functionality: Does the app meet the requirements and work error-free?
* Code Quality: Is the code well-structured, modular, and easy to understand?
* API Design: Did you design the API in a RESTful way? Is error handling and validation effective?
* Frontend Design: Is the frontend user-friendly, responsive, and visually appealing?
* Git Usage: Are your commits meaningful and code changes well-tracked?
* Documentation: Are instructions provided for setting up the app on a new machine?

Use this opportunity to showcase your skills. If you see fit, add extra features or improvements.

Please note that this test aims to be completed in a few hours. However, quality work is more important than speed. If you have questions, feel free to email us.

Best wishes, and we're excited to review your submission!

Regards,
The Duda Solutions Engineering Team

## Add any instructions to get your submission running below this line.

### First look
The project was build in a single build, the division is set on frontend folder;
Remember to access the correct folder "frontend" to install the frontend dependencies;
For backand installation remember to be in the proper folder as well;
In the project core are the folders and files for the backend;
each part "front and back"end were organized for single purpose package. 

### Backend Prep
- Install the initial libraries for node_modules creation  bash```"npm install"```;
- Installing nodemon - bash```"npm i -D nodemon"``` gives you a better development experience;
- Generating a package script for starting the application properly bash```"start": "nodemon index.js"```;
- The organization for better control start in the "modules" folder;
- in the modules folder "routes" sets the endpoint routes end its HTTP;
- "controller" handles the primary entry point for the data;
- "service" handles the logic itself;
- cors is set for the internal "vite localhost port" make sure ir reflect yours.

### Frontend Prep
- Install the initial libraries for node_modules creation on "frontend" folder - bash```"npm install"```;
- Remember to create TSX file once the project is in typescript;
- Task data is handled by a context bash```"useTask"```;
- a toaster was implemented to show basic error handling;
- for handling forms was implemented bash```react-hook-form```;

