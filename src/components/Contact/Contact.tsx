import React, {useState, useEffect} from 'react'
import { ContentComponentProps } from '../../types/interfaces'
import './Contact.css';

const Contact: React.FC<ContentComponentProps> = ({ isVisible }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showTitle, setShowTitle] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 100);

    const formTimer = setTimeout(() => {
      setShowForm(true);
    }, 200);

    return () => {
      clearTimeout(titleTimer)
      clearTimeout(formTimer)
    };
    
  }, [isVisible]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className='contact'>
      <div className={`title fadein-animation ${showTitle ? 'is-visible' : ''}`}>
        BOOK A MEETING WITH OUR TEAM
      </div>
      <div className={`form fadein-animation ${showForm ? 'is-visible' : ''}`}>
        <form className='fields' onSubmit={handleSubmit}>
          <div className='personal-info'>
            <div className='name'>
              <input
                type='text'
                className='input'
                placeholder='NAME'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className='email'>
              <input
                type='email'
                className='input'
                placeholder='EMAIL'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='subject'>
            <input
              type='text'
              className='input'
              placeholder='SUBJECT'
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
          </div>
          <div className='message'>
            <textarea
              className='input'
              placeholder='TYPE YOUR MESSAGE HERE'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <button type='submit' className='button shiny'>
            SEND
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;