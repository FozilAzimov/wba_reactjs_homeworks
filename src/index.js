import React from 'react';
import ReactDOM from 'react-dom/client';

// 1-homework start
// import Section from './Homework_1/index';
// import './Homework_1/style.css';
// 1-homework end

// 2-homework start
// import State from './Homework_2/index';
// import './Homework_2/style.css';
// 2-homework end

// 3-homework start
// import './index.css';
// import Root from './Homework_3/root';
// 3-homework end

// 4-homework start
import './index.css';
import Root from './Homework_4/root';
// 4-homework end

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Section /> */ }

    {/* <State /> */ }

    {/* <Styled /> */ }

    <Root />
  </React.StrictMode>
);
