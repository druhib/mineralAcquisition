import React, { useState, useEffect } from 'react';
import { PlayCircleFilled } from '@ant-design/icons';
import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';

const marks: SliderSingleProps['marks'] = {
  1493: '1493',
  1600: '1600',
  1700: '1700',
  1800: '1800',
  1900: '1900',
  1920: '1920',
  1940: '1940',
  1960: '1960',
  1980: '1980',
  2000: '2000',
  2023: '2023'
};

  const handleSliderChange = (sliderValue: number) => {
    // console.log(sliderValue)
//     if (sliderValue  >= 1913){
//       setCurrentYear(sliderValue)

//     }
//     else if((sliderValue  >= 1801) && (sliderValue  <= 1900  )){
//       setCurrentYear(1801)

//     }
//     else if(sliderValue  >= 1701){
//       setCurrentYear(1701)

//     }
//     else if(sliderValue  >= 1601){
//       setCurrentYear(1601)

//     }
//     else if(sliderValue  >= 1493){
//       setCurrentYear(1493)

//     }
};


export function SimpleTimer() {
  const [count, setCount] = useState(0);
  const [years, setYears] = useState(['1493', '1600', '1700', '1800', '1900']);
  const [startTimer,setStartTimer] = useState(false)
  const [displayYear, setDisplayYear] = useState(1493);


  useEffect(() => {
    console.log("Timer started", startTimer);
   
    if (startTimer) {
        
        const timerId = setInterval(() => {
            setCount((prev) => {
            // Check if we've reached the end of the years array
            if (prev >= years.length - 1) {
                // Stop the timer and reset count to 0
                console.log('Timer ended');
                setStartTimer(false);
                return 0;
            }
           
            setDisplayYear(Number(years[prev + 1]));
            console.log("Timer tick", years[prev + 1]);
            return prev + 1;
            });
        }, 3000)



        // Cleanup when the component unmounts
        return () => {
            clearInterval(timerId);
    };;
        
  }}, [startTimer, years.length]);

  const handlePlayClick = () => {
    setStartTimer(true);
  };

  return (
    <div>
      Seconds elapsed: {years[count] } 
        <PlayCircleFilled style={{ fontSize: '2rem', color: '#08c' }} onClick={handlePlayClick} />
        <div/>
        <div>
        {startTimer && (
          <Slider
            min={1493}
            max={2023}
            step={1}
            defaultValue={1493}
            marks={marks}
            onChangeComplete={(sliderValue) => handleSliderChange(sliderValue)}
            value={typeof displayYear === 'number' ? displayYear : 1493}
          />
        )}
        {!startTimer && (
        <Slider min ={1493} max= {2023} step={1}  defaultValue={1493} marks = {marks} onChangeComplete={(sliderValue) => handleSliderChange(sliderValue)} />
        )}
      </div>
    </div>
  );
}