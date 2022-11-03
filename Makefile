DC=docker-compose
API=aclab_server
TSF=docker-compose.test.yml
TSAPI=test_server

start:
	$(DC) up -d --build

clean:
	$(DC) down

re: clean start

logs:
	$(DC) logs -f $(API)

exec:
	$(DC) exec -it $(API) sh

ps:
	$(DC) ps

test/up:
	$(DC) -f $(TSF) up -d --build

test/clean:
	$(DC) -f $(TSF) down

test/re: test/clean test/up

test/logs:
	$(DC) -f $(TSF) logs -f $(TSAPI)

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