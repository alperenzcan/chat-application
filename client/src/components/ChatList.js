import React from 'react'
import defaultProfile from '../assets/images/defaultProfile.png';
import IconSearchOutline from '../assets/icons/IconSearchOutline'
const ChatList = () => {
  return (
    <div className='chatlist'>

      <ProfileNav />
      <div className='chat-list__search-input'>
        <div>
          <IconSearchOutline size='2rem' fill='#fff'/>
        </div>
        <input placeholder='search chat' />
      </div>

      <ChatListitem name='Otoronto' text='akşam buluşuyoz mu beyler?' time='10:48'/>
      <ChatListitem name='Alperen' text='iyi madem'/>
      <ChatListitem name='Tolga' text='Daha ilk elden de bu yapılmaz'/>

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
        <h4 className='chat-list__item__header'>
        {name}
        </h4>
        <h5 className='chat-list__item__text'>
        {text}
        </h5>
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
      ~MUHABWET~
    </div>
  )
}