import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

export class DayJsDateProvider implements IDateProvider {
  // Metodo para conversão de data para utc => sexta-feira, 1 de julho de 2022
  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  // Metodo que retorna a data atual no formato utc
  dateNow(): Date {
    return dayjs().toDate();
  }

  // Metodo que retorna a diferença de dias entre duas datas
  compareInDays(start_date: Date, end_date: Date): number {
    const start_date_utc = this.convertToUTC(start_date);
    const end_date_utc = this.convertToUTC(end_date);

    return dayjs(end_date_utc).diff(start_date_utc, "days");
  }
}
