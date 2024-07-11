import { useState, React } from "react";
import Input from "../components/input";
import Button from "../components/button"
import { Link } from "react-router-dom";
import Alert from "../components/alert";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div
            className="flex md:flex-row flex-col items-center justify-evenly bg-green-800 gap-[2rem] py-4 w-full "
           >
            <div className="text-white text-md">
                <h1 className="text-xl md:text-2xl font-semibold pb-6">Contact Us</h1>
                <span className="pb-6 ">
                    <p className="flex flex-row gap-2"> <FaPhoneVolume /> +234-9011415858</p>
                    <p className="flex flex-row gap-2"><HiOutlineMailOpen />
                     opaltutorials@gmail.com</p>
                </span>
                <span>
                    <p className="flex flex-row gap-2"><IoLocationOutline /> Nwaniba, Uyo</p>
                    <p className="pb-6 flex flex-row gap-2"><GrLocationPin />
                    Nigeria</p>
                </span>
                <div className="text-white text-md">
                <h1 className="text-xl md:text-2xl font-semibold pb-2">Quick Links</h1>
                <span className="flex flex-col pb-6">
                    <a href='#aboutus' className="underline text-yellow-500 hover:text-red-500 text-md">About us</a>
                    <a href='#pastevent' className="underline text-yellow-500 hover:text-red-500 text-md">Past events</a>
                    <a href='#upcomingevent' className="underline text-yellow-500 hover:text-red-500 text-md">Upcoming events</a>
                    <a href='contactus' className="underline text-yellow-500 hover:text-red-500 text-md">Contact us</a>
                    <Link to={"/Gallery"} className="underline text-yellow-500 hover:text-red-500 text-md">Gallery</Link>
                </span>
                

            </div>

            <div className="flex flex-row gap-6">
               <a href=""><IoLogoFacebook size={24} />
               </a>
               <a href=""><FaInstagram size={24}/>
               </a>
               <a href=""><FaWhatsapp size={24}/>
               </a>
            </div>
            </div>
            
            
            <form className="p-6"
                onSubmit={handleSubmit}>
                <div className="">
                    <p className="font-semibold text-white text-md md:text-xl">Name (required)</p>
                    <Input
                        type="text"
                        placeholder="Enter your Name"
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <p className="font-semibold text-white text-md md:text-xl">Email (required)</p>
                    <Input
                        type="text"
                        placeholder="example@gmail.com"
                        onChange={handleChange}
                    />
                </div>
                <div className="pb-8">
                <p className="font-semibold text-white text-md md:text-xl">Message</p>
    
                    <textarea name="" id="" className="h-[100px] w-full rounded-2xl">

                    </textarea>
                </div>

                <Button 
                type="submit"
                title="Submit"
                textcolor={'text-white'}
                className="rounded-md bg-[#f79f17] text-white"
                onClick={<Alert/>}
        />
        
            </form>


        </div>
    )
}
export default Footer;

// Footer.prototype={
//     value: Proptypes.string,
//     className: Proptypes.string,
//     type: Proptypes.string,
//     id: Proptypes.string,
// }