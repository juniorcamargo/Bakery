export interface IDish {
  type: string;
  name: string;
  have_seconds_accepted: boolean;
  have_seconds_times: number;
  print(): string;
}
