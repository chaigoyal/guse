import React from 'react';

import Button from '@material-ui/core/Button';

export default class Home extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: '#363636', height: '105%', width: '100%', marginTop: -25,
            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflowY: 'hidden' }}>
                <div style={{ display: 'flex', padding: 0, minWidth: 95, minHeight: 95, marginTop: 40 }}>
                    <div style={{
                        display: 'flex',
                        backgroundPosition: 'center', backgroundSize: 'cover',
                        backgroundImage: "url(https://i.imgur.com/XP0eBVN.png)",
                        flexGrow: 2
                    }}>
                    </div>
                </div>
                <h1 style={{ color: 'white', marginBottom: 50 }}>
                    Welcome to Guse, the #1 platform for your financial needs.
                </h1>
                <Button onClick={() => {
                    window.location.href = "http://localhost:3000/survey"
                }}>START</Button>
            </div>
        );
    }
}