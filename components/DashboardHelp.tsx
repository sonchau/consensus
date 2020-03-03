
import Link from 'next/link';
import DashboardSelection from './DashboardSelection';
import Drawer from './common/Drawer'

const DashboardHelp: React.FC  = () => (
    <div className="drawer-container">
        <h2>Using Consensus</h2>
        <hr />
        <p>As you work through your decision-making exercise using Consensus you can click this Help button for information on each step in the process.</p>
        <p>To begin with, you need to decide whether to use Quick Session, Private Voting or Online Voting.</p>
        <h4>Quick Session</h4>
        <p>This is the most simple form of Consensus. It is designed to be used by small groups who are openly discussing and agreeing on all aspects of the process: what the problem is, the objectives (and their weightings) you are trying to achieve by addressing the problem and the range of solutions and how they score against the objectives.</p>
        <h4>Private Voting</h4>
        <p>This option is for larger groups or where participants want to have their own weightings and scores included, rather than agree on a single set of weights and scores.</p>
        <h4>Online Voting</h4>
        <p>This option is designed to allow remote participation. It is the same as the Private Voting option, but designed like an online survey.</p>
    </div>
);

export default DashboardHelp;