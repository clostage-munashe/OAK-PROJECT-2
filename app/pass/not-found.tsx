import Link from 'next/link';

export default function PassNotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-6 text-center space-y-4">
        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
          !
        </div>
        <h1 className="text-lg font-bold text-gray-900">Pass Not Found</h1>
        <p className="text-xs text-gray-600">
          The requested digital pass does not exist or the link is invalid.
        </p>
        <Link
          href="/"
          className="inline-block w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm rounded-lg transition"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}