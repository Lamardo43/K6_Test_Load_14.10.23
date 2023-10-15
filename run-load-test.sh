docker-compose up -d influxdb grafana
docker-compose run --rm k6 run /scripts/postapi.js