
import Link from 'next/link';
import DashboardSelection from './DashboardSelection';

const dashboard = {

}
const dashboard__selection = {
    border: '1px solid #ccc',
    'border-radius': '1rem',
    padding: '1rem 0 2rem',
    //'text-align': 'center'
    display: 'grid',
    'grid-template-rows': '5rem 1fr',
    'grid-template-columns': '1fr 1fr 1fr',
    'justify-items': 'center'
}

const dashboard__heading = {
    'gridColumn': '1/4'
}
const Dashboard: React.FC  = () => (
    <div style={dashboard} >
        <h1>Consensus</h1>
        <h2> Find the best solution to a specific problem.</h2>
        <div style={dashboard__selection}>
            <h3 style={dashboard__heading}> Choose between ... </h3>
            <DashboardSelection link="/quick/issue" img="/quick.png" heading="Quick Session"
                text1 = "Where individual participants cam voice opinions and be heard by the group"
                text2 = "Use when you have a small group where everyone can discuss and agree on the answer and then inut them together"
            />
            <DashboardSelection link="/private" img="/private.png" heading="Private Voting"
                text1 = "Where participants would like individual votes"
                text2 = "Use when you have a large group or when participants can not openly discuss their opinions"
            />
            <DashboardSelection link="/online" img="/online.png" heading="Online Voting"
                text1 = "Responeses are open for a defined timeframe. Participants are given links to complete their answers"
                text2 = "Use when participants are not able to be in the same room to complete their answer or are spread geographically"
            />

        </div>
    </div>
);
  
export default Dashboard;