import { useQuery } from "@apollo/client";
import type { GetStaticProps, NextPage } from "next";
import { addApolloState, initializeApollo } from "../graphql";
import { FIND_ALL } from "../graphql/queries";

const Home: NextPage = () => {
  const { loading, data } = useQuery(FIND_ALL, {
    notifyOnNetworkStatusChange: true,
  });

  return <pre>{loading ? "loading" : JSON.stringify(data, undefined, 2)}</pre>;
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: FIND_ALL,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};
