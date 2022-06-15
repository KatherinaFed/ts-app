import { useEffect, useMemo, useState } from 'react';
import { dummyDataMyEvents } from '../../../store/event/dummyData';
import EventItem from '../EventItem/EventItem';
import { FiltersWrapper } from './styles';

const MyEvents = () => {
  const [sportList, setSportList] = useState<any>([]);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setSportList(dummyDataMyEvents);
  }, []);

  const getFilteredList = () => {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return sportList;
    }

    return sportList.filter((item: any) => item.activity === selectedCategory);
  };

  const filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <>
    <FiltersWrapper>
      <div className="day-filter">
        <p className="text">This day</p>
      </div>
      <div className="week-filter">
        <p className="text">This week</p>
      </div>
      <div className="month-filter">
        <p className="text">This month</p>
      </div>
      <div className="text-filter">
        <p className="text">Filter:</p>
      </div>
      <div className="location-filter">
        <p className="text">Location</p>
      </div>
      <div className="date-filter">
        <p className="text">Date</p>
      </div>
      <div className="type-filter">
        <p className="text">Activity</p>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Running">Running</option>
            <option value="Basketball">Basketball</option>
            <option value="Swimming">Swimming</option>
            <option value="Climbing">Climbing</option>
            <option value="Cycling">Cycling</option>
            <option value="Tennis">Tennis</option>
            <option value="Yoga">Yoga</option>
          </select>
        </div>
      </div>
    </FiltersWrapper>
    {filteredList.map((element: any, index: number) => (
      <EventItem data={element} key={index} />
    ))}
  </>
  );
};

export default MyEvents;
