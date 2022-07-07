import axios, { AxiosError } from "axios";
import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";
import {
  GithubContextType,
  GithubProviderProps,
  User,
} from "./@types/github.d";

const InitialUserValue: User = {
  id: 0,
  avatar: "",
  login: "",
  html_url: "",
  name: "",
  email: "",
  blog: "",
  twitter_username: "",
  company: "",
  location: "",
  hirable: false,
  bio: "",
  followers: 0,
  following: 0,
  public_gists: 0,
  public_repos: 0,
};

const InitialGithubContextValue: GithubContextType = {
  hasUser: false,
  loading: false,
  user: InitialUserValue,
  repositories: [],
  starred: [],
};

export const GithubContext = createContext<GithubContextType>(
  InitialGithubContextValue
);

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const [githubState, setGithubState] = useState(InitialGithubContextValue);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUser = (username: string) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`users/${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
            bio: data.bio,
            email: data.email,
            twitter_username: data.twitter_username,
            hirable: data.hirable,
          },
        }));
      })
      .catch((e: AxiosError) => {
        if (axios.isAxiosError(e)) {
          console.log(e.message);
          setGithubState((prevState) => ({
            ...prevState,
            hasUser: false,
          }));
        }
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUserRepos = (username: string) => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUserStarred = (username: string) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    hasUser: githubState["hasUser"],
    loading: githubState["loading"],
    user: githubState["user"],
    repositories: githubState["repositories"],
    starred: githubState["starred"],
    getUser: useCallback((username: string) => getUser(username), [getUser]),
    getUserRepos: useCallback(
      (username: string) => getUserRepos(username),
      [getUserRepos]
    ),
    getUserStarred: useCallback(
      (username: string) => getUserStarred(username),
      [getUserStarred]
    ),
  };
  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
