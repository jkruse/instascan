import Camera from "./Camera";
export default class EnvironmentCamera extends Camera {
    private stream;
    constructor();
    start(): Promise<MediaStream>;
    stop(): void;
    static getCamera(): Promise<EnvironmentCamera>;
}
//# sourceMappingURL=EnvironmentCamera.d.ts.map