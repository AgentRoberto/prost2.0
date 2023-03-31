import React from "react";
import { useRouter } from 'next/router'


export const ProfileId = (id?: any) => {
  const router = useRouter()
  const { pid } = router.query
  console.log('pid ', pid)
  return (
    <>
      <p onClick={() => router.push(`/profile/${pid}`)}>Post:{pid}</p>
    </>
  )
}

