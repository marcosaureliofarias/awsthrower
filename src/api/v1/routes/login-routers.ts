import { Router, Request, Response } from 'express';
import Container from 'typedi';
import { LoginController } from '../controllers/login-controller';

const controller = Container.get(LoginController);

const Login = Router();
/**
 * @swagger
 * /api/v1/list:
 *    get:
 *      tags:
 *          - health
 *      description: Check if application is ready to respond request
 *      responses:
 *       200:
 *         description: OK
 */

Login.route('/login/account')
    .post(
        (req: Request, res: Response) => {
            controller.login(
                req,
                res
            )
        }
    );
export { Login }