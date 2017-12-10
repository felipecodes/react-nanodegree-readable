import React from 'react'
import ThumbDown from 'material-ui/svg-icons/action/thumb-down'
import ThumbUp from 'material-ui/svg-icons/action/thumb-up'
import { IconWrapper } from './Styles'
import Wrap from '../Wrap'

const PostVoteControls = props =>
  <Wrap>
    <IconWrapper onClick={() => props.voteUp(props.post)}>
      <ThumbUp
        style={{
          width: '16px',
          color: '#08b135'
        }}
      />
    </IconWrapper>
    <IconWrapper onClick={() => props.voteDown(props.post)}>
      <ThumbDown
        style={{
          width: '16px',
          color: '#e02100'
        }}
      />
    </IconWrapper>
  </Wrap>

export default PostVoteControls
