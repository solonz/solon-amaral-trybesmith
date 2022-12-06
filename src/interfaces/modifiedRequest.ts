import type { Request } from 'express';

export default interface IRequest extends Request {
  user?: {
    id: number,
    username: string,
    classe: string,
    level: string,
  }
}