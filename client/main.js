import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import App from './../imports/ui/App';
import { Drivers } from '../imports/api/drivers';

Meteor.startup(() => {
  Tracker.autorun(() => {

    let drivers = Drivers.find({}).fetch();
    ReactDOM.render(<App drivers={drivers}/>, document.getElementById('app'));
  });
});
