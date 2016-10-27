import React, { Component } from 'react';
export default class Input extends Component {
    displayName: 'Input';
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
        this.handleChange = this.handleChange.bind(this);
    };
    componentWillReceiveProps(nextProps) {
        console.log('Input componentWillReceiveProps value:' + nextProps.value);
        if (this.props.value != nextProps.value) {
            this.setState({ value: nextProps.value });
        }
    };
    handleChange(event) {
        this.setState({value: event.target.value});
    };
    render() {
        return <input value={this.state.value} 
                    className={this.props.className}
                    data-autoajax={this.props.dataAutoajax}
                    data-val={this.props.dataVal}
                    data-val-length-min={this.props.dataValLengthMin}
                    data-val-length-max={this.props.dataValLengthMax}
                    data-val-length={this.props.dataValLength}
                    data-val-required={this.props.dataValRequired}
                    id={this.props.id}
                    name={this.props.name}
                    type={this.props.type}
                    onChange={this.handleChange} />

;}
};
Input.propTypes= 
{
    value:React.PropTypes.string,
    className:React.PropTypes.string,
    dataAutoajax: React.PropTypes.bool,
    dataVal:React.PropTypes.bool,
    dataValLengthMin:React.PropTypes.number,
    dataValLengthMax:React.PropTypes.number,
    dataValLength:React.PropTypes.string,
    dataValRequired:React.PropTypes.string,
    id:React.PropTypes.string,
    name:React.PropTypes.string,
    type:React.PropTypes.string,
    readOnly:React.PropTypes.bool
}
Input.defaultProps =
{
    value:'',
    className:'form-control',
    dataAutoajax: true,
    dataVal:true,
    dataValLengthMin:5,
    dataValLengthMax:100,
    dataValLength:'Användare måste vara mellan 5 och 100 tecken',
    dataValRequired:'Användare får inte vara tom',
    id:'email',
    name:'email',
    type:'text'
}