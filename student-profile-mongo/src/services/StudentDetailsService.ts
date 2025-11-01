import mongoose from "mongoose";
import { IStudentBasic } from "../models/StudentBasic.js";
import { StudentBasicRepository } from "../repositories/StudentBasicRepository.js";
import { IStudentDetails, StudentDetails } from "../models/StudentDetails.js";

export class StudentDetailsService {
    private repository: StudentBasicRepository;

    constructor() {
        this.repository = new StudentBasicRepository();
    }

    async addOrUpdateDetails(id: string, data: Partial<IStudentDetails>): Promise<IStudentBasic | null> {
        const student = await this.repository.findById(id);
        if (!student) throw new Error("Student not found");

        let details;

        if (student.details) {
            details = await StudentDetails.findByIdAndUpdate(student.details, data, { new: true });
        }
        else {
            details = new StudentDetails(data);
            await details.save();

            student.details = details._id as mongoose.Types.ObjectId;
            await student.save();
        }

        return student;
    }

    async getWithDetails(id: string): Promise<IStudentBasic | null> {
        const student = await this.repository.findById(id);
        if (!student) throw new Error("Student not found");

        await student.populate<{ details: IStudentDetails }>("details");
        return student;
    }
}