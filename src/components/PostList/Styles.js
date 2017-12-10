import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Row = styled.div`
  display: flex;
  padding-right: 1em;
  justify-content: space-between;
  align-items: ${({ verticalAlign }) =>
    verticalAlign ? 'center' : 'initial'};
`

export const List = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`

export const Item = styled.li`
  border-bottom: 1px solid #eee;
`

export const Details = styled.div`
  padding: 0 1em 1em 1em;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  padding-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`

export const CustomLink = styled(Link)`
  display: inline-block;
  padding: 16px;
  width: 100%;
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #ff1400;
  }
`

export const Score = styled.div`
  display: flex;
  align-items: center;
  padding-right: 6px;
  font-size: 14px;
  color: #555;
`
