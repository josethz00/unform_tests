import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';


export default function Input({name, ...rest}){

	const inputRef = useRef(null);
    const {fieldName, registerField, defaultValue, error} = useField(name);

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path:'value'
        })
    }, [fieldName, registerField]);

    return(
            <div>
                 <input ref={inputRef} defaultValue={defaultValue} {... rest} required />
                 { error && <span style={{ color: '#f20', display:'block', fontWeight:'lighter', fontSize:11}}>{error}</span>}
            </div>
               
    );
}