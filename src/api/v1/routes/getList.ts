import { Router, Request, Response } from 'express';
import Container from 'typedi';
import { GetListController } from '../controllers';
const controller = Container.get(GetListController);

const GetList = Router();
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

GetList.route('/GetList')

    .get(
        (req: Request, res: Response) => {
            controller.GetList(
                req,
                res
            )
        }
    );

export { GetList }