import './robot.css';

const Robot = () => {

    const handleClick = () => {
        console.log('robit clicked');
    }

    return (
        <div className = 'robot-wrapper' onClick = { () => handleClick() }/>
    )

}

export default Robot;