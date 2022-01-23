import { FaBars } from 'react-icons/fa'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import * as React from 'react'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'

function HeadItem({ title }) {
  return (
    <span className=" md:inline-block hover:underline cursor-pointer my-auto">{title}</span>
  )
}

function Head() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(anchor, open, event)

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 240 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText primary="首页" />
        </ListItem>
        <ListItem>
          <Link to="/donate"><ListItemText primary="正在众筹" /></Link>
        </ListItem>
        <ListItem>
          <Link to="/donate"><ListItemText primary="历史回顾" /></Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link to="/donate"><ListItemText primary="捐赠查询" /></Link>
        </ListItem>
        <ListItem>
          <Link to="/donate"><ListItemText primary="操作指南" /></Link>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <div className="sticky lg:hidden top-0 z-40 space-x-2 bg-blue-600 text-white text-sm px-2 lg:px-16 py-1 h-10 w-full my-auto flex justify-between " style={{ zIndex: 1001 }}>
      <React.Fragment key="left">
        <div
          className="rounded-xl bg-blue-800 hover:bg-blue-300 my-auto py-1 px-2"
          onClick={toggleDrawer('left', true)}
        >
          <FaBars />
        </div>
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
      <div className="mx-auto my-auto text-lg">哈尔滨工程大学捐赠平台</div>
      <div />
      {/* <HeadItem title='校友注册' />
            <HeadItem title='登录' />
            <div className='flex-grow'></div>
            <HeadItem title='移动版' />
            <HeadItem title='微信公众号' />
            <HeadItem title='校友社区' />
            <HeadItem title='校友网' /> */}
    </div>
  )
}

export default Head
