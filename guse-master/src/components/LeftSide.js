import React from 'react';
import Paper from '@material-ui/core/Paper';

import { theme } from '../App';

export default class LeftSide extends React.Component {
    render() {
        return (
            <Paper style={{
                display: 'flex',
                padding: 0, height: '100%', width: '15%', flexDirection: 'column', justifyContent: 'left',
                backgroundColor: theme.palette.primary.main
            }}>
                <div style={{ display: 'flex', padding: 0, minWidth: 95, minHeight: 95, marginTop: 40 }}>
                    <div style={{
                        display: 'flex',
                        backgroundPosition: 'center', backgroundSize: 'cover',
                        backgroundImage: "url(https://i.imgur.com/XP0eBVN.png)",
                        flexGrow: 2
                    }}>
                    </div>
                </div>
            </Paper>
        )
    }
}