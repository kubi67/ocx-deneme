
rm -f -r ocx-crm-db-service/
docker container stop ocx-backend-db-service-container
docker container rm -f ocx-backend-db-service-container
git clone --branch dogukan-dev https://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@github.com/dogukanc760/ocx-crm-db-service.git
cd ocx-crm-db-service/
docker image rm ocx-image
docker build -t ocx-image .
docker run -d -p 80:3000 --name ocx-backend-db-service-container ocx-image