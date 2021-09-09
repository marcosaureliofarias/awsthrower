export class RegexUtils {
    public static CPF_FORMAT_REGEX = /(\d{3})(\d{3})(\d{3})(\d{2})/;

    public static CPF_CNPJ_CLEAR_REGEX = /[^\d]+/g;

    public static EMAIL_VALIDATOR_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    public static BIRTHDAY_VALIDATOR_REGEX = /(\d{2})\/(\d{2})\/(\d{4})/;

    public static GRADE_DATE_VALIDATOR_REGEX = /(\d{8})/;

    public static TIME_VALIDATOR_REGEX = /(\d{2}):(\d{2})/;
}
