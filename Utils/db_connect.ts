import mongoose from "mongoose";
import app from "../app";
const mongoDBUrl = `mongodb+srv://web2:8HdqwXJGb4ZKIcJ1@chkdbcluster.qsaqded.mongodb.net/?retryWrites=true&w=majority`;
console.log('ami shahjalal');

export async function db_connect() {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    await mongoose.connect(
      "mongodb+srv://web2:8HdqwXJGb4ZKIcJ1@chkdbcluster.qsaqded.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`🛢 Database connection successful`);

    app.listen(3000, () => {
      console.log(`Server is  listening on port 3000`);
    });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}

 