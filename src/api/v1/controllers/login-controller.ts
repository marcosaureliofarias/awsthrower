import { Service } from 'typedi';
import { Request, Response } from 'express';
import { UserRepository } from '../../v1/repositories/models/user-repository';

@Service()
export class LoginController {


    constructor() { }



    async login(req: Request, res: Response): Promise<void> {
        try {
            const { password, username, type } = req.body;
            UserRepository.findAll(password, username).then(result => {
                if (result.length > 0) {
                    res.status(200).send({
                        msg: {
                            status: 'ok',
                            type,
                            currentAuthority: 'admin',
                        },
                        userInfo: result[0]
                    });
                } else {
                    res.status(204).send({
                        status: 'User not found',
                        type,
                        currentAuthority: 'guest',
                    });
                }
            })
        } catch (err) {
            throw err;
        }
    }
}