import React, {useRef, useEffect} from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import * as Yup from 'yup';

import './App.css';

import Input from './components/Form/input';

function App() {


  const formRef = useRef(null);


  async function handleSubmit(data, {reset}){
    /*if(data.name===""){
        formRef.current.setErrors({
          name:'O nome é obrigatório',
          address:{
            city:'O endereço deve ser preenchido',
          }
        });
    }*/
      try {

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
        password: Yup.string().min(6, 'No mínimo 6 caracteres').max(25, 'Muito grande').required('Esse campo é obrigatório'),
        address: Yup.object().shape({
          city: Yup.string().min(3, 'No mínimo 3 caracteres').max(30, 'Muito grande').required('Esse campo é obrigatório'),
          zipcode: Yup.string().min(6, 'No mínimo 6 caracteres').max(11, 'Muito grande').required('Esse campo é obrigatório'),
          number: Yup.number().max(6, 'Esse número residencial não existe').required('Esse campo é obrigatório')
        })
      });

      await schema.validate(data, {
        abortEarly: false,
      })

      console.log(data);
      reset();
      }
      catch(err){
          if(err instanceof Yup.ValidationError){
            const errorMessages = {};

            err.inner.forEach(error=>{
              errorMessages[error.path] = error.message;
            });

            formRef.current.setErrors(errorMessages);
          }
      }
  }

  useEffect(()=>{
    setTimeout(()=>{
        formRef.current.setData({
          name:'Josefiii',
          email:'jtsoares17@hotmail.com'
        })
    }, 2000);
  }, []);

  return (
    <div className="App">
        <h1>Formulários Unform</h1>
        <br />
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Input type="text" name="name" />
            <Input type="email" name="email" />
            <Input type="password" name="password" />

            <Scope path="address">
              <Input name="street" />
              <Input name="zipcode" />
              <Input name="neighborhood" />
              <Input name="city" />
              <Input name="state" />
              <Input name="number" />
            </Scope>
            
            <button type="submit">Enviar</button>
        </Form>
    </div>
  
  );
}

export default App;
