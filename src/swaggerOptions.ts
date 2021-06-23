import { Options } from "express-jsdoc-swagger";

const options: Options = {
  info: {
    title: "Surfcamp API",
    description: "REST API of the Surfcamp project by Wild Code School",
    version: "1.0.0",
  },
  baseDir: __dirname,
  filesPattern: ["./api/**/*.ts", "./api/**/*.js"],
  exposeSwaggerUI: true,
  swaggerUIPath: "/api-docs",
};

export default options;
