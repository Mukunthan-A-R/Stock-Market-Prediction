import React, { useEffect, useRef, memo } from "react";

function StockFetcher({ symbol }) {
  const container = useRef();

  useEffect(() => {
    // Clean up any previous widget before creating a new one
    container.current.innerHTML = "";

    // Create a new script element for TradingView widget
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;

    // Setting widget options dynamically based on the selected symbol
    script.innerHTML = `
      {
        "symbols": [
          ["${symbol}|1D"]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "500", 
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

    // Append the script to the container to render the TradingView widget
    container.current.appendChild(script);

    // Cleanup function: This will run before the effect runs again (e.g., when the symbol changes)
    return () => {
      container.current.innerHTML = "";
    };
  }, [symbol]); // Effect runs when the symbol prop changes

  return (
    <div
      className="tradingview-widget-container max-w-full p-4 bg-gray-800 rounded-lg shadow-lg"
      ref={container}
    >
      {/* Widget content will be injected here by the TradingView script */}
    </div>
  );
}

export default memo(StockFetcher);
