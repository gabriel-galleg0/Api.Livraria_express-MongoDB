import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gallego:123@gallego.8bwxphd.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;