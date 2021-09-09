import { ContainerInstance, Service } from 'typedi';
import { Request, Response } from 'express';
import { RegisterVacanciesITRepository } from '../../v1/repositories/models/registerVacanciesIT-repository';

@Service()
export class GetListController {

    constructor(container: ContainerInstance) {   }

    async GetList(req: Request, res: Response): Promise<void> {
        RegisterVacanciesITRepository.findAll().then(result => {
            if (result) {
                res.send(result)
            } else {
                throw result
            }
        })
    }
}