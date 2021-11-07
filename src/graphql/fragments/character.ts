import { gql } from '@apollo/client';

export const CharacterInformationFragment = gql`
  fragment CharacterInformation on Character {
    __typename
    id
    name
    gender
    image
    species
    location {
      name
    }
  }
`;
