import React, { useRef, useState, useEffect } from 'react';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';

function Login() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const telRef = useRef(null);
    const davlatRef = useRef(null);
    const shaharRef = useRef(null);
    const yashashjoyRef = useRef(null);
    const hodimlarRef = useRef(null);
    const izohRef = useRef(null);
    const dunyoRef = useRef(null);
    const instagramRef = useRef(null);
    const telegramRef = useRef(null);
    const foosebukRef = useRef(null);
    const gitHubRef = useRef(null);

    function keyingisi(e) {
        e.preventDefault();

        if (
            !nameRef.current.value || !emailRef.current || !telRef.current ||
            !davlatRef.current || !shaharRef.current || !yashashjoyRef.current ||
            !hodimlarRef.current || !izohRef.current
        ) {
            console.error("Biror bir input topilmadi.");
            return;
        }

        let data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            tel: telRef.current.value,
            davlat: davlatRef.current.value,
            shahar: shaharRef.current.value,
            yashashjoy: yashashjoyRef.current.value,
            hodimlar: hodimlarRef.current.value,
            izoh: izohRef.current.value,
            dunyo: dunyoRef.current ? dunyoRef.current.value : "",
            instagram: instagramRef.current ? instagramRef.current.value : "",
            telegram: telegramRef.current ? telegramRef.current.value : "",
            feyzbuk: foosebukRef.current ? foosebukRef.current.value : "",
            github: gitHubRef.current ? gitHubRef.current.value : "",
        };

        localStorage.setItem('data', JSON.stringify(data));
        console.log(data);
    }

    const [dunyo1, setDunyo1] = useState(false);
    const [instagram1, setInstagram1] = useState(false);
    const [telegram1, setTelegram1] = useState(false);
    const [feyzbuk1, setFeyzbuk1] = useState(false);
    const [github1, setGithub1] = useState(false);

    function korinmas() {
        setDunyo1(false);
        setInstagram1(false);
        setTelegram1(false);
        setFeyzbuk1(false);
        setGithub1(false);
    }
   function data1(){
    localStorage.setItem("dunyo",dunyoRef.current.value)
   }
   function data2(){
    localStorage.setItem("instagram",instagramRef.current.value)
   }
   function data3(){
    localStorage.setItem("telegram",telegramRef.current.value)
   }
   function data4(){
    localStorage.setItem("foosebuk",foosebukRef.current.value)
   }
   function data5(){
    localStorage.setItem("gethub",gitHubRef.current.value)
   }
    return (
        <div className='div-2_1 bg-base-100 drop-shadow-2xl'>
            <div className='div-3'>
                <form action="">
                    <div className='div-4'>
                        <h1>Kompaniya ma’lumotlari</h1>
                        <p className='p-1'>Kompaniya haqidagi ma’lumotlarni kiriting</p>
                        <div className='div-5'></div>
                        <div className='div-6'>
                            <label className='label' htmlFor="name1">Kompaniya nomi *</label>
                            <input ref={nameRef} id='name1' type="text" placeholder="Kompaniya nomi" className="input input-bordered w-full " />
                            <label className='label' htmlFor="email">Email *</label>
                            <input ref={emailRef} id='email' type="text" placeholder="Email" className="input input-bordered w-full " />
                            <label className='label' htmlFor="tel">Telefon raqami *</label>
                            <input ref={telRef} id='tel' type="text" placeholder="UZ +9989" className="input input-bordered w-full" />
                        </div>
                        <p className='label'>Linklar *</p>
                        <div className='div-10'>
                            <div className='div-7'>
                                <button onClick={(e) => { e.preventDefault(); korinmas(); setDunyo1(true); }}><img src={img5} alt="" /></button>
                                <button onClick={(e) => { e.preventDefault(); korinmas(); setInstagram1(true); }}><img src={img2} alt="" /></button>
                                <button onClick={(e) => { e.preventDefault(); korinmas(); setTelegram1(true); }}><img src={img4} alt="" /></button>
                                <button onClick={(e) => { e.preventDefault(); korinmas(); setFeyzbuk1(true); }}><img src={img1} alt="" /></button>
                                <button onClick={(e) => { e.preventDefault(); korinmas(); setGithub1(true); }}><img src={img3} alt="" /></button>
                            </div>
                            {dunyo1 && <input  ref={dunyoRef} id='dunyo' type="text" placeholder="Link kiriting" className="input input-bordered w-full" />}
                            {instagram1 && <input  ref={instagramRef} id='instagram' type="text" placeholder="Instagram link" className="input input-bordered w-full" />}
                            {telegram1 && <input  ref={telegramRef} id='telegram' type="text" placeholder="Telegram link" className="input input-bordered w-full" />}
                            {feyzbuk1 && <input   ref={foosebukRef} id='feyzbuk' type="text" placeholder="Facebook link" className="input input-bordered w-full" />}
                            {github1 && <input  ref={gitHubRef} id='github' type="text" placeholder="GitHub link" className="input input-bordered w-full" />}
                        </div>

                        <div className='div-8'>
                            <div>
                                <p className='label'>Davlat *</p>
                                <select ref={davlatRef} className="select select-bordered w-full ">
                                    <option disabled defaultValue>Davlat</option>
                                    <option>Uz</option>
                                    <option>Rs</option>
                                </select>
                            </div>
                            <div>
                                <p className='label'>Shahar *</p>
                                <select ref={shaharRef} className="select select-bordered w-full ">
                                    <option disabled defaultValue>Shahar</option>
                                    <option>Fargona</option>
                                    <option>Toshkent</option>
                                </select>
                            </div>
                        </div>
                        <div className='div-6'>
                            <label className='label' htmlFor="yashashjoy">Yashash joyi *</label>
                            <input  ref={yashashjoyRef} id='yashashjoy' type="text" placeholder="Joy" className="input input-bordered w-full " />
                            <label className='label' htmlFor="hodimlar">Hodimlar soni *</label>
                            <input ref={hodimlarRef} id='hodimlar' type="text" placeholder="Hodimlar soni" className="input input-bordered w-full " />
                            <label className='label' htmlFor="izoh">Izoh *</label>
                            <textarea ref={izohRef} className='textarea textarea1 textarea-bordered' id="izoh" placeholder='Kompaniya haqida izoh qoldiring' cols="30" rows="10" ></textarea>
                        </div>
                        <div className='div-9'>
                            <button>Ortga</button>
                            <button type='submit' onClick={(e) => { keyingisi(e); }}>Keyingisi</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
