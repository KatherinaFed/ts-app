import { Modal } from '@mui/material';
import dayjs from 'dayjs';
import { useContext } from 'react';

import GlobalContext from '../../context/GlobalContext';
import {
  slots,
  timeline,
  users,
  usersTimelineEvents,
} from '../../utils/timeline';
import {
  ColModal,
  GridModal,
  HeaderModal,
  ModalContainer,
  RowModal,
} from './styles';
import TestItem from './TestItem';

const defTimeStart: any = dayjs().add(-12, 'hour');
const defTimeEnd: any = dayjs().add(12, 'hour');

const TimeLine = () => {
  return (
    <>
      <RowModal>
        <ColModal width={150}>{''}</ColModal>
        {timeline.map((time, i) => (
          <ColModal key={i} width={50}>
            {time}
          </ColModal>
        ))}
      </RowModal>
    </>
  );
};

const Users = () => {
  return (
    <>
      {users.map((user) => (
        <TestItem name={user} slots={slots} />
      ))}
    </>
  );
};

const TestModalUser = () => {
  const { setShowEventModal, showEventModal, daySelected } =
    useContext(GlobalContext);

  const handleClose = () => setShowEventModal(false);
  const defaultTimeStart = dayjs().startOf('day').toDate();
  const defaultTimeEnd = dayjs().startOf('day').add(1, 'day').toDate();

  return (
    <Modal
      open={showEventModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer
        timelineLength={timeline.length}
        countOfEvents={users.length}
      >
        <HeaderModal>
          <header className="header-event-modal">
            <p className="data-modal">{daySelected.format('dddd, MMMM DD')}</p>
          </header>
        </HeaderModal>
        <GridModal>
          <TimeLine />
          <Users />
        </GridModal>
      </ModalContainer>
    </Modal>
  );
};

export default TestModalUser;
