This project is built to be a playground for docker network when you need different networks simulating as different DMZ in an organization.

Project's network designed to have 2 different zones called intranet and extranet. Applications which reside within intranet zone cannot communicate with applications reside in extranet zone unless it goes through the API Gateway. `/health` endpoint is just to ensure server is up and running while testing.

Project assets:
- file `.drawio` demoenstrate high level design.
- file `.http` pre-defined http requests for testing.
- `intranet-dmz-app` directory has a simple express server which has 2 apis. One communicates APIGW, and another one communicate extranet application directly which not allowed.
- `apigw` directory has a simple express server that acts as an API Gateway for intranet applications.
- `extranet-dmz-app` directory has a simple express server which has 1 single api which return static data just to ensure data is accessible.

To run the project:
```bash
git clone `project-repo`
make init
```