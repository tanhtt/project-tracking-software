import './App.css'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value='dark'>
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <DarkModeIcon fontSize='small' />Dark
          </div>
        </MenuItem>
        <MenuItem value='light'>
          <Box sx={{ display:'flex', alignItems:'center', gap:'1' }}>
            <LightModeIcon fontSize='small' />Light
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display:'flex', alignItems:'center', gap:'1' }}>
            <SettingsBrightnessIcon fontSize='small' />System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

  // console.log('" prefers dark color "', prefersDarkMode )
  // console.log('" prefers light color "', prefersLightMode )
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect />
      <hr />
      <ModeToggle />
      <hr />
      <Button variant="contained">Hello world</Button>
      <AccessAlarmIcon />
      <br></br>
      <Typography variant='body2' color="text.secondary">Hello There</Typography>
    </>
  )
}

export default App
