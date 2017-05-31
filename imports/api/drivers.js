import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Drivers = new Mongo.Collection('drivers');

Drivers.attachSchema(
  new SimpleSchema({
    name: {
      type: String,
      label: "Name",
      optional: false
    },
    vehicleColor: {
      type: String,
      label: "Vehicle Color",
      optional: false
    },
    vehicleModel: {
      type: String,
      label: "Vehicle Brand",
      optional: false
    },
    seats: {
      type: Number,
      label: "Seats Available",
      optional: false
    },
    riders: {
      type: Object,
      label: "Riders",
      optional: true
    },
    destination: {
      type: String,
      label: "Destination",
      optional: false
    }
  })
);
