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
    vehicle: {
      type: String,
      label: "Vehicle",
      optional: false
    },
    seats: {
      type: Number,
      label: "Seats Available",
      optional: false
    }
  })
);
