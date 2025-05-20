'use client';

import styles from './page.module.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timelineData, categoryColorMap } from "./TimelineData";

// 타임라인 수정 페이지
// 수빈 작성

const EditTimeLinePage = () => {
    return(
    <div className = {styles['content-box']}>
      <h1 className={styles['content-title-middle']}>TIMELINE ABOUT ME</h1>
      <VerticalTimeline>
        {timelineData.map((item, index) => {
        const color = categoryColorMap[item.category] || "#607d8b"; // fallback gray

        return (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={item.date}
            contentStyle={{ border: `2px solid ${color}`, background: "#fff" }}
            iconStyle={{
                background: '#fff',
                border: `5px solid ${color}`,
                width: '20px',
                boxShadow : 'none',
                height: '20px',
                marginLeft: '-10px',  // 가운데 정렬 조정 필요
                marginTop: '21px'
            }}
            contentArrowStyle={{ borderRight: `48px solid ${color}` }}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className={styles['vertical-timeline-element-subtitle']}>HANYANG UNIVERSITY</h4>

          </VerticalTimelineElement>
        );
      })}
      </VerticalTimeline>
    </div>
    )
}

export default EditTimeLinePage