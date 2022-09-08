const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./config');
const loaders = require('./loaders');
const {TruckRoutes, UserRoutes, ReportRoutes, TourRoutes, DestinationRoutes} = require('./routes');

config();
loaders();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        exposedHeaders: ['Content-Type', 'Authorization', 'Accept']
    }
));

app.listen(process.env.APP_PORT, () => {
  console.log('Server is running on port 4000');

  app.use('/trucks', TruckRoutes);
  app.use('/users', UserRoutes);
  app.use('/reports', ReportRoutes);
  app.use('/tours', TourRoutes);
  app.use('/destinations', DestinationRoutes);
});