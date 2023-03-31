import React from "react";
import { Profile } from "./profile";

export default function ProfilePage(data: any) {

  return (
    <>
      <h1>Profile!</h1>
      <Profile id={data}/>
    </>
  )
}

