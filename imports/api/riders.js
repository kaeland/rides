import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Riders = new Mongo.Collection('riders');

Riders.attachSchema(
  new SimpleSchema({
    name: {
      type: String,
      label: "Name",
      optional: false
    },
    phone: {
      type: String,
      label: "Phone Number",
      optional: false
    }
  })
);
