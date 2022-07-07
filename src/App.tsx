import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import useGithub from "./hooks/github.hooks";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
const App = () => {
  const { hasUser, loading } = useGithub();
  return (
    <Layout>
      {hasUser ? (
        <>
          {loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
