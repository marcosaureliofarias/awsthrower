export class AppConstants {
    static DEFAULT_CONSULT_TIME = 15;

    static DEFAULT_DATE_FORMAT = 'YYYYMMDD';

    static DEFAULT_TIME_FORMAT = 'HH:mm';

    static DEFAULT_PASSWORD_ENCODE = 'base64';

    static APP_CONTEXT = {
        AppParameters: 'AppParameters',
        AppFlow: 'applicationFlow',
    };

    static DEFAULT_SERVICE_TIMEOUT = Number(process.env.DEFAULT_SERVICE_TIMEOUT || '20000');
}
