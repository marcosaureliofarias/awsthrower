import * as moment from 'moment';
import { AppConstants } from '../constants';
import { UnitOfTime } from '../enums';

export class DateUtils {
    static parseToMoment(source: string | Date, format: string = AppConstants.DEFAULT_DATE_FORMAT): moment.Moment {
        const date = moment(source, format);
        if (date.isValid) {
            return date;
        }
        return null;
    }

    static formatDate(source: string | Date, format: string = AppConstants.DEFAULT_DATE_FORMAT): string {
        const date = DateUtils.parseToMoment(source, format);
        return date.format(format);
    }

    static stringToDate(source: string, format: string = AppConstants.DEFAULT_DATE_FORMAT): Date {
        const date = DateUtils.parseToMoment(source, format);
        if (date) {
            return date.toDate();
        }
        return null;
    }

    static datePlusTime(source: string | Date, amount: number, unit: UnitOfTime, format: string = AppConstants.DEFAULT_DATE_FORMAT): Date {
        const date = DateUtils.parseToMoment(source, format).add(amount, unit);
        if (date) {
            return date.toDate();
        }
        return null;
    }

    static nowPlusAsDate(amount: number, unit: UnitOfTime): Date {
        return DateUtils.now().add(amount, unit).toDate();
    }

    static nowPlusAsString(amount: number, unit: UnitOfTime, format: string = AppConstants.DEFAULT_DATE_FORMAT): string {
        return DateUtils.formatDate(DateUtils.nowPlusAsDate(amount, unit), format);
    }

    static nowAsDate(): Date {
        return DateUtils.now().toDate();
    }

    static now(): moment.Moment {
        return moment().add(2, UnitOfTime.HOUR);
    }

    static nowAsString(format: string = AppConstants.DEFAULT_DATE_FORMAT): string {
        return DateUtils.formatDate(DateUtils.nowAsDate(), format);
    }

    static nowAsTime(amount = 0, unit: UnitOfTime = UnitOfTime.HOUR, format: string = AppConstants.DEFAULT_TIME_FORMAT): string {
        const now = DateUtils.now().add(amount, unit).format(format);
        return now;
    }

    static getDiffDaysFromNow(timestamp: number): number {
        if (!timestamp) {
            return 0;
        }
        const diffTime = timestamp - new Date().getTime();
        const diffDays = diffTime / (1000 * 3600 * 24);
        return diffDays;
    }

    static getDateList(start: string, end: string): Array<{ date: string; dayOdWeek: number }> {
        let startDate = DateUtils.parseToMoment(start);
        const endDate = DateUtils.parseToMoment(end);
        const list: Array<{ date: string; dayOdWeek: number }> = [];
        while (startDate.isSameOrBefore(endDate)) {
            list.push({
                dayOdWeek: startDate.days(),
                date: DateUtils.formatDate(startDate.toDate()),
            });
            startDate = startDate.add(1, UnitOfTime.DAY);
        }

        return list;
    }
}
