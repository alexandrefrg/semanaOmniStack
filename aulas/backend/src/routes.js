const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Sessions routes
routes.post('/sessions', SessionController.create)

//Ongs routes
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Incidents routes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//Profiles routes
routes.get('/profile', ProfileController.index);

module.exports = routes