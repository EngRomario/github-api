import React from "react";
import useGithub from "../../hooks/github.hooks";
import * as S from "./styled";

const UsernameInfo = () => {
  const { user } = useGithub();
  return (
    <S.WrapperUserGeneric>
      <h3>Username:</h3>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        {user.login}
      </a>
    </S.WrapperUserGeneric>
  );
};

const CompanyInfo = () => {
  const { user } = useGithub();
  return (
    <S.WrapperUserGeneric>
      <h3>Company:</h3>
      <span>{user.company}</span>
    </S.WrapperUserGeneric>
  );
};

const LocationInfo = () => {
  const { user } = useGithub();
  return (
    <S.WrapperUserGeneric>
      <h3>Location:</h3>
      <span>{user.location}</span>
    </S.WrapperUserGeneric>
  );
};

const BlogInfo = () => {
  const { user } = useGithub();
  return (
    <S.WrapperUserGeneric>
      <h3>Blog:</h3>
      <a href={user.blog} target="_blank" rel="noreferrer">
        {user.blog}
      </a>
    </S.WrapperUserGeneric>
  );
};

const FollowersCount = () => {
  const { user } = useGithub();
  return (
    <div>
      <h4>Followers</h4>
      <span> {user.followers}</span>
    </div>
  );
};

const FollowingsCount = () => {
  const { user } = useGithub();
  return (
    <div>
      <h4>Followings</h4>
      <span> {user.following}</span>
    </div>
  );
};
const GistsCount = () => {
  const { user } = useGithub();
  return (
    <div>
      <h4>Gists</h4>
      <span> {user.public_gists}</span>
    </div>
  );
};
const ReposCount = () => {
  const { user } = useGithub();
  return (
    <div>
      <h4>Repos</h4>
      <span> {user.public_repos}</span>
    </div>
  );
};

const CountInfo = () => {
  return (
    <S.WrapperStatusCount>
      <FollowersCount />
      <FollowingsCount />
      <GistsCount />
      <ReposCount />
    </S.WrapperStatusCount>
  );
};

const UserInfo = () => {
  const { user } = useGithub();
  return (
    <S.WrapperInfoUser>
      <div>
        <h1>{user.name}</h1>
        <UsernameInfo />
        <CompanyInfo />
        <LocationInfo />
        <BlogInfo />
      </div>
      <CountInfo />
    </S.WrapperInfoUser>
  );
};

export const Profile = () => {
  const { user } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={user.avatar} alt="Avatar of user" />
      <UserInfo />
    </S.Wrapper>
  );
};

export default Profile;
