// Timer

	let deadline = "2019-09-25";

	function getPeriod(endtime) { 
		let t = Date.parse(endtime) - Date.parse(new Date()),
		hours = Math.floor((t/1000/60/60)),
		minutes = Math.floor((t/1000/60) % 60),
		seconds = Math.floor((t/1000) % 60);

		return {
			periodMS: t,
			periodH: hours,
			periodM: minutes,
			periodS: seconds,
		}
	}

	function setTimer(id, endtime) {
		let timer = document.getElementById(id),
			timerHours = timer.querySelector(".hours"),
			timerMinutes = timer.querySelector(".minutes"),
			timerSeconds = timer.querySelector(".seconds"),
			timerInterval = setInterval(updateTimer, 1000);

			function updateTimer() {
				let t = getPeriod(endtime);
				if (t.periodMS > 0) {
					for(let key in t) {
						if (t[key] < 10) {
							t[key] = "0" + t[key];
						}
					}
					timerHours.textContent = t.periodH;			
					timerMinutes.textContent = t.periodM;			
					timerSeconds.textContent = t.periodS;
				} else {
					timerHours.textContent = "00";
					timerMinutes.textContent = "00";			
					timerSeconds.textContent = "00";
					clearInterval(timerInterval);
				}
			};
	};
	setTimer("timer", deadline);
