'use client'
import React, { useEffect, useState } from 'react'
import { AvatarGenerator } from 'random-avatar-generator';


const generator = new AvatarGenerator();

export default function Advanced() {
  const [state, setState] = useState<boolean>(false)
  const randomAvatar = generator.generateRandomAvatar();

  useEffect(() => {
    (() => {
      return randomAvatar
    })()
  }, [state])
  

  return (
    <div>Advanced
      <br/>
      <button onClick={()=> setState(!state) }>
        random
      </button>
      {randomAvatar}
      <img src={randomAvatar} alt='avatar' width={100} height={200} />
    </div>
  )
}
