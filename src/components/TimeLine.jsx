import '../styles/globals.css';
import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timelineData as initialData, categoryColorMap } from "./TimeLineData.js";

const TimeLine = ({ editMode, setEditMode }) => {
  const [timelineData, setTimelineData] = useState(initialData);

  const handleChange = (index, field, value) => {
      const updated = [...timelineData];
      updated[index][field] = value;
      setTimelineData(updated);
  };
    const handleAddTimelineItem = () => {
        setTimelineData(prev => [
        ...prev,
        {
            title: 'New Title',
            subtitle: 'New Subtitle',
            date: 'New Date',
            category: 'default'
        }
        ]);
    };


  return (
    <div className="content-box">
      <h1 className="content-title-middle">TIMELINE ABOUT ME</h1>

      <VerticalTimeline>
        {timelineData.map((item, index) => {
          const color = categoryColorMap[item.category] || "#607d8b";
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={<span style={{
                fontSize: '0.625rem',
                fontWeight: 500,
                color: '#000',
                display: 'block',
                paddingBottom: '1rem',
              }}>{item.date}</span>}
              contentStyle={{ border: `2px solid ${color}`, background: "#fff" }}
              iconStyle={{
                background: '#fff',
                border: `5px solid ${color}`,
                width: '20px',
                height: '20px',
                marginLeft: '-10px',
                marginTop: '21px',
                boxShadow: 'none'
              }}
              contentArrowStyle={{ borderRight: `48px solid ${color}` }}
            >
              {editMode ? (
                <>
                  <textarea
                    value={item.title}
                    onChange={e => handleChange(index, 'title', e.target.value)}
                    style={{ display: 'block', resize:'none',border: `2px solid #CDCDCD`, outlineColor: `${color}`,borderRadius: '2px', fontSize: '1.25rem', fontWeight:'700', marginBottom: '0.5rem', width: '100%',fontFamily: 'Cheap-Potatoes-Black-Thin' }}
                  />
                  <textarea
                    value={item.subtitle}
                    onChange={e => handleChange(index, 'subtitle', e.target.value)}
                    style={{ display: 'block', resize:'none',border: `2px solid #CDCDCD`, outlineColor: `${color}`,borderRadius: '2px', fontSize: '1rem', color:'#c9c9c9',width: '100%', fontFamily: 'Cheap-Potatoes-Black-Thin' }}
                  />
                </>
              ) : (
                <>
                  <h3 className="vertical-timeline-element-title" style={{ whiteSpace: 'pre-line' }}>{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle" style={{ whiteSpace: 'pre-line' }}>{item.subtitle}</h4>
                </>
              )}
            </VerticalTimelineElement>
          );
          
        })}

        {editMode ? (
            <VerticalTimelineElement
                className="vertical-timeline-element-edit-add"
                iconStyle={{
                    background: '#fff',
                    border: `5px solid #888`,
                    width: '20px',
                    height: '20px',
                    marginLeft: '-10px',
                    marginTop: '21px',
                    boxShadow: 'none'
                }}

                contentStyle={{ border: `2px solid #888`, display: 'flex', background: "#fff", cursor: 'pointer', alignItems: 'center' }}
                contentArrowStyle={{ borderRight: '48px solid #888' }}
                >
                <div onClick={handleAddTimelineItem} style={{ width: '100%', textAlign: 'center' }}>
                    <h4 style={{ margin: 0, fontFamily: 'Cheap-Potatoes-Black-Thin' }}>+ ADD COMPONENT</h4>
                </div>
                </VerticalTimelineElement>
            ):(
                <p hidden>if it's not on editMode</p>
            )
            }
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
