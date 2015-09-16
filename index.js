'use strict';

var React = require('react');
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Range = React.createClass({
  displayName: 'Range',
  propTypes: {
    onChange: React.PropTypes.func,
    onMouseMove: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      type: 'range'
    };
  },
  onRangeChange: function(e) {
    if (this.props.onMouseMove) this.props.onMouseMove(e);
    if (e.buttons !== 1) return;
    if (this.props.onChange) this.props.onChange(e);
  },
  onRangeKeyDown: function(e) {
    if (this.props.onMouseMove) this.props.onMouseMove(e);
    if (this.props.onChange) this.props.onChange(e);
  },
  componentWillReceiveProps: function(props) {
    React.findDOMNode(this).value = props.value;
  },
  render: function() {
    var props = _extends({}, this.props, {
      defaultValue: this.props.value,
      onMouseMove: this.onRangeChange,
      onKeyDown: this.onRangeKeyDown,
      onChange: function() {}
    });
    delete props.value;
    return React.createElement(
      'input',
      props
    );
  }
});

module.exports = Range;
