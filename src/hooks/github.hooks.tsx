import { useContext } from "react";
import { GithubContext } from "../provider/github.provider";

const useGithub = () => {
  const { hasUser, loading, user, repositories, starred, getUser, getUserRepos, getUserStarred } = useContext(
    GithubContext
  );

  return { hasUser, loading, user, repositories, starred, getUser, getUserRepos, getUserStarred };
};

export default useGithub;
