const main = () => {
    const canvas = <HTMLCanvasElement>document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");
    if (gl === null) {
        alert("WebGL not supported");
        return;
    }

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
};

window.onload = main;
