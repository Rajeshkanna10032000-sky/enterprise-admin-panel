import { useState } from "react";

export default function CopyToClipboardButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1 bg-gray-200 rounded"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}