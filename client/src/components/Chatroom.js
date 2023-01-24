import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SockJS from 'sockjs-client'
import { over } from 'stompjs'
import Button from './Button';
import Input from './Input';

var stompClient = null;

const Chatroom = () => {

  const user = useSelector(state => state.user.value)
  const { username } = user

  const [userData, setUserData] = useState({ ...user })
  const [chats, setChats] = useState([])

  useEffect(() => {
    console.log(userData)
    if (username !== '') {
      registerUser()
    }
  }, [])


  const registerUser = (event) => {
    let Sock = new SockJS('http://45.93.137.231:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError)
  }

  const onConnected = () => {
    setUserData({ ...userData, connected: true })
    stompClient.subscribe('/chatroom/public', onPublicMessageReceived);

  }

  const onPublicMessageReceived = (payload) => {
    console.log(JSON.parse(payload.body))
    let payloadData = JSON.parse(payload.body);
    chats.push(payloadData)
    setChats([...chats])

  }

  const onError = (err) => {
    // console.log(err)
  }

  const sendPublicMessage = () => {
    if (stompClient) {
      let chatMessage = {
        sender: userData.username,
        message: userData.message
      }
      stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, 'message': '' });
    }
  }

  return (
    <>
      {
        userData.connected ?
          <div className='chatroom'>
            <h2 className='heading-secondary'>Chatroom</h2>
            <div className='chatroom__chatbox'>
              {
                chats.map(chat => (
                  <div>
                    {chat.message}
                  </div>
                ))
              }
            </div>
            <div className='d-flex align-items-center justify-content-end'>
              <Input placeholder='your message' onChange={e => setUserData({ ...userData, message: e.target.value })} />
              <Button text='send' onClick={sendPublicMessage} />
            </div>
          </div>
          :
          null
      }

    </>
  )
}

export default Chatroom