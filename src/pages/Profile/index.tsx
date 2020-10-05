import React from 'react';

import { Container,Main,LeftSide,RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username='gabrielpdev'
            name={`Gabriel Pereira`}
            avatarUrl={`https://github.com/gabrielpdev.png`}
            followers={1230}
            following={321}
            company={`Apiki`}
            location={'Mantena, Minas Gerais, Brazil'}
            email={'gabriel9938@gmail.com'}
            blog={'linkedin.com/gabriel-pereira'}
          />
        </LeftSide>

        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
