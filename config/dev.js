module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {
    postcss: {
      // css modules 功能开关与相关配置
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module，下文详细说明
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  h5: {
    postcss: {
      // css modules 功能开关与相关配置
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module，下文详细说明
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    },
    devServer: {
      host: "localhost",

      port: 10086,

      proxy: {
        "/api": {
          // rest服务的path
          target: "http://localhost:3000", // 服务端地址
          changeOrigin: true
        }
      }
    }
  }
};
