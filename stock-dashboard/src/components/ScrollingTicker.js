// ScrollingMarquee.js
import React from 'react';
import Marquee from 'react-fast-marquee';

const ScrollingTicker = ({ data }) => {
    return (
        <Marquee gradient={false} speed={50}>
            {data.map((index) => (
                <span
                    key={index.symbol}
                    style={{
                        color: index.change >= 0 ? 'green' : 'red',
                        marginRight: '1rem',
                    }}
                >
                    {index.name} - {index.lastPrice} ({index.change >= 0 ? '+' : ''}{index.change}%)
                </span>
            ))}
        </Marquee>
    );
};

export default ScrollingTicker;