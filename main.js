/** document.addEventListener("DOMContentLoaded", function() {
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('arjs', '');

    const marker = document.createElement('a-marker');
    marker.setAttribute('preset', 'hiro');

    const box = document.createElement('a-box');
    box.setAttribute('position', '0 0.5 0');
    box.setAttribute('material', 'color: red');

    marker.appendChild(box);
    scene.appendChild(marker);

    const camera = document.createElement('a-camera');
    camera.setAttribute('arjs', '');
    scene.appendChild(camera);

    document.getElementById('ar-container').appendChild(scene);
});
*/