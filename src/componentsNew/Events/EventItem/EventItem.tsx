import React from 'react';
import { Button, EventItemWrapper } from './styles';
import CloseIcon from '@mui/icons-material/Close';

const EventItem = ({ isMyEvent, data }: any) => {

  return (
    <EventItemWrapper>
      <div className="img-wrapper">
        <img src={data.img} alt="" className="img" />
      </div>
      <div className="info-wrapper-one">
        <div className="info-item">
          Theme: <p className="info-data">{data.theme}</p>
        </div>
        <div className="info-item">
          Activity: <p className="info-data">{data.activity}</p>
        </div>
        <div className="info-item">
          Date: <p className="info-data">{data.date}</p>
        </div>
        <div className="info-item">
          Time: <p className="info-data">{data.time}</p>
        </div>
      </div>
      <div className="info-wrapper-two">
        <div className="info-item">
          Location: <p className="info-data">{data.location}</p>
        </div>
        <div className="info-item">
          Creator: <p className="info-data">{data.creator}</p>
        </div>
      </div>
      {isMyEvent ? (
        <div className='button-icon'><CloseIcon /></div>
      ) : (
        <div className="button-wrapper">
          <Button>Join</Button>
        </div>
      )}
    </EventItemWrapper>
  );
};

export default EventItem;
