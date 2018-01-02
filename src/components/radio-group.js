import React from 'react';

class RadioGroup extends React.Component {

    radioGroup() {
        let imgFileNames = this.props.imgFileNames;
        let {label, input} = this.props;

        return imgFileNames.map((file, index) => {
            return (
            <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-4" key={index}>
              <div className="center-horizontal">
                <input type="radio"
                  name="avatar"
                  value={file}
                  id={file}
                  onChange={event => input.onChange(file)}
                />
                <label htmlFor={file}>
                  <img className="radio-avatar" src={`/media/avatars/${file}.png`} alt="avatar" />
                </label>
              </div>
            </div>)
        });
    }


    render() {
        return (
            <div className="avatar-form pure-g">
                {this.radioGroup()}
            </div>
        )
    }
}

export default RadioGroup;
