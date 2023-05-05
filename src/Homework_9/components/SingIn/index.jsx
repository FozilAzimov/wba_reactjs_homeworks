import React, { useRef } from 'react';

export default function SingIn() {

  const inpEmail = useRef();
  const inpPass = useRef();

  const Save = () => {
    if (inpEmail.current.value === 'webbrain' && inpPass.current.value === '123') {
      localStorage.setItem('token', true)
      JSON.parse(localStorage.getItem('token'))
      alert(`Ro'yxatdan o'tish muvaffaqqiyatli yakunlandi!
Home sahifaga o'tishga ruxsat berildi.`)
    }
    else {
      localStorage.setItem('token', false);
      JSON.parse(localStorage.getItem('token'))
      alert(`Name yoki Parol xato!
Iltimos qaytadan harakat qilib ko'ring.`)
      localStorage.removeItem('token');
    }
    inpEmail.current.value = null;
    inpPass.current.value = null;
  }

  return (
    <>
      <h1>SingIn Page</h1>
      <input placeholder='Name' ref={ inpEmail } type="text" />
      <input placeholder='Parol' ref={ inpPass } type="password" />
      <button onClick={ Save }>Sign up</button>
    </>
  )
}
