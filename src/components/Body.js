import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//icons
import { SiGooglegemini } from "react-icons/si";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { toggleGPTSearch } from "../utils/redux/geminiSlice";

const Body = () => {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const toggleGPT = useSelector(store => store.gemini.toggleState);
  const handleGeminiSearch = () => {
      dispatch(toggleGPTSearch());
  }

  return (
    <div className="bg-black" >
        <div className="relative flex ">
          <img src="https://utfs.io/f/0Gl64F1LqW8ASxldPqUfmCFVWPrR6B3Dn9yoKa2jLgY0Sexd  " className="w-full h-screen object-cover" alt="Home Page" />
        </div>

        <div className="absolute inset-0 -top-24 flex flex-col items-center justify-center text-white">
          <h1 className="text-xl md:text-4xl text-center font-bold">Discover Hidden Gems and Blockbusters Made for You!</h1>
          <div className="flex max-md:flex-col gap-3 items-center justify-center pt-3 text-black font-semibold">
            <Link to="/gptsearch" onClick={handleGeminiSearch} className="flex justify-center items-center gap-1 text-xl bg-white py-2 px-4 hover:bg-sky-400  hover:text-black rounded-sm"><span className='text-xl'><SiGooglegemini /></span><span>Gemini Search</span></Link>  
            <Link to="/browse" className=" flex items-centert text-xl text-white py-2 px-4 hover:bg-white hover:text-sky-400 rounded-sm">Browse<span className="text-3xl"><MdKeyboardDoubleArrowRight /></span></Link>  
          </div>

        </div>
        
    </div>
  )
}

export default Body;