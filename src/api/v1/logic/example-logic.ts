// import { ContainerInstance } from 'typedi';
// import { ExampleDto } from './dto';
// import { ExampleRepository } from '../repositories';
// import { IExampleModel } from '../repositories/models';

// export class ExampleLogic {
//     private repository: ExampleRepository;

//     constructor(container: ContainerInstance) {
//         this.repository = container.get(ExampleRepository);
//     }

//     // @log
//     async getAll(): Promise<Array<ExampleDto>> {
//         try {
//             const models = await this.repository.findAll();

//             const response = models.map((m) => this.modelToDto(m));

//             return response;
//         } catch (err) {
//             // Logger.error('Error while getting all examples', err);
//             throw err;
//         }
//     }

//     private modelToDto(model: IExampleModel): ExampleDto {
//         return {
//             id: model.id,
//             age: model.age,
//             name: model.name,
//             email: model.email,
//         };
//     }
// }
