import { IPayload } from '../entities/payload.interface';

export class CreateLoggerDto {
  messageId: number;
  payload: IPayload;
}
