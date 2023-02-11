import TextProp from "./props/TextProp";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import FaceIcon from '@mui/icons-material/Face';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IconProp from "./props/IconProp";
import InputProp from "./props/InputProp";
import { useDispatch, useSelector } from "react-redux";
import { navCenter, navToLeft, selectToggle, toggleHide, toggleShow } from "@/reducers/autoToggleSlice/autoToggleSlice";
import { useEffect } from "react";

const NavRight = [
    {
        id:1,
        icon:<MailOutlineIcon/>,
    },
    {
        id:2,
        icon:<NotificationsNoneIcon/>,
    },
    {   
        id:3,
        icon:<FaceIcon/>,
    }
]


const Navbar = () => {

    const toggleValue = useSelector(selectToggle);

    const dispatch = useDispatch();

    useEffect(()=>{
       const listener = ()=>{
         if(window.scrollY > 520 && window.scrollY <920) {
              dispatch(toggleShow());
         } else if(window.scrollY > 920 && window.scrollY < 5600){
              dispatch(navToLeft()); 
         } else if(window.scrollY > 5600){
              dispatch(navCenter())
         }
         else {
            dispatch(toggleHide());
         }

      

       } 
       window.addEventListener('scroll',listener);
       return () => window.removeEventListener('scroll',listener);
    },[])




    return (
       <div className="fixed w-full h-[3.5rem]
          flex justify-center left-0 z-30">
        
           
             <TextProp title={`N`} titleclassN={`
              font-bold text-red-500 border-red-500 z-50
               absolute shadow shadow-black
               border-4 px-[0.5rem] top-2 text-[1.3rem] border-double
               `}
               tdivclassN={`flex justify-center left-0
                 w-screen absolute`}
               />
              

              
        <div className={`bg-gradient-to-r from-orange-500 via-black to-violet-800
                shadow shadow-black h-[3.5rem] top-0 fixed
                 ${toggleValue===1 ? `w-[78vw] transition ease-in delay-120 duration-300 translate-x-[0vw]` : 
                 toggleValue===2 ? `w-[78vw] translate-x-[-2vw] transition ease-in delay-120 duration-300` : 
                 toggleValue===3 ? `w-full translate-x-[0vw] transition ease-out-in delay-120 duration-900` : 
                 toggleValue===0 ? 
                 `opacity-0 w-[78vw] transition ease-out delay-120 duration-300 translate-x-[0vw]` : ``}`}>
          
             
          

          <div className="flex absolute right-11 top-2 gap-9 text-yellow-30 text-white">
            {NavRight.map((item)=>(
                <div key={item.id}>
                    <IconProp icon={item.icon} icoclassN={`border-4 border-green-500
                     p-1 hover:rotate-180 hover:border-yellow-300 cursor-pointer
                     hover:text-green-500
                      ${item.id===1 ? `hidden md:flex` : item.id===2 ? `hidden lg:flex` : `flex`}`}/>
                </div>
            ))}
          </div> 

          <div className="flex absolute pl-11 top-1 gap-9">
             <InputProp
                inplaceholder={`Search Nocurves`}
                inclassN={`outline-none border-4 border-green-500 p-2
                  bg-black w-[18vw] text-green-300
                  hover:border-4 placeholder-white
                    hover:border-yellow-300
                    hover:placeholder-green-300`}
             />
          </div>
         </div> 
       </div> 
    );
}

export default Navbar;