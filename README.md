# Web calculator #

Typescript + express

## Manual build ##

```
docker build -t ts_calc:local . -f Dockerfile
docker run -p 8080:3000 -d ts_calc:local
```

`open in browser http://localhost:8080`

## Own kubernetes cluster ##

`kubectl apply -f install.yaml`

## Exist exaple ##

`open in browser https://calc.paradox-server.ru`

## Etc ##

- [x] Typescript
- [x] Express
- [x] Docker
- [x] Kubernetes
