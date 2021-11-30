type Movie = {
  id: string
  displayName: string
}

const movie = (parent, args, context): Movie => ({
  id: '1234',
  displayName: 'Placeholder',
})

export default {
  Query: {
    movie,
  },
}
