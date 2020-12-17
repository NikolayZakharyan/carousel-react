import React, { useState } from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'


// AiOutlineArrowLeft

const SlyderImg = ({ image }) => {
  // let here= 'here'

  const [data, setData] = useState(image);
  const [inputVal, setInputVal] = useState();
  const [correct, setCorrect] = useState(0);

  const getInput = () => {
    let imgUrl = `(http)?s?:?(//[^"']*.(?:png|jpg|jpeg|gif|png|svg))`;

    if (inputVal.match(imgUrl)) {
      image.push(inputVal);
      setData(image);
      setCorrect(image.length - 1);
    }
    setInputVal('');
  };

  const prevSlide = () => {
    setCorrect(correct === 0 ? data.length - 1 : correct - 1);
    console.log('prev');
  };

  const nextSlide = () => {
    setCorrect(correct === data.length - 1 ? 0 : correct + 1);
    console.log('prenextv');
  };

  const imgClick = (e) => {
    setCorrect(+e.target.alt);
  };

  return (
    <>
      <div className = 'input'>
      <input
        onChange={(event) => setInputVal(event.target.value)}
        value={inputVal}
        
      ></input>
      <button onClick={getInput}>ADD IMAGE</button>

      </div>

      <div className="carousel-wrapper">
        <div className="prev-div" onClick={prevSlide}>
          <AiOutlineArrowLeft />
        </div>

        {data.map((el, i) => {
          if (i === correct)
            return <img className={`visible`} src={el} alt={'img'} key={el} />;
          else {
            return <img className={`hidden`} src={el} alt={'img'} key={el} />;
          }
        })}

        <div className="next-div" onClick={nextSlide}>
          <AiOutlineArrowRight />
        </div>
      </div>

      <div className="small-Img">
        {data.map((url, i) => {
          return (
            <img
              className={i === correct ? 'small-correct' : ''}
              src={url}
              alt={i}
              key={i}
              onClick={imgClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default SlyderImg;
