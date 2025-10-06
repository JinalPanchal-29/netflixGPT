import React, { useEffect } from 'react'
import logo from '../assets/netflix-4.svg'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { signInUser, signOutUser } from '../utils/userSlice'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const signOutUsers = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    const onAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user.uid;
        dispatch(signInUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browse')
      } else {
        dispatch(signOutUser())
        navigate('/')
      }
    })

    return () => {
      onAuth()
    }
  }, [])
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img src={logo} className='w-52' alt='logo' />
      <div className=''>
        {user && <button onClick={signOutUsers} className='text-white text-xl font-bold'>Sign Out</button>}
      </div>
    </div>
  )
}

export default Header