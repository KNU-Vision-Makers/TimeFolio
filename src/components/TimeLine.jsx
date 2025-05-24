import '../styles/globals.css'; // just import, no styles
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timelineData, categoryColorMap } from "./TimeLineData.js";

const TimeLine = () => {
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
                            date={
                                <span style={{
                                    fontSize: '0.625rem',
                                    fontWeight: 500,
                                    color: '#000',
                                    display: 'block',
                                    paddingBottom: '1rem',
                                }}>{item.date}</span>
                            }
                            contentStyle={{
                                border: `2px solid ${color}`,
                                background: "#fff",
                                maxWidth: "400px"
                            }}
                            iconStyle={{ // small circle icon
                                background: '#fff',
                                border: `5px solid ${color}`,
                                width: '20px',
                                boxShadow: 'none',
                                height: '20px',
                                marginLeft: '-10px',
                                marginTop: '21px'
                            }}
                            contentArrowStyle={{ borderRight: `48px solid ${color}` }}
                        >
                            <h3 className="vertical-timeline-element-title" style={{ whiteSpace: 'pre-line' }}>{item.title}</h3>
                            <h4
                                className="vertical-timeline-element-subtitle"
                                style={{ whiteSpace: 'pre-line' }}
                            >
                                {item.subtitle}
                            </h4>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    )
};

export default TimeLine;
