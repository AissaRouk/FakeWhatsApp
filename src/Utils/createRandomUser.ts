import {faker} from '@faker-js/faker';
import {Contact} from '../Types/Contact';

export default function createRandomUser(): Contact {
  return {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    picture: faker.image.urlLoremFlickr({category: 'people'}),
  };
}
