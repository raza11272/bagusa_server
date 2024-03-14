// const path = require("path");

// module.exports = ({ env }) => {
//   // const client = env('DATABASE_CLIENT', 'sqlite');

//   const connections = {
//     mysql: {
//       connection: {
//         // connectionString: env('DATABASE_UR'),
//         client: "mysql",
//         host: env("DATABASE_HOST", "srv1267.hstgr.io"),
//         port: env.int("DATABASE_PORT", 3306),
//         database: env("DATABASE_NAME", "u308755164_bagusanew"),
//         username: env("DATABASE_USERNAME", "u308755164_bagusanew1"),
//         password: env("DATABASE_PASSWORD", "(1234567890)Raisul"),
//         ssl: env.bool("DATABASE_SSL", false) && {
//           key: env("DATABASE_SSL_KEY", undefined),
//           cert: env("DATABASE_SSL_CERT", undefined),
//           ca: env("DATABASE_SSL_CA", undefined),
//           capath: env("DATABASE_SSL_CAPATH", undefined),
//           cipher: env("DATABASE_SSL_CIPHER", undefined),
//           rejectUnauthorized: env.bool(
//             "DATABASE_SSL_REJECT_UNAUTHORIZED",
//             true
//           ),
//         },
//       },
//       pool: {
//         min: env.int("DATABASE_POOL_MIN", 2),
//         max: env.int("DATABASE_POOL_MAX", 10),
//       },
//     },

//     // mysql2: {
//     //   connection: {
//     //     host: env('DATABASE_HOST', 'localhost'),
//     //     port: env.int('DATABASE_PORT', 3306),
//     //     database: env('DATABASE_NAME', 'strapi'),
//     //     user: env('DATABASE_USERNAME', 'strapi'),
//     //     password: env('DATABASE_PASSWORD', 'strapi'),
//     //     ssl: env.bool('DATABASE_SSL', false) && {
//     //       key: env('DATABASE_SSL_KEY', undefined),
//     //       cert: env('DATABASE_SSL_CERT', undefined),
//     //       ca: env('DATABASE_SSL_CA', undefined),
//     //       capath: env('DATABASE_SSL_CAPATH', undefined),
//     //       cipher: env('DATABASE_SSL_CIPHER', undefined),
//     //       rejectUnauthorized: env.bool(
//     //         'DATABASE_SSL_REJECT_UNAUTHORIZED',
//     //         true
//     //       ),
//     //     },
//     //   },
//     //   pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     // },
//     // postgres: {
//     //   connection: {
//     //     connectionString: env('DATABASE_URL'),
//     //     host: env('DATABASE_HOST', 'localhost'),
//     //     port: env.int('DATABASE_PORT', 5432),
//     //     database: env('DATABASE_NAME', 'strapi'),
//     //     user: env('DATABASE_USERNAME', 'strapi'),
//     //     password: env('DATABASE_PASSWORD', 'strapi'),
//     //     ssl: env.bool('DATABASE_SSL', false) && {
//     //       key: env('DATABASE_SSL_KEY', undefined),
//     //       cert: env('DATABASE_SSL_CERT', undefined),
//     //       ca: env('DATABASE_SSL_CA', undefined),
//     //       capath: env('DATABASE_SSL_CAPATH', undefined),
//     //       cipher: env('DATABASE_SSL_CIPHER', undefined),
//     //       rejectUnauthorized: env.bool(
//     //         'DATABASE_SSL_REJECT_UNAUTHORIZED',
//     //         true
//     //       ),
//     //     },
//     //     schema: env('DATABASE_SCHEMA', 'public'),
//     //   },
//     //   pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     // },
//     // sqlite: {
//     //   connection: {
//     //     filename: path.join(
//     //       __dirname,
//     //       '..',
//     //       env('DATABASE_FILENAME', '.tmp/data.db')
//     //     ),
//     //   },
//     //   useNullAsDefault: true,
//     // },
//   };

  // return {
  //   connection: {
  //     client,
  //     ...connections[client],
  //     acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  //   },
  // };
// };

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'mysql',
// host: env('DATABASE_HOST', 'srv1267.hstgr.io'),
// port: env.int('DATABASE_PORT', 3306),
// database: env('DATABASE_NAME', 'u308755164_bagusanew'),
// username: env('DATABASE_USERNAME', 'u308755164_bagusanew1'),
// password: env('DATABASE_PASSWORD', '(1234567890)Raisul'),
//       },
//       options: {}
//     }
//   }
// });

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', 'srv1267.hstgr.io'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'u308755164_bagusanew'),
//       username: env('DATABASE_USERNAME', 'u308755164_bagusanew1'),
//       password: env('DATABASE_PASSWORD', '(1234567890)Raisul'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', true), // For self-signed certificates
//       },
//     },
//     debug: true,
//   },
// });



const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'mysql');

  const connections = {
    mysql: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'srv1267.hstgr.io'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'u308755164_bagusanew'),
        user: env('DATABASE_USERNAME', 'u308755164_bagusanew1'),
        password: env('DATABASE_PASSWORD', '(1234567890)Raisul'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DATABASE_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    mysql2: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DATABASE_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DATABASE_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          '..',
          env('DATABASE_FILENAME', '.tmp/data.db')
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
