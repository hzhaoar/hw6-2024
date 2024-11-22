var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");

	video = document.querySelector("#player1");

	video.autoplay = false;
	video.loop = false;

	document.querySelector("#play").addEventListener("click", function () {
		console.log("Play Video");
		video.play();
		updateVolumeDisplay();
	});

	document.querySelector("#pause").addEventListener("click", function () {
		console.log("Pause Video");
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function () {
		console.log("Slow down video");
		video.playbackRate *= 0.9;
		console.log("Speed is " + video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function () {
		console.log("Speed up video");
		video.playbackRate /= 0.9;
		console.log("Speed is " + video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function () {
		console.log("Skip ahead");
		if (video.currentTime + 10 < video.duration) {
			video.currentTime += 10;
		} else {
			video.currentTime = 0;
		}
		console.log("Video current time is " + video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function () {
		console.log(this.textContent);
		video.muted = !video.muted;
		this.textContent = video.muted ? "Unmute" : "Mute";
	});

	document.querySelector("#slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		updateVolumeDisplay();
		console.log("Current volume: " + video.volume);
	});

	document.querySelector("#vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
		console.log("Old School style applied");
	});

	document.querySelector("#orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
		console.log("Old School style removed");
	});
});

function updateVolumeDisplay() {
	const volumeDisplay = document.querySelector("#volume");
	volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%";
}


