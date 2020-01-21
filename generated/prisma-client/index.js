"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "CategoryType",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "Customer",
    embedded: false
  },
  {
    name: "Staff",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "PaymentMethod",
    embedded: false
  },
  {
    name: "StatusOrder",
    embedded: false
  },
  {
    name: "Coupon",
    embedded: false
  },
  {
    name: "StatusCoupon",
    embedded: false
  },
  {
    name: "Site",
    embedded: false
  },
  {
    name: "StatusSite",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
