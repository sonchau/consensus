import React from 'react';


const DrawerContent = () => {
    return (
        <div className="drawer-container">
            <p>Now that you've defined your problem, you need to list your OBJECTIVES. To do this, think about what finding a solution will mean for everyone involved. It's likely that solving the problem will have a multitude of positive impacts, for a multitude of stakeholders.</p>
            <ul>
                <li className="circle">Your objectives should be as specific as possible, particularly if they involve distance, cost or any other scale-able measure. For example, rather than having an objective that says "To have a clinic close to the primary school", you would be better with:</li>
            </ul>
            <p>Objective 1 "To have a MCH clinic within 1km of the primary school"</p>
            <p>Objective 2 "To have a MCH clinic within walking distance (250m) of the primary school"</p>
            <p>This will enable you to measure your options more precisely.</p>
            <ul>
                <li className="circle">Be careful that your objectives don't double up. If they do, you are effectively doubling the weight of this issue. For example, the following two objectives are really the same:</li>
            </ul>
            <p>Objective 1 "To have a trouble-free holiday"</p>
            <p>Objective 2 "To minimise the risk of disruptions"</p>
            <p>These objectives would be better joined into one, "To have a trouble-free trip and minimise the risk of disruptions"</p>
            <ul>
                <li className="circle">When adding a weight to your objectives, you're really saying "How important is this objective, relative to the others?" If it's a deal breaker, you should give it a high weighting. If it's a minor nice-to-have kind of outcome then it should have a low weighting.</li>
                <li className="circle"> Remember that you cannot change these weightings, so make sure you are happy with them before you continue</li>
            </ul>
            <p>Facilitator Tips</p>
            <ul>
                <li>Encourage all members of the group to participate</li>
                <li>Discuss one idea at a time</li>
                <li>ssign a scribe and use the notes sections to record any assumptions</li>
            </ul>
        </div>
    )
}

export default DrawerContent