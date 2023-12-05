const PORT = parseInt(`${process.env.APP_PORT || 3000}`);
 
import app from './app';
 
app.listen(PORT);