'use strict';

var PropTypes = require('prop-types');

var React = require('react');
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class Range extends React.Component {
  static displayName = 'Range';

  static propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMouseMove: PropTypes.func
  };

  static defaultProps = {
    type: 'range',
    onChange: function(){},
    onClick: function(){},
    onKeyDown: function(){},
    onMouseMove: function(){}
  };

  onRangeChange = (e) => {
    this.props.onMouseMove(e);
    if (e.buttons !== 1 && e.which !== 1) return;
    this.props.onChange(e);
  };

  onRangeClick = (e) => {
    this.props.onClick(e);
    this.props.onChange(e);
  };

  onRangeKeyDown = (e) => {
    this.props.onKeyDown(e);
    this.props.onChange(e);
  };

  setRangeRef = (ref) => {
    this.range = ref;
  };

  componentWillReceiveProps(props) {
    this.range.value = props.value;
  }

  render() {
    var props = _extends({}, this.props, {
      defaultValue: this.props.value,
      onClick: this.onRangeClick,
      onKeyDown: this.onRangeKeyDown,
      onMouseMove: this.onRangeChange,
      onChange: function() {},
      ref: this.setRangeRef
    });
    delete props.value;
    return React.createElement(
      'input',
      props
    );
  }
}

module.exports = Range;
