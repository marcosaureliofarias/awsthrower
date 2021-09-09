import { RegisterVacanciesDTO } from '../../logic/dto';
import { RegisterVacanciesIT, IRegisterVacanciesITModel } from '../../repositories';

export class RegisterVacanciesITRepository {
    async create(regiterDTO: RegisterVacanciesDTO): Promise<IRegisterVacanciesITModel> {
        try {
            return await RegisterVacanciesIT.create(regiterDTO);
        } catch (err) {
            throw err;
        }
    }

    static async findAll(): Promise<Array<IRegisterVacanciesITModel>> {
        try {
            return await RegisterVacanciesIT.find();
        } catch (err) {
            throw err;
        }
    }
}
