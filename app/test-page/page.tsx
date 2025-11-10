"use client";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Tailwind CSS Test
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          If you can see this styled properly, Tailwind is working!
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-red-500 h-20 rounded-lg"></div>
          <div className="bg-green-500 h-20 rounded-lg"></div>
          <div className="bg-blue-500 h-20 rounded-lg"></div>
        </div>
        <a 
          href="/"
          className="mt-8 inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
