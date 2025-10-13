import React, { useEffect } from 'react'
import logo from '../assets/netflix-4.svg'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { signInUser, signOutUser } from '../utils/userSlice'
import { addGptMovieResults, toggleGptSearchView } from '../utils/gptSlice'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
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

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
    dispatch(addGptMovieResults({ movieNames: null, movieData: null }));
  }
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between'>
      <img src={logo} className='w-52 mx-auto md:mx-0' alt='logo' />
      {user && (
        <div className='flex gap-3 justify-center'>
          <button onClick={handleGPTSearch} className='text-black px-4 bg-gray-400 text-xl font-bold rounded-md'>{showGptSearch ? "Browse" : "GPT Search"}</button>
          <button onClick={signOutUsers} className='text-white text-xl font-bold'>Sign Out</button>
        </div>
      )}
    </div>
  )
}

export default Header