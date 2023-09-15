import { resolve } from 'path';

import { config as configDotenv } from 'dotenv';

configDotenv({
  path: resolve(__dirname, '../.env')
});
