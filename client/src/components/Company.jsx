import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';
import asset43 from '../images/assets4/asset 0.jpeg'
import lenskart_logo from '../images/lenskart_logo.png';
import jio from '../images/asml/jio.png'
import company from '../images/asml/company.jpg'
import company2 from '../images/asml/company2.jpg'
import company3 from '../images/asml/company3.jpg'
import company4 from '../images/asml/company4.jpg'

import ceat_company1 from '../images/asml/ceat_company1.jpg';
import ceat_company2 from '../images/asml/ceat_company2.jpg';
import ceat_company3 from '../images/asml/ceat_company3.jpg';
import company_image from '../images/asml/boat/company_image.jpg';

const Company = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white w-full '>
            {/* [#2e9afe] */}
            <div className="options text-center text-white bg-[rgb(164,29,35)] py-2 px-1  items-center text-lg flex ">
                <svg xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate('/home')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-4 h-4   storke-white  cursor-pointer stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <div className="flex-grow">Company Profile</div>
            </div>



            <div className='flex flex-col w-[88%] mx-auto justify-between items-center p-2'>
                <div className="flex items-center justify-between px-2 shadow-sm shadow-gray-400 py-3 mt-4 rounded-md w-full mx-auto">
                    <div className='text-sm'>Company Profile</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-4 h-4 stroke-gray-400 rotate-180  cursor-pointer ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                </div>

                <div className="hp_company mt-4">
                    <div className='font-semibold'>(about us)</div>
                    <img src={company_image} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={320} />
                </div>

                <div className="flex flex-col gap-2 px-2  py-2 mt-1 rounded-md w-full mx-auto">
                    {/* <div className='font-semibold'>CEAT</div> */}
                    <div className='text-[16px] font-semibold'>
                        Guidelines for Lodging complaint
                        <br /><br />
                        1. Vigilance Department deals mainly with matters related to corruption and matters having ‘Vigilance Angle’. Complaints are handled as per the Complaint Handling Policy stipulated in the Vigilance Manual (updated 2021) (Content is in English) of the Central Vigilance Commission.
                        <br /><br />
                        2. Information received from contractors, vendors, suppliers, employees and general public about corruption, malpractice or misconduct on the part of ONGC personnel will be considered as a complaint.
                        <br /><br />
                        3.Complainants should lodge complaints only regarding issues having vigilance angle and which are not part of any litigation in any courts, tribunals, etc., i.e. the matter should not be sub-judice. Complaints should be genuine and not malicious, vexatious or frivolous. Complaint should not be biased or based on any personal grievances, not having any vigilance angle as such.
                        <br /><br />
                        4. Complaint must be brief, contain factual details, verifiable facts and not contain vague/frivolous/absurd information. Complainant can attach his/her complaint in a single file in PDF/WORD/JPG format of max. size 20MB.
                        <br /><br />
                        5. After receiving the complaint, ONGC will seek confirmation from the complainant for owning or disowning the complaint, as the case may be, together with copy of his/her identity proof through post as per CVC Manual. Only after receiving complainant's confirmation, further action on the complaint will be taken by Vigilance. It is therefore, advised that complainant provides his/her proper name and full address. If on verification, complaint is found to be pseudonymous, it will be filed without any action.
                    </div>

                </div>




            </div>


        </div>
    )
}

export default Company