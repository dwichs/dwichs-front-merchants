prod-build:
	docker build -f Dockerfile.production.front-merchants --tag dwichs-front-merchants .
prod-rm:
	docker service rm dwichs_front-merchants
prod-deploy:
	docker stack deploy -c docker-compose.production.yml dwichs
prod-ls:
	docker ps

