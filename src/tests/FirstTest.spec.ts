import { User } from '@models/User'

test('It should be ok', () => {
  const user = new User()

  user.name = 'Luiz'

  expect(user.name).toEqual('Luiz')
})
