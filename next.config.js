const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  // set different values for development
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "MoRam",
        mongodb_password: "jNrm1bwQrU9CZOtS",
        mongodb_cluster_name: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "MoRam",
      mongodb_password: "jNrm1bwQrU9CZOtS",
      mongodb_cluster_name: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
