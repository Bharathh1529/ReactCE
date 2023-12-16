import React from 'react'
import { BrowserRouter, Link, Routes ,Route} from 'react-router-dom'
import Log from './Log'
import Sign from './Sign'

export default function LinkingPage() {
  return (
    <div>
      <BrowserRouter>
      <p><Link to='./Log'>Login Page</Link></p>
      <p><Link to='./Sign'>SignUp Page</Link></p>
        <Routes>
            <Route path='/Log' element={<Log></Log>}></Route>
            <Route path='/Sign' element={<Sign></Sign>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
