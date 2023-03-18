import { IPayload } from '../entities/payload.interface';

export class CreateLoggerDto {
  messageId: number;
  sessionId: string;
  deviceId: string;
  payload: IPayload[];
}
