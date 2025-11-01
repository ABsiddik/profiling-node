import { IStudentService } from "./interfaces/IStudentService.js";
import { IStudentBasic } from "../models/StudentBasic.js";
import { StudentBasicRepository } from "../repositories/StudentBasicRepository.js";

export class StudentBasicService implements IStudentService<IStudentBasic> {
  private repository: StudentBasicRepository;

  constructor() {
    this.repository = new StudentBasicRepository();
  }

  async create(data: Partial<IStudentBasic>): Promise<IStudentBasic> {
    const existing = await this.repository.findAll();
    if (existing.some((s) => s.id === data.id))
      throw new Error("ID already exists");

    return await this.repository.create(data);
  }

  async getAll(): Promise<IStudentBasic[]> {
    return await this.repository.findAll();
  }

  async getByName(name: string): Promise<IStudentBasic | null> {
    const student = await this.repository.findByName(name);
    if (!student) throw new Error("Student not found");
    return student;
  }

  async getById(id: string): Promise<IStudentBasic | null> {
    const student = await this.repository.findById(id);
    if (!student) throw new Error("Student not found");
    return student;
  }

  async update(id: string, data: Partial<IStudentBasic>): Promise<IStudentBasic | null> {
    const updated = await this.repository.updateById(id, data);
    if (!updated) throw new Error("Student not found");
    return updated;
  }

  async delete(id: string): Promise<void> {
    const deleted = await this.repository.deleteById(id);
    if (!deleted) throw new Error("Student not found");
  }
}
