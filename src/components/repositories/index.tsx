import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github.hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
  const { user, repositories, starred, getUserRepos, getUserStarred } =
    useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (user.login) {
      if (getUserRepos !== undefined) getUserRepos(user.login);
      if (getUserStarred !== undefined) getUserStarred(user.login);
    }
    setHasUserForSearchrepos(user.public_repos > 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
