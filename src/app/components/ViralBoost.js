import { useState, useEffect } from "react";

export const ViralBoost = () => {
  const [views, setViews] = useState(29400);

  useEffect(() => {
    const interval = setInterval(() => {
      setViews((prev) => prev + Math.floor(Math.random() * 20));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        One stream. 10 clips. 5 platforms. 1 viral moment — guaranteed.
      </h2>
      <p className="mb-12 text-muted-foreground">
        Our agent learns what’s viral for <em>you</em> and adapts over time.
      </p>
      <div className="text-3xl font-bold mb-8">
        🔥 Views: {views.toLocaleString()}
      </div>
      {/* Add carousel or placeholder */}
      <div className="flex flex-wrap gap-4 justify-center text-sm">
        <span className="px-3 py-1 bg-white text-black rounded-full">🔥 Trending</span>
        <span className="px-3 py-1 bg-white text-black rounded-full">😂 Funny</span>
        <span className="px-3 py-1 bg-white text-black rounded-full">💀 Cringe</span>
      </div>
    </section>
  );
};