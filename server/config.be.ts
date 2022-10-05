function checkAndThrow(
  variable: string | undefined,
  variableName: string
): string {
  if (!variable) {
    throw new Error(`env variable "${variableName}" is required`);
  }
  return variable;
}

class ConfigBE {
  public readonly DB_USER: string = "";
  public readonly DB_PASSWORD: string = "";
  public readonly DB_HOST: string = "";
  public readonly DB_PORT: number = 0;
  public readonly DB_NAME: string = "";
  public readonly DB_SALT: string = "";
  public readonly NODE_ENV: string = "";
  /*public readonly SMTP_HOST: string = "";
  public readonly SMTP_PORT: number = 0;
  public readonly SMTP_USER: string = "";
  public readonly SMTP_PASS: string = "";
  public readonly JWT_SECRET: string = "";*/

  constructor() {
    Object.keys(this).forEach((key: string) => {
      (this as Record<string, any>)[key]  = checkAndThrow(process.env[key], key);
    });
  }

}

export default new ConfigBE();
