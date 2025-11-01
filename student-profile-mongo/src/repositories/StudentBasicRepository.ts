import { IStudentRepository } from "./interfaces/IStudentRepository.js";
import { StudentBasic, IStudentBasic } from "../models/StudentBasic.js";

export class StudentBasicRepository implements IStudentRepository<IStudentBasic> {
  async create(data: Partial<IStudentBasic>): Promise<IStudentBasic> {
    return await StudentBasic.create(data);
  }

  async findAll(): Promise<IStudentBasic[]> {
    return await StudentBasic.find();
  }

  async findById(id: string): Promise<IStudentBasic | null> {
    return await StudentBasic.findById(id);
  }

  async findByName(name: string): Promise<IStudentBasic | null> {
    return await StudentBasic.findOne({ name });
  }

  async updateById(id: string, data: Partial<IStudentBasic>): Promise<IStudentBasic | null> {
    return await StudentBasic.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id: string): Promise<IStudentBasic | null> {
    return await StudentBasic.findByIdAndDelete(id);
  }
}
