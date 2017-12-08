import React from 'react'
import { FlatButton } from 'material-ui'
import { CustomBox } from './Styles'

const style = {
  fontSize: '0.7em',
  paddingRight: '1em',
  paddingLeft: '1em'
}

const Controls = props => (
  <CustomBox>
    <FlatButton
      onClick={() => props.history.push('/admin/add/post')}
      style={style}
      secondary
    >
      Novo post
    </FlatButton>

    <FlatButton
      onClick={() => props.sortByVoteScore()}
      style={style}
      primary
    >
      Ordernar por quantidade de votos
    </FlatButton>

    <FlatButton
      onClick={() => props.sortByDate()}
      style={style}
      primary
    >
      Ordernar por data de criação
    </FlatButton>
  </CustomBox>
)


export default Controls
