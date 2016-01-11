/* eslint no-console:0 */

var Hapi   = require('hapi'),
    Path   = require('path'),
    Swig   = require('swig'),
    Routes = require('./routes');

Swig.setDefaults({ cache: false });

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.views({
  engines:  { swig: Swig },
  path:     Path.join(__dirname, 'views')
});

server.route({ method: 'GET',  path: '/',                   handler: Routes.index     });
server.route({ method: 'GET',  path: '/action',             handler: Routes.action    });
server.route({ method: 'GET',  path: '/responsive',         handler: Routes.responsive});
server.route({ method: 'GET',  path: '/form',               handler: Routes.form      });
server.route({ method: 'GET',  path: '/keys',               handler: Routes.keys      });
server.route({ method: 'GET',  path: '/angular',            handler: Routes.angular   });
server.route({ method: 'GET',  path: '/pace',               handler: Routes.pace      });
server.route({ method: 'GET',  path: '/pace-theme-center-simple.css', handler: function (request, reply) { reply.file(Path.join(__dirname, 'pace-theme-center-simple.css')); } });
server.route({ method: 'GET',  path: '/pace.js',            handler: function (request, reply) { reply.file(Path.join(__dirname, 'pace.js')); } });
server.route({ method: 'GET',  path: '/angular/data',       handler: Routes.angularData});
server.route({ method: 'POST', path: '/result',             handler: Routes.result    });
server.route({ method: 'GET',  path: '/post/{id}',          handler: Routes.post      });
server.route({ method: 'GET',  path: '/generate/{number}',  handler: Routes.generate  });
server.route({ method: 'GET',  path: '/delay/{number}',     handler: Routes.delay  });

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
