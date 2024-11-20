import React, { useEffect, useRef, memo } from "react";

function StockFetcher({ symbol }) {
  const container = useRef();

  useEffect(() => {
    // Remove existing script if it exists
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          ["${symbol}|1D"]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "500", // Adjust height as needed
        "locale": "en",
        "colorTheme": "light",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "headerFontSize": "medium",
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }
    `;
    container.current.appendChild(script);

    // Cleanup function to remove the widget when component unmounts or symbol changes
    return () => {
      container.current.innerHTML = "";
    };
  }, [symbol]); // Effect runs when the symbol prop changes

  return (
    <div
      className="tradingview-widget-container w-full p-4 bg-gray-800 rounded-lg shadow-lg"
      ref={container}
    >
      {/* <div className="tradingview-widget-container__widget"></div> */}
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          {/* <span className="blue-text">Track all markets on TradingView</span> */}
        </a>
      </div>
    </div>
  );
}

export default memo(StockFetcher);
