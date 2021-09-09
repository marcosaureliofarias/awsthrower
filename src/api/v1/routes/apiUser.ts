import { Router, Request, Response } from 'express';
import Container from 'typedi';
import { CadastroController } from '../controllers';
const controller = Container.get(CadastroController);
const Cadastro = Router();
/**
 * @swagger
 * /api/v1/register:
 *    get:
 *      tags:
 *          - health
 *      description: Check if application is ready to respond request
 *      responses:
 *       200:
 *         description: OK
 */

Cadastro.route('/register')

    .post(
        (req: Request, res: Response) => {
            controller.ProfessionalRegistration(
                req,
                res
            )
        }
    );

export { Cadastro }