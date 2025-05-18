import styles from "../styles/globals.css";
import BasicInfo from "@/components/BasicInfo";
import Sidebar from "@/components/Sidebar";
import TechStack from "@/components/TechStack";
import TimeLine from "@/components/TimeLine";

// 메인 페이지
export default function Home() {
    return(
        <div>
            <Sidebar/>
            <BasicInfo/>
            <TimeLine/>
            <TechStack/>
        </div>
    )
}