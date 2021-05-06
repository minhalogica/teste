
import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { usuarioRoutes } from './usuario.routes';

const router = Router();

router.use("/usuarios", usuarioRoutes);
router.use("/auth", authRoutes);


export { router }