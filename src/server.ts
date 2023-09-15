import './config';
import app from './app';

const port = process.env.PORT || 3033;
const baseUrl = process.env.BASE_URL || 'http://localhost';

app.listen(port, () => {
  console.log(`*** Server started on  ${baseUrl}:${port} ***`);
});
