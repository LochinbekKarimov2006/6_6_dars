import React, { useRef, useState, useEffect } from 'react';

function Abaut() {
    let [data, setData] = useState(false);
    let nameRef = useRef("");
    let emailRef = useRef("");

    useEffect(() => {
        if (data) {
            nameRef.current.value = localStorage.getItem('name') || "";
        } else {
            emailRef.current.value = localStorage.getItem('email') || "";
        }
    }, [data]);

    const handleNameChange = () => {
        localStorage.setItem('name', nameRef.current.value);
    };

    const handleEmailChange = () => {
        localStorage.setItem('email', emailRef.current.value);
    };

    return (
        <div className='py-[20%]'>
            {data ? (
                <input
                    className='input'
                    ref={nameRef}
                    type='text'
                    placeholder='name'
                    onChange={handleNameChange}
                />
            ) : (
                <input
                    className='input'
                    ref={emailRef}
                    type='text'
                    placeholder='email'
                    onChange={handleEmailChange}
                />
            )}
            <button className='btn' onClick={() => setData(true)}>salom</button>
            <button className='btn' onClick={() => setData(false)}>hayir</button>
        </div>
    );
}

export default Abaut;
