import mongoose, { Schema, Document } from "mongoose";

export interface IStudentDetails extends Document {
  religion: string;
  sex: string;
  dob: number;
  favorites: string;
  hobby: string;
}

const studentDetailsSchema = new mongoose.Schema({
  religion: String,
  sex: String,
  dob: Date,
  favorites: String,
  hobby: String
});


export const StudentDetails = mongoose.model<IStudentDetails>("StudentDetails", studentDetailsSchema);