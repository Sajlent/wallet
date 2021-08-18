import React from 'react';
import clsx from 'clsx';

const Component = ({ isFullWidth, children }) => (
    <div className={ `component ${ clsx(isFullWidth && 'component--full-width') }` }>
        { children }
    </div>
);

export default Component;