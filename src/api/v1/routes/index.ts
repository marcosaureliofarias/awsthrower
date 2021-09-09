import { Router } from 'express';
import { HealhtChecker } from './health-check-routers';
import { Cadastro } from './apiUser';
import { GetList } from './getList';


const v1 = Router();
v1.use(HealhtChecker);
v1.use(Cadastro)
v1.use(GetList)
export { v1 };
 