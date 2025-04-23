import Link from 'next/link'
import React from 'react'

const AdminNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[blue] text-white text-bold py-4 px-6 flex gap-6 justify-center">
    <Link href="/">Home</Link>
    <Link href="/dashboard">Dashboard</Link>
    <Link href="/users">Users</Link>
  </nav>
  )
}

export default AdminNavbar