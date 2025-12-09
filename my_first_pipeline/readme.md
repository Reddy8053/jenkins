This project demonstrates a basic Jenkins Pipeline that runs inside a Docker container using the agent docker directive. 
Jenkins pulls the node:18 Docker image, starts a temporary container, and executes the pipeline steps inside it. 
The pipeline contains one stage, which simply prints a message to show that the build is running inside Docker. 
This setup ensures clean, isolated, and consistent build environments without installing Node.js directly on the Jenkins server.
