import React from 'react'
import { List, ListItem } from 'material-ui'
import Box from '../common/Box'
import { CustomLink } from './Styles'

const CategoryList = props => (
  <Box>
    {!!props.categories.length && (
      <List>
        {props.categories.map(category => (
          <ListItem
            innerDivStyle={{padding: 0}}
            key={category.path}
          >
            <CustomLink to={`${category.path}`}>{category.name}</CustomLink>
          </ListItem>
        ))}
      </List>
    )}
  </Box>
)

export default CategoryList
