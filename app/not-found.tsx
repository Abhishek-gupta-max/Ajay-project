export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1E4E8C] mb-4">404 - Page Not Found</h1>
        <p className="text-slate-600 mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="px-6 py-3 bg-[#4CAF50] text-white font-bold rounded-xl hover:bg-[#43A047] transition-colors">
          Return Home
        </a>
      </div>
    </div>
  );
}
