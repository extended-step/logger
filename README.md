# Extended Step Logger

Javascript (NodeJS) package to take logs.

## Install Package

```bash
npm i @extended-step/logger
```

## Using Package in Project

```javascript
const Logger = require("@extended-step/logger");

Logger.log({ msg: "something to log" }); // Adds to log/logs.txt in JSON format
Logger.error({ msg: "something to log" }); // Adds to log/errors.txt in JSON format

const logs = await Logger.getLogs(); // Returns array of logs in log/logs.txt
const errors = await Logger.getErrors(); // Returns array of errors in log/errors.txt
```
