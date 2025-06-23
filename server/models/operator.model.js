import { Schema, model, Types } from "mongoose";

const operatorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Operator name is required"],
      trim: true
    },
    opid: {
      type: String,
      required: [true, "Operator ID is required"],
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    contact: {
      type: String,
      required: [true, "Contact number is required"],
      trim: true
    },
    office: {
      type: String,
      required: [true, "Office address is required"],
      trim: true
    },
    fleet: [{
      type: Types.ObjectId,
      ref: "bus"
    }],
    routes: [{
      type: Types.ObjectId,
      ref: "route"
    }],
    isActive: {
      type: Boolean,
      default: true
    },
    allBookings : [{type : Schema.Types.ObjectId, ref : 'bookings', unique : true}],
    schedules : [
      {type : Schema.Types.ObjectId, ref : 'schedules'}
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// Index for performance

const Operator = model("operator", operatorSchema);

export default Operator;

// Dummy operators for testing or seeding
const dummyOperators = [
  {
    name: "Golden Express",
    opid: "OP001",
    email: "golden@express.com",
    contact: "9876543210",
    office: "123 Main St, Central City",
    isActive: true
  },
  {
    name: "Silver Travels",
    opid: "OP002",
    email: "info@silvertravels.com",
    contact: "8765432109",
    office: "456 Park Avenue, Metro District",
    isActive: true
  },
  {
    name: "Royal Voyagers",
    opid: "OP003",
    email: "support@royalvoyagers.com",
    contact: "7654321098",
    office: "789 Business Bay, Downtown",
    isActive: true
  },
  {
    name: "Comfort Rides",
    opid: "OP004",
    email: "bookings@comfortrides.com",
    contact: "6543210987",
    office: "321 Transit Center, North Zone",
    isActive: false
  },
  {
    name: "Luxury Liners",
    opid: "OP005",
    email: "contact@luxuryliners.com",
    contact: "5432109876",
    office: "555 Premium Plaza, South District",
    isActive: true
  }
];  

// Export for seeding or testing purposes
export { dummyOperators };