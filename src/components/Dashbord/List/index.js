import React from "react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import "./styles.css";
import { Tooltip } from "@mui/material";
import { ConvertNumber } from "../../../functions/convetNumbers";
function List({ coin }) {
  return( <tr className="list-row">
    <Tooltip title="Coin Logo">
  <td className="info-flex">
  <img src={coin.image} className="td-img" />
  </td>
  </Tooltip>
  <Tooltip title="Coin Info">
  <td>

  <div className="name-col">
    <p className="coin-symbol">{coin.symbol}</p>
    <p className="coin-name">{coin.name}</p>
  </div>
  </td>
  </Tooltip>
  <Tooltip title="Price Change in 24Hrs">
{coin.price_change_percentage_24h > 0 ? (
  <td className="chip-flex">
    <div className="price-chip">
      {coin.price_change_percentage_24h.toFixed(2)}%
    </div>

    <div className="icon-chip td-icon">
      <TrendingUpIcon />
    </div>
  </td>
) : (
  <td className="chip-flex ">
    <div className="price-chip chip-red">
      {coin.price_change_percentage_24h.toFixed(2)}%
    </div>
    <div className="icon-chip chip-red td-icon">
      <TrendingDownIcon />
    </div>
  </td>
)}
</Tooltip>
{/* on hovering toooltip it is used to show the text */}
<Tooltip title="Currenct Price">
<td>
  <h3
    className="coin_price"
    style={{
      color:
        coin.price_change_percentage_24h < 0
          ? "var(--red)"
          : "var(--green)",
    }}
  >
    ${coin.current_price.toLocaleString()}
  </h3>
</td> 
</Tooltip>
<td>
 <p className="total_volume td-total-volume">
    {coin.total_volume.toLocaleString()}
  </p>
  </td>
  <td className="desktop-td-mkt">
  <p className="total_volume">
  {coin.market_cap.toLocaleString()}
  </p>

</td>
<td className="mobile-td-mkt">
  <p className="total_volume">
  {ConvertNumber (coin.market_cap)}
  </p>

</td>
</tr>
  )
}
export default List;
