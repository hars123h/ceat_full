import React from 'react';
import user_img from '../images/user_img.png';
import lock_img from '../images/lock_img.png';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, getDocs, serverTimestamp } from 'firebase/firestore';
import db from '../firebase/config';
import { RotatingLines } from 'react-loader-spinner';
import apache_logo from '../images/apache_logo.png';
import axios from 'axios';
import BASE_URL from '../api_url';
import amaz_logi from '../images/amaz_logi.png';
import windharvester_logo from '../images/windharvester_logo.png';
import wind_login from '../images/wind_login.jpg';
import tuborg_logo from '../images/tuborg_logo.svg';
import asset0 from '../images/assets5/asset 0.png';
import asset1 from '../images/assets5/asset 1.png';
import lenskart_logo from '../images/lenskart_logo.png';
import jio from '../images/asml/jio.png';
import jlogo from '../images/asml/jlogo.jpg';
import boat_logo from '../images/asml/boat/boat_logo.jpg';
import register_logo from '../images/asml/boat/register_logo.jpg';


const Login = () => {

    const navigate = useNavigate();
    const auth = getAuth();
    const [mobno, setmobno] = useState('');
    const [pwd, setpwd] = useState('');
    const [bloackedUsers, setBlockedUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('Loading');
    const [toasterShow, setToasterShow] = useState(false);
    const [toasterText, setToasterText] = useState('');

    const toaster = (text) => {
        setToasterText(text);
        setToasterShow(true);
        setTimeout(()=>{
            setToasterShow(false);
        },5000);
    }


    useEffect(() => {
        document.body.style.backgroundColor = "rgb(255 255 255)";
        getBlockedUsers();
    }, []);

    const getBlockedUsers = async () => {
        const dataRes = await axios.get(`${BASE_URL}/get_blocked_users`).then(res=>res.data);
        var temp = [];
        dataRes.forEach((doc) => {
            //console.log(doc.data());
            temp.push(doc.user_id);
            setBlockedUsers(temp);
        });
    }

    const handleSignIn = async() => {
        if (bloackedUsers.includes(String(mobno))) {
            toaster('You are blocked by the administrator!');
            return;
        }
        setLoading(true);
        setText('Loading')
        
        await axios.post(`${BASE_URL}/login`, {mobno, pwd})
            .then(({data}) => {
                if(data.user_details===null) {
                    throw "Could not login/something went wrong";
                }
                //console.log(data);
                localStorage.setItem('uid',data.user_details._id);
                setText('Login Successful!');
                setTimeout(() => {
                    navigate('/home');
                    setLoading(false);
                }, 1000);
            })
            .catch(error => {
                //console.log(error);
                setText('Something went wrong!');
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
    }

    return (
        <div className='relative bg-white'>
            {toasterShow?<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex gap-2 mx-auto bg-black opacity-70 text-white px-2 py-1 rounded-md'>
                    <div>{toasterText}</div>
                </div>
            </div>:null}
            {loading  ? <div className='flex gap-2 items-center justify-center bg-black text-white py-[10px] px-4  rounded-[4px] opacity-70 absolute top-1/2 left-1/2 transform mt-[60px] -translate-x-1/2 -translate-y-1/2'>
                {text==='Loading' ? <div>
                    <RotatingLines strokeColor='white' width='15' />
                </div> : null}
                <div className='text-sm'>{text}</div>
            </div> : null}
            <div className='text-center'>
                <img src={register_logo} alt="hp_logo" className='m-auto md:w-2/6 sm:w-1/6 mt-10 mb-14' width={270} />
            </div>
            <div className='flex flex-col m-auto w-[79%]'>
                <div className=" items-center mb-3 p-2 mx-2 phoneno flex  bg-[#f1f1f1] rounded-md ">
                    <img src={asset0} alt="user" className='h-5 border-r-[1px] pr-2 border-solid border-gray-300' />
                    <input value={mobno} onChange={(e) => setmobno(e.target.value)} type="text" placeholder='Phone number' name="phone_no" id="phone_no" className='placeholder:text-gray-500 pl-1 bg-[#f1f1f1]  outline-none overflow-x-scroll' />
                </div>

                <div className=" items-center p-2 mx-2 passowrd flex  bg-[#f1f1f1] rounded-md ">
                    <img src={asset1} alt="user" className='h-5 border-r-[1px] pr-2 border-solid border-gray-300' />
                    <input value={pwd} onChange={(e) => setpwd(e.target.value)} type="password" placeholder='Login password' name="password" id="pwrd" className=' placeholder:text-gray-500 pl-1 bg-[#f1f1f1] outline-none overflow-x-scroll' />
                </div>
                {/*[#0096D5] */}
                <div className='mt-12 flex flex-col gap-6'>
                    <button onClick={handleSignIn} className='bg-[rgb(164,29,35)] w-full py-[10px] text-[20px] text-white rounded-full shadow-ceatShadow shadow-red-800
                    '>Login</button>
                    <button onClick={() => navigate('/register')} className='bg-[rgb(164,29,35)] w-full py-[10px] text-[20px] text-white rounded-full shadow-ceatShadow shadow-red-800
                    '>Register</button>
                </div>
                {/*[#379EFE] */}
                <div className="options flex justify-between mt-2">
                    {/* <div className='text-red-800 cursor-pointer' onClick={() => navigate('/register')}>Register</div> */}
                    {/* <div className='cursor-pointer text-red-800 ' onClick={() => navigate('/forgot')}>Forget password?</div> */}
                </div>

            </div>
        </div>
    )
}

export default Login