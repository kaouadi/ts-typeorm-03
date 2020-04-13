# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Drop all tables `npx ts-node ./node_modules/.bin/typeorm schema:drop`
4. Create database `npx ts-node ./node_modules/.bin/typeorm migration:run`
3. Run `npm start` command
