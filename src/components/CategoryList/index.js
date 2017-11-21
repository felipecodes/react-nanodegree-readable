import React from 'react'
import { List, ListItem } from 'material-ui'
import { Wrapper, CustomLink } from './Styles'

const CategoryList = props => (
  <Wrapper>
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
  </Wrapper>
)

export default CategoryList
