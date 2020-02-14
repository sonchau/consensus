import React, { useEffect, useState } from 'react';


const bullet = {
    listStyleType: 'inherit',
    lineHeight: '2rem',
    marginBottom: '1rem'
}
const dot = {
    listStyleType: 'inherit',
    lineHeight: '2rem',
    marginBottom: '1rem'
}

const DrawerContent = () => {

    return (
        <div className="drawer-container">
            <strong>So you've got a choice to make.</strong>
            <p>You're in danger of going in circles when really you want to make an evidence-based decision.</p>
            <p>ChoozeE will help to guide you through the decision-making process. Flexible enough to be used by individuals or groups, the tool will act as a digital facilitator, offering you tips along the way and keeping a record of your progress and results.</p>
            <p>Some tips before you start.</p>
            <ul>
                <li style={bullet}>Whether you're trying to solve a complex problem, or simply deciding on which colour to paint your office, it's important to define the subject carefully before you begin.</li>
                <li style={bullet}>The next page will ask you to describe your problem as a cause and a consequence. For some problems, this can be quite difficult, and causes disagreement and confusion, so allow plenty of time for this first step. If you're getting bogged down, try answering the following questions...</li>
                    <ul>
                        <li style={dot}>Why does it matter?</li>
                        <li style={dot}>What is the fundamental cause of this problem?</li>
                        <li style={dot}>What is the consequence that is relevant to you?</li>
                        <li style={dot}>Is it your responsibility to address this consequence?</li>
                        <li style={dot}>So what? So what? So what?</li>
                        
                    </ul>
                <li style={bullet}>If you still can't agree on the root cause of the problem, you may not be ready to make a decision about this particular matter and you may want to invest in an exercise to define your problem, for example, by running a problem definition workshop.</li>
                <li style={bullet}>OR you may have not one but two problems that need to be addressed.</li>
                <li style={bullet}>If you think running a workshop is a bit over the top for this particular problem, then just try to settle on a description that is "close enough".</li>
         
            </ul>    



        </div>
    )
}

export default DrawerContent