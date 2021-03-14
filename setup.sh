git clone git@github.com:huchenme/github-trending-api.git
cd github-trending-api && docker build -t github-trending-api:latest .
cd .. && rm -rf github-trending-api
docker build -t github-trending-api-frontend:latest .
docker-compose up
