import { selectRightBar } from "@/reducers/rightSideSlice/rightSideSlice";
import { useSelector } from "react-redux";
import TextProp from "./props/TextProp";



const LeftBar = ()=>{
    const rightBarValue = useSelector(selectRightBar);
    return (
       <div className={`fixed bottom-0 left-0 
       text-white 
       w-[8rem] p-4 shadow shadow-black z-50
       transition ease-in-out delay-120 duration-300
       md:w-[10rem]
          ${rightBarValue===4 ? `translate-y-[-4rem]` 
       : `translate-y-[22rem]`}`}>
         <div className="h-full w-full absolute 
          left-0 top-0 z-[-10] blur-sm bg-black opacity-60"/>
         <TextProp
            details={`Ive just noticed my projects look lifeless 
            due to the lack of movements.${' '}So...`}
            
         />
       </div> 
    );
}

export default LeftBar;