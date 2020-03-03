
import Link from 'next/link';
import DashboardSelection from './DashboardSelection';
import Drawer from './common/Drawer'
import DashboardHelp from './DashboardHelp'

const dashboard = {

}
const dashboard__selection = {
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
    <div style={dashboard} >
        <h1>Using Consensus</h1>
        <p>As you work through your decision-making exercise using Consensus you can click this Help button for information on each step in the process.</p>
            <p>To begin with, you need to decide whether to use Quick Session, Private Voting or Online Voting.</p>
        <Drawer buttonText="Help" component= {<DashboardHelp />} /> 
        <div style={dashboard__selection}>
            <h3 style={dashboard__heading}> Choose between ... </h3>
           
            <DashboardSelection link="/quick/issue" img="/quick.png" heading="Quick Session"
                text1 = "This is the most simple form of Consensus. It is designed to be used by small groups who are openly discussing and agreeing on all aspects of the process: what the problem is, the objectives (and their weightings) you are trying to achieve by addressing the problem and the range of solutions and how they score against the objectives."
                text2 = ""
            />
            <DashboardSelection link="/" img="/private.png" heading="Private Voting"
                text1 = "This option is for larger groups or where participants want to have their own weightings and scores included, rather than agree on a single set of weights and scores."
                text2 = ""
            />
            <DashboardSelection link="/" img="/online.png" heading="Online Voting"
                text1 = "This option is designed to allow remote participation. It is the same as the Private Voting option, but designed like an online survey."
                text2 = "."
            />

        </div>
    </div>
);
  
export default Dashboard;