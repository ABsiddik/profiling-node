import { Request, Response, NextFunction } from "express";
import { StudentBasicService } from "../services/StudentBasicService.js";
import { StudentDetailsService } from "../services/StudentDetailsService.js";
import { StudentParams } from "../params/StudentParams.js";

const service = new StudentBasicService();
const serviceDetails = new StudentDetailsService();

export class StudentBasicController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const student = await service.create(req.body);
      res.status(201).json({ success: true, data: student });
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const students = await service.getAll();
      res.json({ success: true, data: students });
    } catch (err) {
      next(err);
    }
  }

  static async getById(req: Request<StudentParams>, res: Response, next: NextFunction) {
    try {
      const student = await service.getById(req.params.id);
      res.json({ success: true, data: student });
    } catch (err) {
      next(err);
    }
  }



  static async getByName(req: Request<StudentParams>, res: Response, next: NextFunction) {
    try {
      const student = await service.getByName(req.params.name);
      res.json({ success: true, data: student });
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request<StudentParams>, res: Response, next: NextFunction) {
    try {
      const updated = await service.update(req.params.id, req.body);
      res.json({ success: true, data: updated });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request<StudentParams>, res: Response, next: NextFunction) {
    try {
      await service.delete(req.params.id);
      res.json({ success: true, message: "Student deleted" });
    } catch (err) {
      next(err);
    }
  }

  static async addOrEditDetails(req: Request<StudentParams>, res: Response, next: NextFunction) {
    try {
      const updated = await serviceDetails.addOrUpdateDetails(req.params.id, req.body);
      res.json({ success: true, data: updated });
    } catch (err) {
      next(err);
    }
  }



  static async getStudentWithDetails(req: Request<StudentParams>, res: Response, next: NextFunction) {
    try {
      const student = await serviceDetails.getWithDetails(req.params.id);
      res.json({ success: true, data: student });
    } catch (err) {
      next(err);
    }
  }
}
