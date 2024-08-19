# Final Fantasy API

Rest server utilizando principios del **Domain-Driven Design (DDD)** y aplicando el patrón **Repository**

## Uso de TypeScript y NodeJS

Para esta aplicación, en su ambiente de desarrollo, se utiliza **ts-node**. A continuación la configuración del ambiente:

1. Instalar TypeScript y demás dependencias
```
npm i -D typescript @types/node ts-node-dev rimraf
```
2. Inicializar el archivo de configuración de TypeScript
```
npx tsc --init --outDir dist/ --rootDir src
```

3. Crear scripts para dev, build y start ([Más sobre TS-Node-dev aquí](https://www.npmjs.com/package/ts-node-dev))
```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```
