import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import FilterListIcon from '@mui/icons-material/FilterList'

const MENU_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  padding: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}
function BoardBar () {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      paddingX: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="HaTrongTan MERN Boards"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Board"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddAltIcon/>}>Invite</Button>
        <AvatarGroup max={3} sx={{
          '& .MuiAvatar-root': {
            width: '32px',
            height: '32px',
            fontSize: '16px'
          }
        }}>
          <Tooltip title='HaTrongTan'>
            <Avatar alt="None" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/316550234_201307645688650_5936880591595612123_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_ohc=JFwZC16m7RQAX-oKwYk&_nc_ht=scontent.fdad1-1.fna&oh=00_AfCmxkEShumjA39x0nbCxsuLBJPwQXA8VSVtdJ_RJjh5yg&oe=65AE5AC4" />
          </Tooltip>
          <Tooltip title='HaTrongTan'>
            <Avatar alt="None" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/316550234_201307645688650_5936880591595612123_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_ohc=JFwZC16m7RQAX-oKwYk&_nc_ht=scontent.fdad1-1.fna&oh=00_AfCmxkEShumjA39x0nbCxsuLBJPwQXA8VSVtdJ_RJjh5yg&oe=65AE5AC4" />
          </Tooltip>
          <Tooltip title='HaTrongTan'>
            <Avatar alt="None" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/316550234_201307645688650_5936880591595612123_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_ohc=JFwZC16m7RQAX-oKwYk&_nc_ht=scontent.fdad1-1.fna&oh=00_AfCmxkEShumjA39x0nbCxsuLBJPwQXA8VSVtdJ_RJjh5yg&oe=65AE5AC4" />
          </Tooltip>
          <Tooltip title='HaTrongTan'>
            <Avatar alt="None" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/316550234_201307645688650_5936880591595612123_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_ohc=JFwZC16m7RQAX-oKwYk&_nc_ht=scontent.fdad1-1.fna&oh=00_AfCmxkEShumjA39x0nbCxsuLBJPwQXA8VSVtdJ_RJjh5yg&oe=65AE5AC4" />
          </Tooltip>
          <Tooltip title='HaTrongTan'>
            <Avatar alt="None" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/316550234_201307645688650_5936880591595612123_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_ohc=JFwZC16m7RQAX-oKwYk&_nc_ht=scontent.fdad1-1.fna&oh=00_AfCmxkEShumjA39x0nbCxsuLBJPwQXA8VSVtdJ_RJjh5yg&oe=65AE5AC4" />
          </Tooltip>
          <Tooltip title='HaTrongTan'>
            <Avatar alt="None" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/316550234_201307645688650_5936880591595612123_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_ohc=JFwZC16m7RQAX-oKwYk&_nc_ht=scontent.fdad1-1.fna&oh=00_AfCmxkEShumjA39x0nbCxsuLBJPwQXA8VSVtdJ_RJjh5yg&oe=65AE5AC4" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
