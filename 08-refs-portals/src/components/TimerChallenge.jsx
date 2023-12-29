import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef();
	const dialog = useRef();
	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
	const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
	if (timeRemaining <= 0) {
		handleStop();
	}
	function handleStart() {
		timer.current = setInterval(() => {
			setTimeRemaining(previousTimeRemaining => previousTimeRemaining - 10);
		}, 10);
	}
	function handleStop() {
		dialog.current.open();
		clearInterval(timer.current);
	}
	function handleReset() {
		setTimeRemaining(targetTime * 1000);
	}
	/* const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);
	function handleStart() {
		timer.current = setTimeout(() => {
			setTimerExpired(true);
			dialog.current.open();
		}, targetTime * 1000);
		setTimerStarted(true);
	}
	function handleStop() {
		clearTimeout(timer.current);
	} */
	return (
		<>
			<ResultModal
				onReset={handleReset}
				ref={dialog}
				remainingTime={timeRemaining}
				targetTime={targetTime}
			/>
			<section className='challenge'>
				<h2>{title}</h2>
				<p className='challenge-time'>
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</p>
				<p>
					{/* <button onClick={timerStarted ? handleStop : handleStart}>
						{timerStarted ? 'Stop' : 'Start'} Challenge
					</button> */}
					<button onClick={timerIsActive ? handleStop : handleStart}>
						{timerIsActive ? 'Stop' : 'Start'} Challenge
					</button>
				</p>
				<p className={timerIsActive ? 'active' : undefined}>
					{timerIsActive ? 'Time is running...' : 'Timer inactive'}
				</p>
			</section>
		</>
	);
}
