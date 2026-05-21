// components/FloatingVKButton.tsx
'use client';

import { useState, useEffect } from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function FloatingVKButton() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a 
        href="https://vk.me/marti_mebel" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-[#07f] text-white p-3 rounded-full shadow-lg hover:bg-[#0069ff] transition-colors"
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
      </a>
    </div>
  );
}