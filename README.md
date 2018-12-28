### Build
run `./Dockerfile_build.sh` to build an application. 

### Run localy
run `docker run -tid -p 8443:443  zil_fe:latest` 

### access application
curl -k https://localhost:8443

### under the hood of build script

Major steps for building:
- make a local creanup
	remove any files that may have left after the previous build process

- create a dockerfile for application to run
	The dockerfile is based on nginx:stable container. There are some programs except nginx: 
		* dnsmasq - to point a resolver option in nginx config to a localhost address.
		* supervisord - to run nginx and dnsmasq 
	Nginx config:
		* use a self signed certificate
		* use resolver option for backend dns name resolve
		* backend url is hardcoded and is pointing to a loadbalancer of backend application

- run the docker build command to build an application
	the build container is base on node:10.12-alpine. It maps the current folder inside a build container. After the build artifact appear in the current folder.

- push the container in ECR
	use `docker push` to push a new version of a container into ECR

- optionally use ecs-deploy to update the ECR service and task to run new version of application

# Notes for build
The application is run in AWS ECS service. You should adopt the script to fit your AWS account.



