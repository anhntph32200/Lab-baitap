import React, { useState } from 'react';

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [footerContent, setFooterContent] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        setFooterContent(inputValue);
        setInputValue('');
    };

    return ( <
        div >
        <
        header >
        <
        h1 > Header < /h1> < /
        header > <
        main >
        <
        h2 > Main < /h2> <
        input type = "text"
        value = { inputValue }
        onChange = { handleInputChange }
        /> <
        button onClick = { handleSubmit } > Submit < /button> < /
        main > <
        footer >
        <
        h3 > Footer < /h3> <
        p > { footerContent } < /p> < /
        footer > <
        /div>
    );
};

export default App;