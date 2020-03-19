
import Link from 'next/link';
import DashboardSelection from './dashboard/Selection';
import Drawer from './common/Drawer'
import DashboardHelp from './dashboard/Help'
import Login from './dashboard/Login'

const dashboardContainer = {
    border: '1px solid #ccc',
    'borderRadius': '1rem',
    padding: '1rem 0 2rem',
    //'text-align': 'center'
    display: 'grid',
    'gridTemplateRows': '5rem 1fr',
    'gridTemplateColumns': '1fr 1fr 1fr',
    'justifyItems': 'center'
}

const dashboard__heading = {
    'gridColumn': '1/4'
}
const Dashboard: React.FC  = () => (
    <div>
        <h1>Consensus</h1>
        <h2> Find the best solution to a specific problem.</h2>
        <Drawer buttonText="Help" component= {<DashboardHelp />} /> 
        <div style={dashboardContainer}>
            <h3 style={dashboard__heading}> Choose between ... </h3>
            <DashboardSelection link="/quick/issue" img="/quick.png" heading="Quick Session"
                text1 = "Where participants can voice opinions and be heard by the group."
                text2 = "Use when you have a small group where everyone can discuss and agree on the problem, objectives and solutions and then enter the details together."
            />
            <Login img="/private.png" heading="Private Voting"
                text1 = "Where participants would like individual votes."
                text2 = "Use when you have a large group or when participants can not openly discuss their opinions."
            />
            <Login img="/online.png" heading="Online Voting"
                text1 = "Responses are open for a defined timeframe. Participants are given links to complete their answers."
                text2 = "Use when participants are not able to be in the same room to complete their answer or are spread geographically."
            />

        </div>
    </div>
);
  
export default Dashboard;