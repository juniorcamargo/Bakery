export default interface Http {
  app: any;
  on(method: string, url: string, callback: Function): void;
  run(baseUrl: string, port: number): void;
}
