import SearchIcon from '@mui/icons-material/Search'
import { alpha, styled } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import InputBase from '@mui/material/InputBase'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function NavigationBar({}) {
  const { logout } = useContext(AuthContext)
  const { isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component='nav'>
          <Toolbar>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link
                to='/jobs'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Job Routing
              </Link>
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
                value={''}
              />
            </Search>

            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              {isAuthenticated ? <>Hello Tam</> : <></>}
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {isAuthenticated ? (
                <>
                  <Link>
                    <Button sx={{ color: '#fff' }} onClick={() => logout()}>
                      Logout
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={'/login'}>
                    <Button sx={{ color: '#fff' }}>Login</Button>
                  </Link>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>

        <Box component='main' sx={{ p: 3 }}>
          <Toolbar />
          <Typography>
            Pick one job and you won't have to eat noodles again!
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
