

function JavaScriptFramework(props) {
    const { frameworkName, sim } = props;
    return <div>
        Hello {frameworkName} {sim.repeat(3)}
    </div>
}


export default JavaScriptFramework;