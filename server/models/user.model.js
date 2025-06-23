import { Schema, model } from "mongoose";

const userSchema = new Schema({
  user_name : String,
  email : String,
  password_hashed : String,
  bookings : [{type : Schema.Types.ObjectId, ref:'bookings'}],
  date_created : Date
},{collection : 'users'})

const User = model('User',userSchema);

export default User


export const dummyUser = [
  {
    user_name: "Rajesh Kumar",
    email: "rajesh.kumar@gmail.com",
    password_hashed: "hashed_password_1",
    bookings: ["booking1", "booking2"],
    date_created: new Date("2023-01-01")
  },
  {
    user_name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    password_hashed: "hashed_password_2",
    bookings: ["booking3"],
    date_created: new Date("2023-01-15")
  },
  {
    user_name: "Amit Patel",
    email: "amit.patel@gmail.com",
    password_hashed: "hashed_password_3",
    bookings: [],
    date_created: new Date("2023-02-01")
  },
  {
    user_name: "Sneha Verma",
    email: "sneha.verma@gmail.com",
    password_hashed: "hashed_password_4",
    bookings: ["booking4", "booking5", "booking6"],
    date_created: new Date("2023-02-15")
  },
  {
    user_name: "Vikram Singh",
    email: "vikram.singh@gmail.com",
    password_hashed: "hashed_password_5",
    bookings: ["booking7"],
    date_created: new Date("2023-03-01")
  },
  {
    user_name: "Neha Gupta",
    email: "neha.gupta@gmail.com",
    password_hashed: "hashed_password_6",
    bookings: ["booking8", "booking9"],
    date_created: new Date("2023-03-15")
  },
  {
    user_name: "Arjun Reddy",
    email: "arjun.reddy@gmail.com",
    password_hashed: "hashed_password_7",
    bookings: [],
    date_created: new Date("2023-04-01")
  },
  {
    user_name: "Ananya Desai",
    email: "ananya.desai@gmail.com",
    password_hashed: "hashed_password_8",
    bookings: ["booking10"],
    date_created: new Date("2023-04-15")
  },
  {
    user_name: "Rahul Mehta",
    email: "rahul.mehta@gmail.com",
    password_hashed: "hashed_password_9",
    bookings: ["booking11", "booking12"],
    date_created: new Date("2023-05-01")
  },
  {
    user_name: "Pooja Iyer",
    email: "pooja.iyer@gmail.com",
    password_hashed: "hashed_password_10",
    bookings: ["booking13"],
    date_created: new Date("2023-05-15")
  }
]