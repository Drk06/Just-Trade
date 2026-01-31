import { useState } from "react";
import {BarChartOutlined, KeyboardArrowDown ,KeyboardArrowUp, MoreHoriz } from '@mui/icons-material';
import {Tooltip, Grow} from '@mui/material'
import {  useContext } from "react";
import GeneralContext from "./GeneralContext.jsx";




function WatchListItem({stock,index}){
     
    const [showWatchListItem, setShowWatchListItem] = useState(false);
    const handelMouseEnter = (e)=>{
        setShowWatchListItem(true);
    }

    const handelMouseExit = (e)=>{
        setShowWatchListItem(false);
    }
    return(
        <>
        <li onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseExit}>
            <div className="item">
                <p className={stock.isDown?"down":"up"}> {stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                {stock.isDown? <KeyboardArrowDown className="down"/> : <KeyboardArrowUp className="up"/>}  
                <span className="price">{stock.price}</span>
                </div>
                
            </div>
            {showWatchListItem &&< WatchListActions uid={stock.name}/>}
        </li>
        </>
    )
}
const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={() => openBuyWindow(uid)}>
            Buy
          </button>
        </Tooltip>

        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button>
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchListItem;