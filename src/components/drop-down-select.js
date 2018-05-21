import React from "react";

class DropDownSelect extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  renderSelectOptions = (output, i) => (
    <option key={i} value={this.props.values[i]}>
      {output}
    </option>
  );

  render() {
    const { input } = this.props;
    return (
      <div>
        <select {...input}>
          <option value="">Select</option>
          {this.props.options.map(this.renderSelectOptions)}
        </select>
      </div>
    );
  }
}

export default DropDownSelect;
