import * as sortUtils from './sortUtils'

export const sortByDate = ({ byId, allIds }) => (
  allIds.sort((a, b) =>
    sortUtils.sortByBig(
      byId[a].timestamp,
      byId[b].timestamp
    )
  )
)
