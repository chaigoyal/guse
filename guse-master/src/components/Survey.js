import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import BasicInformation from './BasicInformation';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input'

import InfoOutlined from '@material-ui/icons/InfoOutlined';
import SettingGoals from './SettingGoals';
import ViewRecommendations from './ViewRecommendations'
import PayPalLogo from './PayPalLogo';

import LeftSide from './LeftSide';

import AddCircle from '@material-ui/icons/AddCircle'
import RemoveCircle from '@material-ui/icons/RemoveCircle'


import { theme } from '../App';

export default class Survey extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            tips: [
                [
                    "Tip: keep track of your receipts so you can monitor your spending",
                    "Tip: start saving early so you can reap bigger rewards later in life",
                    "Tip: Learn more about trading funds at etf.com"
                ],
                [
                    "Tip: set reasonable and attainable goals",
                    "Tip: stay committed for the long haul so you can attain your goals",
                    "Tip: investing money long-term increases your gains exponentially over time"
                ],
                []
            ],
            opacity: 1.0,
            rating: 0,
            name: "",
            age: 0,
            amount: 0,
            laptop: false,
            car: false,
            college: false,
            house: false,
            retirement: false,
            other: false,
            tickers: []
        }
    }

    setPassedState = (newState) => {
        this.setState({
            ...newState
        })
    }

    render() {
        return (
            <div style={{
                flexDirection: 'row', height: '100%', width: '100%',
                display: 'flex', alignContent: 'center', alignItems: 'center', padding: 0,
                overflow: 'hidden'
            }}>
                <LeftSide /> 
                <Paper style={{
                    display: 'flex', alignContent: 'center',
                    justifyContent: 'center', padding: 0, height: '95%', width: '98%',
                    flexDirection: 'column', flexGrow: 2, margin: 10, marginTop: 0, marginBottom: 0,
                    backgroundColor: theme.palette.primary.main
                }}>
                    <div style={{ flexGrow: 2, padding: 15, display: 'flex' }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            height: '100%',
                            width: '100%'
                        }}>
                            <div style={{ marginTop: 20, backgroundColor: theme.palette.primary.main, height: '98%' }}>
                                <Stepper orientation='vertical' activeStep={this.state.step} style={{ backgroundColor: theme.palette.primary.main }}>
                                    <Step key={0}>
                                        <StepLabel style={{ cursor: 'pointer' }} onClick={() => this.setState({ step: 0 })}><p>Basic Information</p></StepLabel>
                                    </Step>
                                    <Step key={1}>
                                        <StepLabel style={{ cursor: 'pointer' }} onClick={() => this.setState({ step: 1 })}><p>Setting Goals</p></StepLabel>
                                    </Step>
                                    <Step key={2}>
                                        <StepLabel style={{ cursor: 'pointer' }} onClick={() => this.setState({ step: 2 })}><p>Your Recommendations</p></StepLabel>
                                    </Step>
                                </Stepper>
                            </div>
                            <div style={{ marginLeft: 10 }}>
                                <Divider style={{ height: this.state.step === 1 ? '100%' : this.state.step === 2 ? '85%' : '123%', width: 1, backgroundColor: 'white' }} />
                            </div>
                                {this.state.step === 0 ? <BasicInformation passStyle={{ opacity: this.state.opacity }} setPassedState={this.setPassedState}/> 
                                : this.state.step === 1 ? <SettingGoals passStyle={{ opacity: this.state.opacity }} setPassedState={this.setPassedState} passedState={this.state}/> 
                                : <ViewRecommendations passStyle={{ opacity: this.state.opacity }} risk={parseInt(this.state.rating)}  setPassedState={this.setPassedState} passedState={this.state} loading={this.state.loading}/>}
                            <div style={{ marginLeft: 10 }}>
                                <Divider style={{ height: this.state.step === 1 ? '100%' : this.state.step === 2 ? '85%' : '123%', width: 1, backgroundColor: 'white' }} />
                            </div>

                            {this.state.step !== 2 ? (<div style={{ flexGrow: 1, width: '8%', padding: 15 }}>
                                
                                    
                                    {this.state.tips[this.state.step].map(tip => <div style={{ display: 'flex', flexDirection: 'row', marginTop: 75 }}><InfoOutlined style={{ color: 'white' }}/><p style={{ fontSize: 14, marginTop: 0, marginLeft: 10, opacity: this.state.opacity }}>{tip}</p></div>)}
                                
                            </div>): <div style={{marginLeft: 20, width: '20%', marginTop: -15 }}>
                                <h4>Risk Rating</h4>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}>
                                    <Button mini={true} variant="fab" color="secondary" aria-label="Reduce Risk" disabled={this.state.rating === 0} onClick={() => this.setState({ rating: this.state.rating - 1 })}><RemoveCircle/></Button>
                                    <Input style={{ width: '20%', marginLeft: 20, marginRight: 20, color: 'white' }}disabled={true} value={this.state.rating} />
                                    <Button mini={true} variant="fab" color="secondary" aria-label="Increase Risk" disabled={this.state.rating === 10} onClick={() => this.setState({ rating: this.state.rating + 1 })} ><AddCircle /> </Button>
                                </div>
                                <p style={{ fontSize: 12 }}>Your risk rating indicates how tolerant you are to potential changes in market pricing. The higher your risk, the more willing you are
                                    to invest in stocks that have a lower chance of growth, but a much higher growth potential. The higher
                                    the stock's risk, the higher the reward.
                                </p>
                                <h4>Market Sentiment</h4>
                                <p style={{ fontSize: 12 }}>Market sentiment indicates how the nation and world at large feel about a company. Positive values for sentiment mean
                                    the world feels good about a company, while negative means the world feels a company is doing poorly.
                                </p>
                                <h4>Sharpe Ratio</h4>
                                <p style={{ fontSize: 12 }}>The Sharpe Ratio is a measure of the gains a stock produces adjusted for its risk level.
                                The higher this number is, the better.
                                </p>
                            </div>}
                        </div>
                    </div>
                    <Button variant="contained" onClick={() => {
                        if (this.state.step === 2) {
                            window.location.href = "http://localhost:3000/dashboard"
                            return;
                        }
                        setTimeout(() => {
                            this.setState({ step: this.state.step + 1 })
                        }, 300)
                        for(let i = 0; i < 5; i ++) {
                            setTimeout(() => {
                                this.setState({
                                    opacity: 1.0 - i * 0.2
                                })
                            }, i * 50 + 50)
                        }
                        for(let i = 0; i < 5; i ++) {
                            setTimeout(() => {
                                this.setState({
                                    opacity: 0.2 + i * 0.2
                                })
                            }, i * 50 + 300)
                        }
                    }} style={{
                        backgroundColor: this.state.step === 2 ? 'white' : theme.palette.secondary.main
                    }}>{this.state.step === 2 ? (
                    <div style={{ color: this.state.step === 2 ? '#363636' : 'white' }}>
                        Invest
                        <PayPalLogo />
                    </div>) : "Next"}</Button>
                </Paper>
            </div>
        );
    }
}