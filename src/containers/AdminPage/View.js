import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'material-ui'
import { Snackbar } from 'material-ui'
import { RaisedButton } from 'material-ui'
import { Grid } from '../../components/Grid'
import { Form } from './Styles'

const rootStyle = { width: '100%' }
const inputStyle = { fontSize: '14px' }

const View = props => (
  <Grid>
    <Form onSubmit={props.handleSubmit}>
      <TextField
        multiLine
        style={rootStyle}
        inputStyle={inputStyle}
        name={'author'}
        value={props.values.author}
        errorText={props.errors.author}
        danger={!!props.errors.author}
        floatingLabelText={'Type your username'}
        onChange={props.handleChange}
      />

      <TextField
        multiLine
        style={rootStyle}
        inputStyle={inputStyle}
        name={'title'}
        value={props.values.title}
        errorText={props.errors.title}
        danger={!!props.errors.title}
        floatingLabelText={'Type your post title'}
        onChange={props.handleChange}
      />

      <TextField
        multiLine
        style={rootStyle}
        inputStyle={inputStyle}
        name={'category'}
        value={props.values.category}
        errorText={props.errors.category}
        danger={!!props.errors.category}
        floatingLabelText={'Type your post category'}
        onChange={props.handleChange}
      />

      <TextField
        multiLine
        style={rootStyle}
        inputStyle={inputStyle}
        name={'body'}
        value={props.values.body}
        errorText={props.errors.body}
        danger={!!props.errors.body}
        floatingLabelText={'Type your post body'}
        onChange={props.handleChange}
      />

      <RaisedButton
        primary
        buttonStyle={{color: '#fff'}}
        style={{marginTop: '16px'}}
        type={'submit'}
      >
        Save
      </RaisedButton>
    </Form>

    <Snackbar
      open={props.open}
      message={'saved'}
      autoHideDuration={4000}
      onRequestClose={props.handleRequestClose}
    />
  </Grid>
)

View.propTypes = {
  values: PropTypes.object
}

export default View
