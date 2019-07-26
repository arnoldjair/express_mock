var express = require('express');
var router = express.Router();

/* GET options listing. */
router.get('/', function (req, res, next) {
  let body = {
    success: true,
    message: 'User options',
    data: [
      {
        id: 1,
        code: 'adm_users',
        name: 'Administración de usuarios',
        icon: 'fa-user-alt',
        route: 'adm_users',
        options: [
          { id: 10, code: 'adm_users_users', name: 'Usuarios', icon: 'fa-chevron-right', route: 'administrador-de-usuarios/usuarios' },
          { id: 11, code: 'adm_users_users', name: 'Perfiles', icon: 'fa-chevron-right', route: 'administrador-de-usuarios/usuarios' },
          { id: 12, code: 'adm_users_users', name: 'Reporte de usuarios', icon: 'fa-chevron-right', route: 'administrador-de-usuarios/usuarios' },
          { id: 13, code: 'adm_users_users', name: 'Reporte de perfiles', icon: 'fa-chevron-right', route: 'administrador-de-usuarios/usuarios' },
          { id: 14, code: 'adm_users_users', name: 'Reporte de auditoría', icon: 'fa-chevron-right', route: 'administrador-de-usuarios/usuarios' }
        ]
      },
      {
        id: 2,
        code: 'test',
        name: 'Test',
        icon: 'fa-trash-alt',
        route: '#'
      }
    ]
  }
  if (req.query.user === 'vpechera') {
    res.jsonp(body);
  } else {
    res.jsonp({ success: false, message: 'el usuario no tiene opciones de menú', data: [] });
  }

});

module.exports = router;
