import React, { useEffect, useState } from "react";
import "../styles/BranchesSection/Quote.css";

const QuoteComponent = () => {
  const [showAuthor, setShowAuthor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAuthor(true);
    }, 1500); // Час затримки перед відображенням автора (1500 мс)
 
    return () => clearTimeout(timer);
  }, []);  

  return (
    <div className="quote-wrapper">
      <div className="quote-content flex">
        <i className="gotham white quote-copy">
          Opportunities don't happen, you create them.
        </i>
      </div>
      {showAuthor && <p className="avenir blue quote-name"> — Chris Grosser</p>}
    </div>
  );
};

export default QuoteComponent;
