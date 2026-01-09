import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Khudi Institute',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFDF9]">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-[#264A4A] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#428180] mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-[#428180] text-white px-6 py-3 rounded-xl hover:bg-[#264A4A] transition-colors inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
