const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

const DATA_FILE = path.jion(__dirname, 'users.json');
