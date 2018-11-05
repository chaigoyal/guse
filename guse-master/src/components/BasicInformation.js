import React from 'react';



import Input from '@material-ui/core/Input';


export default class BasicInformation extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div style={{
                padding: 10,
                paddingLeft: 25,
                display: 'flex',
                alignContent: 'left',
                flexDirection: 'column',
                alignItems: 'left',
                flexGrow: 2,
                width: '27%',
                ...this.props.passStyle
            }}>
                <h1 style={{ textAlign: 'left' }}>Basic Information</h1>
                <p style={{ textAlign: 'left' }}>Full Name</p>
                <Input placeholder="John Doe" style={{ width: '50%', margin: 10, marginLeft: 0 }} onChange={(e) => this.props.setPassedState({ name: e.target.value })}/>
                <p style={{ textAlign: 'left' }}>Age</p>
                <Input placeholder="18" style={{ width: '5%', margin: 10, marginLeft: 0 }} onChange={(e) => this.props.setPassedState({ age: parseInt(e.target.value) })} />
                <p style={{ textAlign: 'left' }}>Amount to Save ($)</p>
                <Input placeholder="5000.00" style={{ width: '15%', margin: 10, marginLeft: 0 }} onChange={(e) => this.props.setPassedState({ amount: parseInt(e.target.value) })}/>
            </div>

        )
    }
}