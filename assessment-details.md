Technical Design-Interview Homework for a Senior Software Engineer

Overview

This assignment is designed to evaluate your ability to design and implement a full-stack real-time chat application. The task assesses your skills in front-end and back-end development, system design, state management, and handling real-time data updates.

Requirements

You will create a live chat application with the following functionalities:

Core Features

Frontend:
The UI should be a webpage and include at least a text input to set a username, a text area input to enter the message, a display of the message history where each message should at least contain the username of the user that sent the message, and the content of the message

Backend:
The frontend should be backed by a backend containing one or multiple services that deal with the given requirements like persisting the message history serving the message history when a user joins the channel pushing real-time updates to all users.

No multiple channels required. There is only one chat session that every user connects to when joining the chat.

Multiple users can join the session, for example by opening a new browser window/tab.
Message history should persist even after a user leaves the session.
Messages and user activity should update in real time without requiring a page reload.

Technical Expectations

Language: The frontend should be written in React and Typescript and the backend in Typescript or Go.

Testing: Add at least one useful test for a part of the code of your choice.

Error Handling & Logging: Implement proper error handling and logging both on the client and server side.

Containerization (Bonus): Optionally, containerize your solution using Docker for ease of deployment.

Deliverables

A public repository with the complete code and clear documentation, shared via a public Git provider (e.g., GitHub, GitLab, Bitbucket).
A README file including:
Instructions on how to run the application (it should run on Windows, Mac, and Linux).
A brief explanation of the architectural choices.
Possible improvements and trade-offs considered.
Any additional tests or deployment configurations (if applicable).

Evaluation Criteria

Code Quality & Readability: Clean, maintainable, and well-structured code.
Functionality & Requirements Fulfillment: The application meets all the specified requirements.
Scalability & Performance Considerations: Thoughtfulness in handling concurrency and large message volumes.
Error Handling & User Experience: Proper handling of errors and intuitive UI/UX.
