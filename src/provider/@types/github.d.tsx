import React from "react";

export interface User {
  id: number;
  avatar: string;
  login: string;
  html_url: string;
  name: string;
  email: string;
  blog: string;
  twitter_username: string;
  company: string;
  location: string;
  hirable: boolean;
  bio: string;
  followers: number;
  following: number;
  public_gists: number;
  public_repos: number;
}

export interface Repositories {
  id: number;
  html_url: string;
  full_name: string;
  name: string;
}

export interface Starred{
  id: number;
  html_url: string;
  full_name: string;
  name: string;
}

export interface GithubContextType {
  hasUser: boolean;
  loading: boolean;
  user: User;
  repositories: Repositories[];
  starred: Starred[];
  getUser?: (username: string) => void;
  getUserStarred?: (username: string) => void;
  getUserRepos?: (username: string) => void;
}

export type GithubProviderProps = {
  children: React.ReactNode;
};

export default GithubContextType;
