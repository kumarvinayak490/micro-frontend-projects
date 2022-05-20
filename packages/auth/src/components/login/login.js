import React, {useState} from 'react'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Link } from '@mui/material'
import { Button } from '@mui/material'



const Login = ({setRegister}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const handleSubmit = async (event)=>{

       alert("login")
    }

  return (
    <div className="loginFormContainer">
      <Typography variant="h3" style={{textAlign:"center"}}>Login</Typography>
      <form className="loginForm" onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          className="loginInputs"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
       <div className="linkText">
            <Link to="#" type='button' onClick={()=>setRegister(true)}>
                <Typography  variant="caption" style={{cursor:"pointer"}}>Don't have an account? Sign-Up</Typography>
            </Link>
        </div>
        <Button className="loginButton" variant="contained" fullWidth type="submit">
          Submit
        </Button>   
       </form>
      </div>
  )
}

export default React.memo(Login)