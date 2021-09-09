import { ContainerInstance, Service } from 'typedi';
import { Request, Response } from 'express';
// import { ExampleFacade, ExampleFacadeImpl } from '../facade';
import { Processing, Registration, Status } from '../repositories/models';
import { StatusProcessing } from '../enums';

@Service()
export class CadastroController {
    // private facade: ExampleFacade;

    constructor(container: ContainerInstance) {
        // this.facade = container.get<ExampleFacade>(ExampleFacadeImpl);
    }

    teste1(body:any) {
        new Promise((res, rej) => {
            Registration.create(body).then((itens: any) => {
                res(itens)
            })
        })
    }

    teste2() {
        new Promise(async (res, rej) => {
            await Status.find({ status: StatusProcessing.STATUS_PROCESSING }).then((itens: any) => {
                res(itens)
            })
        })
    }

    teste3() {
        new Promise(async (res, rej) => {
            await Processing.create({
                _id_registration: "marcos",
                _id_status: "samuel"
            })
        })
    }
 

    async register(req: Request, res: Response): Promise<void> {
        try {
            let registraton = await this.teste1(req.body);

            let status = await this.teste2();

            let processing = await this.teste3();
            res.status(200)
        } catch (err) {
            // Logger.error('Error while getting all examples', err);
            throw err;
        }
    }
}
