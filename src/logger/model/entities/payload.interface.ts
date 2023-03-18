import { ISensors } from './sersors.interface';

interface IPayload {
  /**
   * 时间戳
   */
  time: number;
  /**
   * 传感器名称
   */
  name: string;
  /**
   *  传感器信息
   */
  values: ISensors;
  /**
   * 可选? 精度
   */
  accuracy?: number;
}
export { IPayload };
