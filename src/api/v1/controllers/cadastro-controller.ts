import { ContainerInstance, Service } from 'typedi';
import { Request, Response } from 'express';
// import { ExampleFacade, ExampleFacadeImpl } from '../facade';
import { Processing, ProfessionalRegistration, Status } from '../repositories/models';
import { StatusProcessing } from '../enums';

@Service()
export class CadastroController {
    // private facade: ExampleFacade;

    constructor(container: ContainerInstance) {
        // this.facade = container.get<ExampleFacade>(ExampleFacadeImpl);
    }

    teste1(body:any) {
        return new Promise((res, rej) => {
            ProfessionalRegistration.create(body).then((itens: any) => {
                res(itens)
            })
        })
    }

    teste2() {
       return new Promise(async (res, rej) => {
            await Status.find({ status: StatusProcessing.STATUS_AWAITING }).then((itens: any) => {
                res(itens)
            })
        })
    }

    teste3(id_status: any, _id_registration: any) {
       return new Promise(async (res, rej) => {
            await Processing.create({
                _id_registration: _id_registration,
                _id_status: id_status
            })
        })
    }
 

    async ProfessionalRegistration(req: Request, res: Response): Promise<void> {
        try {
            let registraton:any = await this.teste1(req.body);

            let status:any = await this.teste2();

            let processing:any = await this.teste3(status[0]._id, registraton._id);
            res.status(200)
        } catch (err) {
            // Logger.error('Error while getting all examples', err);
            throw err;
        }
    }
}
