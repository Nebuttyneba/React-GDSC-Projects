import { useState } from 'react';
import './re.css';

const Form = () => {
  const [mainTopic, setMainTopic] = useState('');
  const [subTopic, setSubTopic] = useState('');
  const [content, setContent] = useState('');
  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <main>
      <button onClick={toggleForm}>{showForm ? 'Hide' : 'Show'}</button>
      {showForm && (
        <form className='note-form'>
          <h1>Taking Note</h1>
          <input
            type='text'
            placeholder='Main Topic'
            className='main-topic'
            value={mainTopic}
            onChange={(event) => setMainTopic(event.target.value)}
          />
          <input
            type='text'
            placeholder='Sub Topic'
            className='sub-topic'
            value={subTopic}
            onChange={(event) => setSubTopic(event.target.value)}
          />
          <textarea
            className='content'
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <button>Save</button>
        </form>
      )}
    </main>
  );
};

export default Form;
