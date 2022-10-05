export class ConfigFE {
  public readonly NEXT_PUBLIC_API_URL: string = process.env.NEXT_PUBLIC_API_URL as string;
}

export default new ConfigFE();
