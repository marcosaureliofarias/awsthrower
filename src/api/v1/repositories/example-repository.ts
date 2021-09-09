// // import { ExampleDto } from '../logic/dto';
// import { IExampleModel, ExampleModel } from './models';

// export class ExampleRepository {
//     // @log
//     async create(exampleDto: ExampleDto): Promise<IExampleModel> {
//         try {
//             return await ExampleModel.create(exampleDto);
//         } catch (err) {
//             // Logger.error('Error while creating new Example', err);
//             throw err;
//         }
//     }

//     // @log
//     async findAll(): Promise<Array<IExampleModel>> {
//         try {
//             return await ExampleModel.find();
//         } catch (err) {
//             // Logger.error('Error while finding all examples', err);
//             throw err;
//         }
//     }
// }
