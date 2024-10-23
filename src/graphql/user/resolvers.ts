const queries = {};

const mutations = {
  createUser: async (_: any, {}: {}) => {
    return "random_id";
  },
};

export const resolvers = {
  queries,
  mutations,
};
