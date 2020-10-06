import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={`/gabrielpdev`}>gabrielpdev</Link>

        <span>/</span>

        <Link className={'reponame'} to={`/gabrielpdev/nomeDoRepo`}>
          Nome do repositorio
        </Link>
      </Breadcrumb>

      <p>Descrição do repositorio</p>

      <Stats>
        <li>
          <StarIcon />
          <b>10</b>
          <span>starts</span>
        </li>

        <li>
          <ForkIcon />
          <b>1</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href='https://github.com/gabrielpdev' >
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
