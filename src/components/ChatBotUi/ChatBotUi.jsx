import React, { useState } from 'react'
import { AiFillWechat } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { BsFillSendFill } from 'react-icons/bs'
import logo from '../../Images/shopping-cart.png';
import '../../styles/chatbotui.css'
import { useRef } from 'react';
import { useEffect } from 'react';

const ChatBotUi = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [message, setMessage] = useState([])
  const scrollRef = useRef()

  const handleQuery = () => {
    if (query) {
      setMessage([...message, {text: query}])
    } else {
      return
    }
    setQuery('')
  }

  const handleClick = () => {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView()
  }, [message])
  return (
    <div className={`${open ? 'chat-active' : ''} chat`}>
      <div className="messsage">
        <div className="profile">
          <div title='online' className="profile-logo">
            <img title src={logo} alt="profile image" />
            <span></span>
          </div>
          <div className="text">
            <p>Chat with our</p>
            <h3>Customer Care</h3>
          </div>
          <div onClick={handleClick} title='close' className="close">
            <IoIosArrowDown className='icon' />
          </div>
        </div>
        <div className="output">
          <p className='left'>Hello👋 </p>
          <p className='left'>How can I help? </p>
          {message.map(item => {
            return <p className='right'>{item.text}</p>
          })}
          <div ref={scrollRef} />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="send">
          <input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text" placeholder='type message...' />
          <button title='send' onClick={handleQuery}>
            <BsFillSendFill className='icon' />
          </button>
        </form>
      </div>
      {open &&
        <div className='button'>
          <p className='chat-text'>Customer Support 🧑‍💻</p> 
          <div onClick={handleClick} title='Chat with us' className='chat-btn'>
            <AiFillWechat className='icon' />
          </div>
        </div>
      }
    </div>
  )
}

export default ChatBotUi
