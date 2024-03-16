import { NextFunction, Request, Response } from "express";
import { createCustommerSchema } from "./schemas.joi";
import ServiceResponse, { StatusNames } from "../utils/ServiceResponse";

export default function validateCustommerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void {
  try {
    const { error } = createCustommerSchema.validate(req.body);
    if (error) {
      const response = new ServiceResponse(StatusNames.BAD_REQUEST, error?.message || '');

      return res.status(response.statusCode).json(response.data);
    }
    return next();
  } catch (error) {
    return res.status(500).json({ message: 'An internal error has occurred.'})
  }
}
