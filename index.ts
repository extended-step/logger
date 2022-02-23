import fs = require("fs");
const fsPromises = fs.promises;

const Logger = {
  log: async (data: object) => {
    if (!fs.existsSync("logs/errors.txt"))
      await fsPromises.appendFile(
        "logs/logs.txt",
        `${JSON.stringify({ data: Date(), ...data })}\n`
      );
    else
      await fsPromises.writeFile(
        "logs/logs.txt",
        `${JSON.stringify({ data: Date(), ...data })}\n`
      );
  },
  error: async (data: object) => {
    if (fs.existsSync("logs/logs.txt"))
      await fsPromises.appendFile(
        "logs/errors.txt",
        `${JSON.stringify({ data: Date(), ...data })}\n`
      );
    else
      await fsPromises.writeFile(
        "logs/errors.txt",
        `${JSON.stringify({ data: Date(), ...data })}\n`
      );
  },
  getLogs: async () => {
    let logs: any;
    if (fs.existsSync("logs/logs.txt")) {
      logs = await fsPromises.readFile("logs/logs.txt", "utf-8");
      logs = await logs.split("\n");
    }
    return logs;
  },
  getErrors: async () => {
    let logs: any;
    if (fs.existsSync("logs/errors.txt")) {
      logs = await fsPromises.readFile("logs/errors.txt", "utf-8");
      logs = await logs.split("\n");
    }
    return logs;
  },
};

export default Logger;
