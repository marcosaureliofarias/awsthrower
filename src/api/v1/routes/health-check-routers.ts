import { Router, Request, Response } from 'express';

const HealhtChecker = Router();
/**
 * @swagger
 * /api/v1/health/ready:
 *    get:
 *      tags:
 *          - health
 *      description: Check if application is ready to respond request
 *      responses:
 *       200:
 *         description: OK
 */
HealhtChecker.route('/health/ready').get((req: Request, res: Response) => {
    res.send('OK').status(200);
});

export { HealhtChecker };
