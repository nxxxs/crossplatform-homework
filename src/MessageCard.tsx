
import React, { PureComponent } from 'react';

import { MessageDto } from './chat.d'

export class MessageCard extends PureComponent<{ message: MessageDto, own: boolean }>
{
    render() {
        return (
            <div className={"message-card" + (this.props.own ? " own" : "")}>
                <div className="bubble">
                    <span className="text">{this.props.message.content}</span>
                    <span className="time">
                        {new Date(this.props.message.timeStamp).toLocaleDateString()}
                    </span>
                </div>
            </div>
        );
    }
}