'use strict'

var React = require('react');
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Range = React.createClass({
  displayName: 'Range',
  getDefaultProps: function() {
    return {
      type: 'range'
    }
  },
  onSlideChange: function(e) {
    if (e.buttons !== 1) return;
    this.props.onChange(e);
  },
  componentWillReceiveProps: function(props) {
    React.findDOMNode(this).value = props.value;
  },
  render: function() {
    var props = _extends({}, this.props, {
      defaultValue: this.props.value,
      onMouseMove: this.onSlideChange,
      onChange: function() {}
    });
    delete props.value;
    return React.createElement(
        'input',
        props
      )
  }
});

module.exports = Range;
