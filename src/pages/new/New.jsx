import React, { useEffect, useState } from 'react';
// Icons
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
// Style
import './new.scss';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div className='new'>
      <div className='container newContainer'>
        <div className='top'>
          <h2 className='title'>{title}</h2>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt='file-icon'
              className='image'
            />
          </div>
          <div className='right'>
            <form>
              {inputs.map((input) => (
                <div className='formInput' key={input.id}>
                  <label htmlFor={`${input.for}`}>{input.label}</label>
                  <input
                    type={`${input.type}`}
                    name={`${input.for}`}
                    id={`${input.for}`}
                    placeholder={`${input.placeholder}`}
                  />
                </div>
              ))}
              <div className='formInput'>
                <label htmlFor='file'>
                  Import your Image: <AttachFileRoundedIcon className='icon' />
                </label>
                <input
                  type='file'
                  name='file'
                  id='file'
                  style={{ display: 'none' }}
                  onChange={handleFile}
                />
                {file && <p>{file.name}</p>}
              </div>
              <button type='submit' className='formButton'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
