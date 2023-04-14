import { User } from './user.typeorm';

describe('User', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
