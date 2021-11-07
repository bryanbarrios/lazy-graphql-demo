import { gql } from '@apollo/client';
import { CharacterInformationFragment } from '../fragments/character';

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      results {
        ...CharacterInformation
      }
    }
	${CharacterInformationFragment}
  }

  query getCharacter($id: ID!) {
    character(id: $id) {
      ...CharacterInformation
    }
	${CharacterInformationFragment}
  }
`;
