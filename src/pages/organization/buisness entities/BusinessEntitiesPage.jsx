import { AiFillTool } from "react-icons/ai";
import { FaHome,FaFilter  } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { BiColumns } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { TiExport } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";
import './BusinessEntitiesPage.css'

const BusinessEntitiesPage = () => {
  

  return (
    <div className="main-header">
        <div className="d-flex  justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
                <span className="page-title">Business Entities</span>
                <button className="page-icon">
                <HiDotsHorizontal/>
                </button>
            </div>
            <div className="view-switcher d-flex">
                <button className="active">List</button>
                <button>Map</button>
                <button className="ml-5">
                <AiFillTool />
                </button>
            </div>
        </div>

        <div className="main-content d-flex justify-content-between align-items-center">
            <div className="sectionTitleContainer d-flex align-items-center">
                <div className="sectionTitle"> Business Entity List </div>
                <button className="position-relative button1"> All Business Entities <span><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path
                                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                        </svg></span></button>
                <button className="button2"><FaHome/></button>
                <button className="button2"><LuRefreshCw/></button>
                <button className="button2"><BiColumns /></button>
                <button className="button2"><FaFilter /></button>
            </div>
            <div className="sectionTitleContainer d-flex align-items-center">
                <button className="button3 position-relative"><span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                        </svg>
                    </span>Business Entity </button>
                <button className="button2"><FaRegTrashCan/></button>
                <button className="button2"><TiExport/></button>
                <button className="button2"><HiDotsHorizontal/></button>
            </div>
        </div>
    </div>
  );
};

export default BusinessEntitiesPage;
;
