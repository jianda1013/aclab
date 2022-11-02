DC=docker-compose
API=aclab_server

start:
	$(DC) up -d --build

clean:
	$(DC) down

re: clean start

logs:
	$(DC) logs -f $(API)

exec:
	$(DC) exec -it $(API) sh

db/new:
	$(DC) exec -it $(API) npx knex migrate:make $(name)
	
db/latest:
	$(DC) exec -it $(API) npx knex migrate:latest

db/rollback:
	$(DC) exec -it $(API) npx knex migrate:rollback

prune:
	docker system prune -f && \
	docker volume prune -f && \
	docker image prune -f