import { RegisterVacanciesDTO } from '../../logic/dto/RegisterVacancies-dto';
import { IUserModel, User } from '../models/user-model';

export class UserRepository {
    async create(regiterDTO: RegisterVacanciesDTO): Promise<IUserModel> {
        try {
            return await User.create(regiterDTO);
        } catch (err) {
            throw err;
        }
    }

    static async findAll(password: string, login: string): Promise<Array<IUserModel>> {
        try {
            return new Promise((resolve, reject) => {
                User.find({ password: password, login: login }).then(res => {
                    resolve(res)
                });
              })
        } catch (err) {
            throw err;
        }
    }
}
