import Camera from "./Camera";

export default class EnvironmentCamera extends Camera {
	private stream: MediaStream;

    constructor() {
        super('env', 'Environment facing camera');
    }

	async start() {
		this.stream = await Camera.wrapErrors(async () => {
			return await navigator.mediaDevices.getUserMedia({
				audio: false,
				video: {
                    facingMode: 'environment'
				}
			});
		});

		return this.stream;
	}

	stop() {
		if (!this.stream) {
			return;
		}

		for (let track of this.stream.getVideoTracks()) {
			track.stop();
		}

		this.stream = null;
    }
    
    static async getCamera() {
		await Camera.ensureAccess();
        let stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                facingMode: 'environment'
            }
        });
        for (let track of stream.getVideoTracks()) {
            track.stop();
        }
        return new EnvironmentCamera();
    }
}