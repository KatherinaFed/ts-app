import { ColModal, RowModal } from './styles';

const TestItem = ({ name, slots }: any) => {
  return (
    <>
      <RowModal>
        <ColModal width={150}>{name}</ColModal>
        {slots.map((slot: string, i: any) => (
          <ColModal key={i} width={50}>
            {slot}
          </ColModal>
        ))}
      </RowModal>
    </>
  );
};

export default TestItem;
