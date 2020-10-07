import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIRepo } from '../../@types';

import { 
  Container, 
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  const { username, reponame } = useParams();

  const [ data, setData ] = useState<APIRepo>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/repos/${username}/${reponame}`),
    ]).then( async (response) => {

      // if(response.data === 404){
      //   setData({error: 'User not found'});
      //   return;
      // }

      const repo = await response[0].json();
      
      setData(repo)
    })
  },[reponame, username]);

  if(!data?.name){
    return <h1>Loading...</h1>
  }
  
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={`/${data.owner.login}`}>{data.owner.login}</Link>

        <span>/</span>

        <Link className={'reponame'} to={``}>
          {data.name}
        </Link>
      </Breadcrumb>

      <p>{data.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{data.stargazers_count}</b>
          <span>starts</span>
        </li>

        <li>
          <ForkIcon />
          <b>{data.forks}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={`https://github.com/${data.owner.login}`} >
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
