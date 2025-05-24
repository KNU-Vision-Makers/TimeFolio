'use client';
import TimeLine from '@/components/TimeLine';
import styles from './page.module.css';

//타임라인 수정 페이지 - 수빈 작성
const TimeLineEditButton = () => {
  return (
    <div>
      <button className={styles['time-line-edit-button']}>+ edit</button>
    </div>
  );
};



const EditTimeLinePage = () => {
  return (
    <div className="with-hover">
      <TimeLine />
      <TimeLineEditButton/>
    </div>
  );
};

export default EditTimeLinePage;
