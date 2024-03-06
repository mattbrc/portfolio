"use client";

import React, { useState } from "react";
import { IoCopy } from "react-icons/io5";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  // State to manage copy feedback
  const [copied, setCopied] = useState<boolean>(false);

  // Function to copy text
  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      // Optionally reset copied state after few seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex items-center space-x-2 justify-center">
      {/* Display the text */}
      <span className="text-sm">{textToCopy}</span>
      {/* Button to trigger copy */}
      <button className="" onClick={() => copyText(textToCopy)}>
        <IoCopy />
      </button>
    </div>
  );
};

export default CopyButton;
