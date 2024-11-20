import React, { useEffect, useRef, memo } from "react";

function GraphFilter() {
  const container = useRef();

  useEffect(() => {
    // Ensure the container is ready before embedding the TradingView script
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;

    // Wait until the script has loaded before configuring the widget
    script.onload = () => {
      new window.TradingView.widget({
        container_id: container.current,
        symbols: [["NASDAQ:GOOGL|1D"]],
        chartOnly: false,
        width: "100%",
        height: "500", // You can adjust the height here
        locale: "en",
        colorTheme: "light",
        autosize: true,
        showVolume: false,
        showMA: false,
        hideDateRanges: false,
        hideMarketStatus: false,
        hideSymbolLogo: false,
        scalePosition: "right",
        scaleMode: "Normal",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        fontSize: "10",
        noTimeScale: false,
        valuesTracking: "1",
        changeMode: "price-and-percent",
        chartType: "area",
        maLineColor: "#2962FF",
        maLineWidth: 1,
        maLength: 9,
        headerFontSize: "medium",
        lineWidth: 2,
        lineType: 0,
        dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
      });
    };

    container.current.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      container.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      {/* The TradingView widget will be inserted here */}
    </div>
  );
}

export default memo(GraphFilter);
