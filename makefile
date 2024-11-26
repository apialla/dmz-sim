init:
	
	@if [ -z "$$(docker network ls --filter name=external_network -q)" ]; then \
		echo "Creating Docker network 'external_network'..."; \
		docker network create external_network; \
	else \
		echo "Docker network 'external_network' already exists."; \
	fi
	
	@if [ -z "$$(docker network ls --filter name=internal_network -q)" ]; then \
		echo "Creating Docker network 'internal_network'..."; \
		docker network create internal_network; \
	else \
		echo "Docker network 'internal_network' already exists."; \
	fi

	docker compose -f apigw/compose.yaml up -d
	docker compose -f extranet-dmz-app/compose.yaml up -d
	docker compose -f intranet-dmz-app/compose.yaml up -d
