import React from 'react'
import TradesHome from '../Images/TradesHome.png';
import TradesPitt from '../Images/TradesPitt.png';
import TradesTbl from '../Images/TradesTbl.png';
import RsHome from '../Images/RsHome.png';
import RsSignUp from '../Images/RsSignUp.png';
import RsAdd from '../Images/RsAdd.png';
import RFShome from '../Images/RFShome.png';
import RfsShow from '../Images/RfsShow.png';
import './Portfolio.css';



function Portfolio() {
    return (
        <div className="portfolio">
            <h3>Trades For The Cup</h3>
            <p>NHL Trade Tracker</p>
            <div id="portfolioImg">
                <img src={TradesHome} alt="Trades For The Cup Homepage" className='TradesImgs'/>
                <img src={TradesPitt} alt="Trades For The Cup Pittsburgh" className='TradesImgs'/>
                <img src={TradesTbl} alt="Trades For The Cup Tampa Bay" className='TradesImgs'/>
            </div>
            <h3>Red Squirrel</h3>
            <p>Personal Inventory Tracker</p>
            <div id="portfolioImg">
                <img src={RsHome} alt="Red Squirrel Homepage" className='redSqImgs'/>
                <img src={RsSignUp} alt="Red Squirrel Sign Up" className='redSqImgs'/>
                <img src={RsAdd} alt="Red Squirrel Add Inventory" className='redSqImgs'/>
            </div>
            <h3>Reach For The Stars</h3>
            <p>NASA Astronomy Picture of the Day</p>
            <div id="portfolioImg">
                <img src={RFShome} alt="Reach For The Stars Homepage" className='RFSimgs'/>
                <img src={RfsShow} alt="Reach For The Stars Show Page" className='RFSimgs'/>
            </div>
        </div>
    )
}

export default Portfolio
