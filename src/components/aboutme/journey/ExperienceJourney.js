import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2023 - Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Study World
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Branch Manager & Student Counsellor
          </h6>
          <p>• Provide Education Counselling to students and guardians for study abroad.</p>
          <p>• Providing information about Universities/Colleges, Course/Fees, Admissions, Visa procedures etc.</p>
          <p>• Effective follow-ups with the prospective students/guardians.</p>
          <p>• Provide daily, Weekly, monthly, and yearly reporting about all operational activities.</p>
          <p>• Processing student visa applications based on entry requirements and admissions procedures and 
            enhance their chances of success in interviews by developing their skills.</p>
          <p>• Preparing applications for admission into different foreign universities.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Excel Telecom (Pvt.) Limited - (National Distributor of SAMSUNG in Bangladesh)
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Management of Information System
          </h6>
          <p>• Proficient in developing, deploying and managing computerized systems that gather, retain, evaluate and exhibit 
            data to facilitate the achievement of organizational aims and objectives.</p>
          <p>• Proficient in collecting and organizing data from diverse sources, utilizing statistical techniques and software 
            tools for data analysis and creating comprehensive reports and presentations that showcase significant insights and trends.</p>
          <p>• Consistently completed assigned tasks in a timely and efficient manner as directed by management, while maintaining 
            effective communication between the company and employees.</p>
          <p>• Proficient in monitoring daily business operation costs, verifying and evaluating accounting transactions updates, 
            and providing corresponding reports to top management.</p>
          <p>• Skilled in collecting and compiling monthly reports, conducting inventory analysis for month-end, quarterly, 
            and year-end closing, and submitting reports in accordance with management requirements.</p>
          <p>• Proficient in developing and maintaining various reporting dashboard, technical support to end-users, 
            diagnosing hardware and software issues, and collaborating with IT teams to promptly resolve system-related problems.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
