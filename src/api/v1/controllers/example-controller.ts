// import { ContainerInstance, Service } from 'typedi';
// import { Request, Response } from 'express';
// // import { ExampleFacade, ExampleFacadeImpl } from '../facade';

// @Service()
// export class ExampleController {
//     // private facade: ExampleFacade;

//     constructor(container: ContainerInstance) {
//         // this.facade = container.get<ExampleFacade>(ExampleFacadeImpl);
//     }

//     // @log
//     async getAll(req: Request, res: Response): Promise<void> {
//         try {
//             const itens = await this.facade.getAll();
//             res.status(200).json(itens);
//         } catch (err) {
//             // Logger.error('Error while getting all examples', err);
//             throw err;
//         }
//     }
// }
