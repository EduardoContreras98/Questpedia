const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) =>{
  res.json({
    'success': true,
    'statuscode': 200,
    'message': 'Hola soy un endpoint'
  })
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Estoy en el puerto ' + port);
});
