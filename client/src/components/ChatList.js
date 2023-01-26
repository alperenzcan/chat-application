import React from 'react'
import defaultProfile from '../assets/images/defaultProfile.png';
const ChatList = () => {
  return (
    <div className='chatlist'>

      <ProfileNav />
      <div className='chat-list__search-input'>
        <input placeholder='search chat' />
      </div>

      <ChatListitem name='Otoronto' text='akşam buluşuyoz mu beyler?' time='10:48'/>
      <ChatListitem name='Alperen' text='Sikiyim'/>
      <ChatListitem name='Tolga' text='Daha ilk elden de bu yapılmaz amk'/>

    </div>
  )
}

export default ChatList


const ChatListitem = ({name,text,time}) => {
  return (
    <div className='chat-list__item' tabindex="1">
      <div>
        <img className='chat-list__item__img' src={defaultProfile} />
      </div>
      <div className='chat-list__item__info'>
        <div className='chat-list__item__header'>
        {name}
        </div>
        <div className='chat-list__item__text'>
        {text}
        </div>
      </div>
      <div className='chat-list__item__time'>
        {time}
      </div>
    </div>
  )
}


const ProfileNav = () => {
  return (
    <div className='nav profile-nav'>
      ~ANANCHAT~
    </div>
  )
}