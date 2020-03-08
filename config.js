const {
  conform,
  boolean: makeBoolean,
  string: makeString
} = require("dotenv-utils");

const dotenv = require("dotenv");
dotenv.load();

const schema = {
  API_BASE: makeString,
  API_KEY: makeString,
  NODE_ENV: makeString,
  PORT: makeString,
  PUBLIC_URL: makeString
};

const config = conform(process.env, schema);

module.exports = config;