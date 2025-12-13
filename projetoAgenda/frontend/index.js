import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Login from './assets/modules/login';

const cadastro = new Login('.form-cadastro');
const login = new Login('.form-login');

cadastro.init();
login.init();

// contato 
import contato from './assets/modules/contato';
const tato = new contato('.contatoRegister');

tato.init()
