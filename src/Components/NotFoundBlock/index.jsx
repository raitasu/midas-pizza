import React from 'react';
import classes from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={classes.main}>
            <h1>
                <span>:(</span>
                <br/>
                Not found
            </h1>
        </div>
    );
};

export default NotFoundBlock;