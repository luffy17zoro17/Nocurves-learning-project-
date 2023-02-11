
import { rightBarSlide, selectRightBar, slideAway} from "@/reducers/rightSideSlice/rightSideSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextProp from "./props/TextProp";



const whatsContent = [
    {
       category:`Entertainment · Trending`,
       title:`#KiaraAdvani`,
       details:`Trending with #SidharthMalhotra, Mrs Malhotra`,
    },
    {    
        category:`Trending`,
        title:`Turkish`,
        details:`176K Tweets`,
    },
    {    
        category:`Trending in India`,
        title:`#MCStan`,
        details:`214K Tweets`,
    },
    {    
        category:`Politics · Trending`,
        title:`Inflation Reduction Act`,
        details:`4,664 Tweets`,
    },
    {    
        category:`Trending`,
        title:`İstanbul`,
        details:`375K Tweets`,
    },    
    
]








const WhatsHappening = () => {

    const rightBarValue = useSelector(selectRightBar);

    const dispatch = useDispatch();
  
    useEffect(()=>{
       const listener = ()=>{
        
         if(window.scrollY > 1120 || window.scrollY<2520){
              dispatch(rightBarSlide())
         } 
        
         if(window.scrollY <1120 || window.scrollY > 5600) {
            dispatch(slideAway())
         } 
         
       } 
       window.addEventListener('scroll',listener);
       return () => window.removeEventListener('scroll',listener);
    },[]);

    
    return (
        <>
         

          <div className="relative flex items-center">
          <div> 
          <div className={`fixed right-0 h-[11rem] w-[13vw]
             bg-purple-900 top-0 shadow shadow-black z-40
             ${rightBarValue===4 ? `translate-y-[-6rem] translate-x-[0vw]` 
                 : rightBarValue===0 ? `translate-x-[151vw]` : `translate-x-[151vw]`}`}/>

          <div className={`bg-gradient-to-r from-black via-purple-900 to-gray-700 z-30
            bg-red-500 fixed top-[10rem] transition delay-120 duration-300 ease-in-out py-5
                  right-0 shadow shadow-black w-[16rem] lg:w-[22rem] overflow-y-scroll
                   bottom-0 h-screen lg:overflow-y-hidden lg:hover:overflow-y-auto
               ${rightBarValue===4 ? `translate-y-[-6rem] translate-x-[0vw]` 
                 : rightBarValue===0 ? `translate-x-[151vw]` : `translate-x-[151vw]`}`}>  

               
               
           {whatsContent.map((item)=>(
              <div key={item.id} className="py-3 px-7 text-yellow-500 pb-6
                  hover:bg-green-900 cursor-pointer shadow shadow-black">
                 <TextProp
                   title={item.category}
                   details={item.title}
                   detailclassN={`text-xl font-bold
                   `}
                 />
                 <TextProp
                     details={item.details}
                     detailclassN={`text-sm`}
                 />
              </div>
           ))} 
          </div> 
          </div>
          </div>
        </>  
    
    );

}

export default WhatsHappening;