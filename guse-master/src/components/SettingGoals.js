import React from 'react';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LinearProgress from '@material-ui/core/LinearProgress';

import Divider from '@material-ui/core/Divider';

export default class SettingGoals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            progressCenter: 0,
            progress: 100,
            change: -100
        }
    }


    computeTime(props) {
        let total = 0;
        if (props.passedState.laptop) {
            total += 0.5
        }
        if (props.passedState.car) {
            total += 3
        }
        if (props.passedState.college) {
            total += 8
        }
        if (props.passedState.house) {
            total += 15
        }
        if (props.passedState.retirement) {
            total += 25
        }
        if (props.passedState.other) {
            total += 1
        }
        return total
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            progressCenter: this.computeTime(nextProps),
            progress: 20,
            change: -20
        })
        this.timer = setInterval(() => {
            this.setState({
                progress: this.state.progress + this.state.change,
                change: -1 * this.state.change * Math.random()
            })
        }, 500)
        setTimeout(() => {
            this.setState({
                progress: this.state.progressCenter,
                change: 0
            })
        }, 3000)
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
                <h1 style={{ textAlign: 'left' }}>Setting Goals</h1>
                <FormControlLabel label="Save for a phone/laptop" control={
                    <Checkbox color="primary" onChange={(e, c) => this.props.setPassedState({ laptop: c })}/>
                } />
                <FormControlLabel label="Save up for a car" control={
                    <Checkbox  color="primary" onChange={(e, c) => this.props.setPassedState({ car: c })}/>
                } />  
                <FormControlLabel label="Save up for college" control={
                    <Checkbox  color="primary" onChange={(e, c) => this.props.setPassedState({ college: c })}/>
                } />  
                <FormControlLabel label="Save up for a house" control={
                    <Checkbox  color="primary" onChange={(e, c) => this.props.setPassedState({ house: c })}/>
                } />  
                <FormControlLabel label="Save for retirement" control={
                    <Checkbox color="primary"  onChange={(e, c) => this.props.setPassedState({ retirement: c })}/>
                } /> 
                <FormControlLabel label="Other" control={
                    <Checkbox color="primary"  onChange={(e, c) => this.props.setPassedState({ other: c })}/>
                } /> 
                <Divider style={{
                    marginTop: 10,
                    marginBottom: 5
                }}/>
                <h3>Time Needed</h3>
                <LinearProgress variant="buffer" value={false} valueBuffer={this.state.progress * 5} />
                <p style={{ fontSize: 12 }}>{this.state.progressCenter} years</p>
            </div>

        )
    }
}