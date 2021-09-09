export enum UnitGradeStatus {
    ACTIVE = 1,
    INACTIVE,
    DELETED,
    FREEDEMAND,
}

export class UnitGradeStatusConverter {
    static convertToString(status: UnitGradeStatus) {
        switch (status) {
        case UnitGradeStatus.ACTIVE:
            return 'ACTIVE';
        case UnitGradeStatus.INACTIVE:
            return 'INACTIVE';
        case UnitGradeStatus.DELETED:
            return 'DELETED';
        case UnitGradeStatus.FREEDEMAND:
            return 'FREEDEMAND';
        }
    }

    static convertFromString(status: string): UnitGradeStatus {
        switch (status) {
        case 'INACTIVE':
            return UnitGradeStatus.INACTIVE;
        case 'DELETED':
            return UnitGradeStatus.DELETED;
        case 'FREEDEMAND':
            return UnitGradeStatus.FREEDEMAND;
        default:
            return UnitGradeStatus.ACTIVE;
        }
    }

    static convertFromNumber(status: number): UnitGradeStatus {
        switch (status) {
        case 1:
            return UnitGradeStatus.INACTIVE;
        case 2:
            return UnitGradeStatus.DELETED;
        case 3:
            return UnitGradeStatus.FREEDEMAND;
        default:
            return UnitGradeStatus.ACTIVE;
        }
    }
}
