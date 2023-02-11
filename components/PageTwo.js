import {leaveBothText, selectPageTwoSlide, showBothText} from "@/reducers/pageTwoSlice/pageTwoSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconProp from "./props/IconProp";
import TextProp from "./props/TextProp";

import Link from "next/link";
import PanToolIcon from '@mui/icons-material/PanTool';




const PageTwo = ()=> {


    const pageTwoValue=useSelector(selectPageTwoSlide);
    const dispatch = useDispatch();

    useEffect(()=>{
      const listener = ()=>{
       
        if(window.scrollY > 6600){
             dispatch(showBothText())
        }  
        if(window.scrollY < 6600){
          dispatch(leaveBothText())
     }    
      } 
      window.addEventListener('scroll',listener);
      return () => window.removeEventListener('scroll',listener);
    },[]);

    return (
       <div className="overflow-hidden z-[-20]">
          <div className="bg-gradient-to-t 
          from-black via-purple-500 to-yellow-400
          h-screen">
            

             <div>
               {(pageTwoValue===7) ?  
               (
               <div>
                 <div className={`fixed right-0 z-0 bg-orange-300
                      transition ease-out delay-120 duration-300
                     translate-x-[-5vw] translate-y-[14vw] top-0 
                     
                     md:translate-x-[-4vw] md:translate-y-[9vw]
                     lg:translate-x-[-17vw] lg:translate-y-[17vw]

                     `}>
                  <Link href={`https://www.linkedin.com/in/thomas-mathew-b26b87253/`}>    
                   <TextProp 
                   title={`Created by- Thomas Mathew`} 
                   details={`Web designer/Developer/ UX UI/
                     or whatever you wanna call it.
                      All i know is that i enjoy testing my brain
                       and coming up with all sorts web designs.
                      BUT only using CODES. (I dont like you adobe. Youre boring. xD)`}
                   detailclassN={``}   
                   titleclassN={`text-xl font-bold pb-4`}
                   tdivclassN={`w-[23rem] border-x-[2rem] border-dashed
                     border-black p-8 
                     shadow shadow-black xl:w-[33rem]`}/>
                  </Link>   
                  
                </div> 

                <div className="left-0 z-30 bg-red-400
                   transition ease-out delay-120 duration-300
                   bottom-0 fixed cursor-pointer 
                   translate-x-[5vw] translate-y-[-1vw] 
                   md:translate-x-[4vw] md:translate-y-[-4vw]
                     lg:translate-x-[17vw] lg:translate-y-[-17vw]">
                 <div className="relative flex justify-center
                    flex-col items-center">   
                  <TextProp title={`So the Road ends here! For now.`}
                    details={`Until next time.`}
                   titleclassN={`text-3xl z-30
                    shadow shadow-black 
                    bg-gradient-to-t from-transparent via-red-400
                     to-transparent
                     `}
                     detailclassN={`underline decoration-red-500`}
                    tdivclassN={`border-[1rem] shadow shadow-black
                     hover:border-black
                     w-[16rem] font-bold text-xl p-8 text-white     
                       to-transparent`}/>
                   <IconProp 
                      icon={<PanToolIcon/>}
                      icoclassN={`absolute scale-[8] z-[-10]`}
                    /> 
                  </div>   
                </div>
                
               </div> ) : ((pageTwoValue===8) ? (

                        <div>
                        <div className={`fixed right-0 z-10 bg-orange-300
                            transition ease-in delay-120 duration-300
                            translate-x-[66vw] translate-y-[-66vw]
                            top-0`}>
                          <TextProp 
                          title={`Created by- Thomas Mathew`} 
                          details={`Web designer/Developer/ UX UI/
                            or whatever you wanna call it.
                            All i know is that i enjoy testing my brain
                              and coming up with all sorts web designs.
                            BUT only using CODES. (I dont like you adobe. Youre boring. xD)`}
                          detailclassN={``}   
                          titleclassN={`text-xl font-bold pb-4`}
                          tdivclassN={`w-[23rem] border-x-[2rem] p-8 
                            shadow shadow-black xl:w-[33rem]`}/>
                        
                        </div> 

                        <div className="fixed bottom-0 left-0 z-30 bg-red-400
                          transition ease-in delay-120 duration-300
                          translate-x-[-66vw] translate-y-[66vw]
                          ">
                        <div className="relative flex justify-center
                          flex-col items-center">   
                        <TextProp title={`So the Road ends here! For now.`}
                          details={`Until next time.`}
                          titleclassN={`text-3xl z-30
                          shadow shadow-black 
                          bg-gradient-to-t from-transparent via-red-400
                            to-transparent
                            `}
                            detailclassN={`underline decoration-red-500`}
                          tdivclassN={`border-[1rem] shadow shadow-black
                            w-[16rem] font-bold text-xl p-8 text-white     
                              to-transparent`}/>
                          <IconProp 
                            icon={<PanToolIcon/>}
                            icoclassN={`absolute scale-[8] z-[-10]`}
                          /> 
                        </div>   
                        </div>
                       </div> 
               ) : ``)}
             </div>
         </div>  
       </div> 
    );
}

export default PageTwo;