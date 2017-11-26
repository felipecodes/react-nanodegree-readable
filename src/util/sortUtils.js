export const sortByBig = (a, b) => {
  if (a > b) {
    return -1
  }

  if (b > a) {
    return 1
  }

  return 0
}

export const sortByVoteScore = ({ byId, allIds }) => (
  allIds.sort((a, b) =>
    sortByBig(
      byId[a].voteScore,
      byId[b].voteScore
    )
  )
)
