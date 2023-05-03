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
// import './index.css';
// import Root from './Homework_4/root';
// 4-homework end

// 5-homework start
// import './index.css';
// import Root from './Homework_5/root';
// 5-homework end

// 6-homework start
// import './index.css';
// import Root from './Homework_6/root';
// 6-homework end

// 7-homework start
// import './index.css';
// import Root from './Homework_7/root';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// 7-homework end

// 8-homework start
import './index.css';
import Root from './Homework_8/root';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// 8-homework end

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* 1- <Section /> */ }

    {/* 2 - <State /> */ }

    {/* 3 - <Styled /> */ }

    {/* 4 - <Root /> */ }

    {/* 5 - <Root /> */ }

    {/* 6 - <Root /> */ }

    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </>
);
