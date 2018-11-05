import React from 'react';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LinearProgress from '@material-ui/core/LinearProgress';

import Divider from '@material-ui/core/Divider';

import ReactLoading from 'react-loading';

import Pie from './Pie';

export default class ViewRecommendations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            progressCenter: 25,
            progress: 100,
            change: -100,
            sentiments: {},
            loading: true
        }
    }

    componentDidMount = async () => {
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

        try {
            const stockResponse = await fetch("http://localhost:5000/get_stock_portfolio", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    age: this.props.passedState.age,
                    money: this.props.passedState.money,
                    checked: {
                        laptop: this.props.passedState.laptop,
                        car: this.props.passedState.car,
                        college: this.props.passedState.college,
                        house: this.props.passedState.house,
                        retirement: this.props.passedState.retirement,
                        other: this.props.passedState.other
                    }
                })
            })
            const jsoned = await stockResponse.json()
            console.log(jsoned)
            this.props.setPassedState({
                tickers: jsoned.portfolio,
                risk: jsoned.riskIndex,
                descriptions: jsoned.descriptions,
                risks: jsoned.risks
            })
            localStorage.setItem("tickers", jsoned.portfolio)
        }
        catch(e) {
            console.log(e)
        }

        let sentimentObject = {}
        const companies = this.props.passedState.tickers
        companies.map(async (company) => {
            try {
                const response = await fetch("http://localhost:5000/get_sentiment", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        company
                    })
                })
                try {
                    console.log(response.body)
                    let json = await response.json()

                    console.log(json)
                    sentimentObject[company] = json.sentiment
                } catch (e) {
                    console.log("Error 2")
                    console.log(e)
                }

            } catch (e) {
                console.log(e)
            }

        })
        this.setState({
            sentiments: sentimentObject,
            loading: false
        })
    }

    render() {
        if (this.state.loading) {
            return <ReactLoading type={"bubbles"} color={'#f03d33'} height={667} width={375} />
        }

        console.log(this.props.passedState.risks)

        const new_data = this.props.passedState.tickers.map((ticker, index) => {
            return {
                "id": ticker,
                "label": this.props.passedState.descriptions[ticker] + " (" + ticker + ")",
                "value": Math.max(500 - (10 / this.props.passedState.risks[ticker]) - this.props.risk * 10, 0),
                "color": `hsl(${Math.floor(Math.random() * 500)}, 70%, 50%)`
            }
        })
        const data = [
            {
                "id": "INTC",
                "label": "Intel (INTC)",
                "value": Math.max(500 - this.props.risk * 30, 0),
                "color": "hsl(327, 70%, 50%)"
            },
            {
                "id": "AAPL",
                "label": "Apple (AAPL)",
                "value": Math.max(750 - this.props.risk * 56, 0),
                "color": "hsl(29, 70%, 50%)"
            },
            {
                "id": "MSFT",
                "label": "Microsoft (MSFT)",
                "value": this.props.risk * 54,
                "color": "hsl(261, 70%, 50%)"
            },
            {
                "id": "AMZN",
                "label": "Amazon (AMZN)",
                "value": this.props.risk * 35,
                "color": "hsl(355, 70%, 50%)"
            },
            {
                "id": "FB",
                "label": "Facebook (FB)",
                "value": this.props.risk * 45,
                "color": "hsl(161, 70%, 50%)"
            },
            {
                id: "HON",
                label: "Honeywell International (HON)",
                value: Math.max(543 - 43 * this.props.risk, 0),
                "color": "hsl(29, 70%, 50%)"
            },
            {
                id: "LOW",
                label: "Lowe's Companies, Inc. (LOW)",
                value: Math.max(435 - 36 * this.props.risk, 0),
                "color": "hsl(76, 70%, 50%)"
            },
            {
                id: "COST",
                label: "Costco Wholesale Corp (COST)",
                value: Math.max(376 - 47 * this.props.risk, 0),
                "color": "hsl(123, 70%, 50%)"
            },
            {
                id: "HRL",
                label: "Hormel Foods Corporation (HRL)",
                value: Math.max(364 - 36 * this.props.risk, 0),
                "color": "hsl(214, 70%, 50%)"
            },
            {
                id: "KO",
                label: "Coca-Cola Company (KO)",
                value: Math.max(365 - 39 * this.props.risk, 0),
                "color": "hsl(245, 70%, 50%)"
            }
        ];
        console.log(data)

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
                overflow: 'hidden',
                ...this.props.passStyle
            }}>
                <h1 style={{ textAlign: 'left' }}>Your Recommendations</h1>
                <Pie data={new_data} sentiments={this.state.sentiments} descriptions={this.props.passedState.descriptions}/>
            </div>

        )
    }
}