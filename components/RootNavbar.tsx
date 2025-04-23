// components/FirstNavbar.tsx
import Link from 'next/link';

export default function RootNavbar() {
  return (
    <nav className="bg-white text-black py-4 px-6 flex gap-6 justify-center">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/admin">Admin Dashboard</Link>
    </nav>
  );
}
