import React from 'react';

const Slider = ({ image,correct }) => {
    console.log(correct);
    
    const imgClick = () => {
        console.log('dsadsa')
    }
  return (
    <div className="small-Img"  >
        {image.map((url, i) => {
            return <img className={i === correct ? 'small-correct' : ''} src={url} alt={i} key={i} onClick={imgClick}/>;
        })}
    </div>
  );
};

export default Slider;
