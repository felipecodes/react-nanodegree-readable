import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
`

const List = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`

const Item = styled.li`
  display: flex;
  border-bottom: 1px solid #eee;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  padding-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`

const CustomLink = styled(Link)`
  display: inline-block;
  padding: 16px;
  width: 100%;
  text-decoration: none;
  color: #000000;
`

const Score = styled.div`
  display: flex;
  align-items: center;
  padding-right: 6px;
  font-size: 14px;
  color: #555;
`

export { Wrapper, List, Item, Score, IconWrapper, CustomLink }
