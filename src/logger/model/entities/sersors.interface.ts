interface ISensors {
  /**
   * accelerometer, gravity, gyroscope, magnetometer or magnetometer uncalibrated
   */
  x: number;
  /**
   * accelerometer, gravity, gyroscope, magnetometer or magnetometer uncalibrated
   */
  y: number;
  /**
   * accelerometer, gravity, gyroscope, magnetometer or magnetometer uncalibrated
   */
  z: number;
  /**
   * orientation
   */
  qz: number;
  /**
   * orientation
   */
  qy: number;
  /**
   * orientation
   */
  qx: number;
  /**
   * orientation
   */
  qw: number;
  /**
   * orientation
   */
  roll: number;
  /**
   * orientation
   */
  pitch: number;
  /**
   * orientation
   */
  yaw: number;
  /**
   * @deprecated 未知地理位置信息, 暂时无法获取
   */
  location: unknown;
  /**
   * @deprecated 未知相机参数, 暂时无法获取
   */
  camera: unknown;
  /**
   * Microphone
   */
  dBFS: number;
  /**
   * Light
   */
  lux: number;
  /**
   * Battery
   */
  batteryLevel: number;
  /**
   * 电池状态: 是否充电
   */
  batteryState: string;
  /**
   * 电池信息: 是否低电量模式
   */
  lowPowerMode: boolean;
  /**
   * Brightness
   */
  brightness: number;
}
export { ISensors };
