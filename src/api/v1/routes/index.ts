import { Router } from 'express';
import { HealhtChecker } from './health-check-routers';
import { Cadastro } from './apiUser';
import { GetList } from './getList';
import { Login } from './login-routers';


const v1 = Router();
v1.use(HealhtChecker);
v1.use(Cadastro)
v1.use(GetList)
v1.use(Login)
export { v1 };
 