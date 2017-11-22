const sortByVoteScore = ({ byId, allIds }) => (
  allIds.sort((a, b) => {
    const current = byId[a]
    const next = byId[b]

    if (current.voteScore > next.voteScore) {
      return -1
    }

    if (next.voteScore > current.voteScore) {
      return 1
    }

    return 0
  })
)

export const sortByDate = ({ byId, allIds }) => (
  allIds.sort((a, b) => {
    const current = byId[a]
    const next = byId[b]
    if (current.timestamp > next.timestamp) {
      return 1
    }

    if (next.timestamp > current.timestamp) {
      return -1
    }

    return 0
  })
)

export { sortByVoteScore }
