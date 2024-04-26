// in MessageParser.js
import React, { useState } from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        actions.handleOverall(message)

    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;