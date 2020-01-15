
import Link from 'next/link';
import BackNext from '../common/BackNext';

const issue = {
    'border': '1px solid #e2e8f0',
    'border-radius': '1rem',
    'outline': 'none',
    padding: '1rem',
    width: '100%',
    'font-size': 'inherit'
  };

  
  const Issue: React.FC  = () => (
    <div style={issue} >
        <h2>State your problem</h2>
        <p>
            <input
            type="text"
            name="issue"
            style={issue}
            placeholder="Describe your issue"
            />
        </p>
        <BackNext backHref="/" nextHref="/quick/issue/definition" />
    </div>
  );
  
  export default Issue;