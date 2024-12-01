import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-8 border-t border-[#FFE169]">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Sri Naga Sri Govvala. All rights reserved.</p>
      </div>
    </footer>
  );
}