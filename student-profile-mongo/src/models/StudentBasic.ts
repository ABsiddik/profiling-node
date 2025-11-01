import mongoose, { Schema, Document } from "mongoose";
import { IStudentDetails } from "./StudentDetails.js";

export interface IStudentBasic extends Document {
  id: string;
  name: string;
  roll: number;
  className: string;
  contact: string;
  details?: mongoose.Types.ObjectId | IStudentDetails;
}

const StudentBasicSchema = new Schema<IStudentBasic>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    roll: { type: Number, required: true },
    className: { type: String, required: true },
    contact: { type: String, required: true},
    // One-to-one relationship (reference)
    details: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudentDetails",
      default: null
    }
  },
  { timestamps: true }
);

export const StudentBasic = mongoose.model<IStudentBasic>(
  "StudentBasic",
  StudentBasicSchema
);
