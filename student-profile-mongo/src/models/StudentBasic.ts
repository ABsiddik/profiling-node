import mongoose, { Schema, Document } from "mongoose";

export interface IStudentBasic extends Document {
  id: string;
  name: string;
  roll: number;
  className: string;
  contact: string;
}

const StudentBasicSchema = new Schema<IStudentBasic>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    roll: { type: Number, required: true },
    className: { type: String, required: true },
    contact: { type: String, required: true},
  },
  { timestamps: true }
);

export const StudentBasic = mongoose.model<IStudentBasic>(
  "StudentBasic",
  StudentBasicSchema
);
