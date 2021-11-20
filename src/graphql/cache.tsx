import { InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        findAllQuestions: {
          keyArgs: false,
          merge: (existing, incoming) => {
            let query = { ...incoming };
            if (existing?.dataset) {
              query["dataset"] = [...existing?.dataset, ...incoming?.dataset];
            }
            return query;
          },
        },
      },
    },
  },
});

export default cache;
