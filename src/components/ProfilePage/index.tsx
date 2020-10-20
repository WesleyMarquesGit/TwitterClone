import React from 'react'

import Feed from '../Feed'
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButtom,
} from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButtom outlined>Editar Perfil</EditButtom>
        <h1>Wesley Marques</h1>
        <h2>@Wesley_marques</h2>
        <p>
          Developer at <a href="https://nave.rs/">@nave.rs</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Rio Grande do Sul, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 09 de Dezembro de 1994
          </li>
        </ul>
        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>1230</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  )
}

export default ProfilePage
