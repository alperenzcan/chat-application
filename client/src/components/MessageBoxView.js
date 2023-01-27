import React from 'react'
import defaultProfile from '../assets/images/defaultProfile.png';
import IconEmojiSmile from '../assets/icons/IconEmojiSmile'
import IconAttach from '../assets/icons/IconAttach';
import IconMic from '../assets/icons/IconMic';


const MessageBoxView = () => {
    return (
        <div className='message-box'>
            <MessageNav />

            <div className='mes'>
                <div className='message-box__messages'>
                <Message image={defaultProfile} sender='Cem' text='Scootera binek' time='09:11' />
                    <Message image={defaultProfile} sender='Tolga' text='selam beyler risk oynayak mı?' messageOwned={true} time='09:11' />
                    <Message image={defaultProfile} sender='Cem' text='iş kurmamız lazım' time='09:11' />
                    {/* <Message image={defaultProfile} sender='Alperen' />
                    <Message image={defaultProfile} sender='Abdülrezzak' />
                    <Message image={defaultProfile} sender='Tolga' />
                    <Message image={defaultProfile} sender='Cem' />
                    <Message image={defaultProfile} sender='Alperen' />
                    <Message image={defaultProfile} sender='Abdülrezzak' />
                    <Message image={defaultProfile} sender='Tolga' />
                    <Message image={defaultProfile} sender='Cem' />
                    <Message image={defaultProfile} sender='Alperen' />
                    <Message image={defaultProfile} sender='Abdülrezzak' /> */}
                </div>
            </div>
            <div className='message-box__input-bar'>
                <div>
                    <IconAttach size='20px' fill='#fff' />
                </div>
                <div>
                    <IconEmojiSmile size='20px' fill='#fff' />
                </div>
                <input placeholder='Send a message' />
                <div>
                    <IconMic size='20px' fill='#fff' />
                </div>
            </div>

        </div>
    )
}

export default MessageBoxView

const MessageNav = () => {

    return (
        <div className='nav message-nav'>

        </div>
    )
}

const Message = ({ image, sender, text, messageOwned, time }) => {

    // const [messageOwner,setMessageOwner] = useState(false);

    return (
        <div className={`message-block ${messageOwned ? 'reverse' : ''}`}>
            <div >
                <img className='message-block__img' src={image} />
            </div>
            <div className='message-block__content'>
                <h2 className='message-block__content-header'>
                    {sender}
                </h2>
                <div className="message-block__content-text">
                    {text}
                    <h5>
                        {time}
                    </h5>
                </div>
            </div>

        </div>
    )
}

