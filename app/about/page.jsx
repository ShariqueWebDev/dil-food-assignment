import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      about page
      <Link href={'/about/1'}>dynamic</Link>
    </div>
  )
}

export default page
