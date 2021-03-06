import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const FormGroup = (props) => {
  const {
    className,
    cssModule,
    row,
    disabled,
    color,
    check,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    color ? `has-${color}` : false,
    row ? 'row' : false,
    check ? 'form-check' : 'form-group',
    check && disabled ? 'disabled' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
