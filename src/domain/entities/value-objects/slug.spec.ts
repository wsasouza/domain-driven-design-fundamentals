import { Slug } from './slug'

test('it should be able to create a new slug from text', () => {
  const slug = Slug.createFromText('Exa@@mplê Question Títle_')

  expect(slug.value).toEqual('example-question-title')
})
