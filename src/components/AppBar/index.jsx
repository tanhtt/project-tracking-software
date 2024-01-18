import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import Badge from '@mui/material/Badge'
import Profiles from './Menus/Profiles'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import AddBoxIcon from '@mui/icons-material/AddBox'


function AppBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 2,
      gap: 2,
      overflowX: 'auto'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} fontSize={'small'} inheritViewbox sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{ color: 'primary.main', fontSize: '1.2rem', fontWeight: 'bold' }}>Trello</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined" startIcon={<AddBoxIcon/>}>Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title="Search [ / ]">
          <TextField id="outlined-search" label="Search field" type="search" size='small' sx={{ minWidth: 120}}/>
        </Tooltip>
        <ModeSelect />

        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar