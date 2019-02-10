import React from 'react';
import setDisplayName from 'recompose/setDisplayName';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import gql from 'graphql-tag';
import get from 'lodash/fp/get';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const FORM_NAME = 'LOGIN_FORM';

const InputField = ({ type, name, id, input }) => (
  <input
    className="pa2 input-reset ba bg-transparent w-100 measure"
    type={type}
    name={name}
    id={id}
    onChange={get('onChange')(input)}
  />
);

const PureLoginForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
    <div className="mt3">
      <label className="db fw4 lh-copy f6" htmlFor="email-address">
        Email address
      </label>
      <Field id="email" name="email" component={InputField} type="email" />
    </div>
    <div className="mt3">
      <label className="db fw4 lh-copy f6" htmlFor="password">
        Password
      </label>
      <Field
        id="password"
        name="password"
        component={InputField}
        type="password"
      />
    </div>
    <div className="mt3">
      <button
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  </form>
);

const prepareProps = withProps(({ mutate }) => ({
  onSubmit: values => {
    console.log('values', values);
    mutate({
      variables: values,
    });
  },
}));

const enhance = compose(
  setDisplayName('LoginForm'),
  connect(
    null,
    null
  ),
  graphql(LOGIN_MUTATION),
  prepareProps,
  reduxForm({
    form: FORM_NAME,
  })
);

export default enhance(PureLoginForm);
