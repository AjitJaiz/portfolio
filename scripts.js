document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    gsap.from('header', {duration: 1, y: '-100%', ease: 'bounce'});
    gsap.from('nav ul li', {duration: 1, opacity: 0, stagger: 0.5});
    gsap.from('#hero h1', {duration: 1, opacity: 0, delay: 1});
    gsap.from('#hero p', {duration: 1, opacity: 0, delay: 1.5});
    gsap.from('#hero img', {duration: 1, opacity: 0, scale: 0.5, delay: 2});
    gsap.from('#about', {duration: 1, x: '-100%', ease: 'power1.inOut', scrollTrigger: '#about'});
    gsap.from('#skills', {duration: 1, x: '100%', ease: 'power1.inOut', scrollTrigger: '#skills'});
    gsap.from('#experience', {duration: 1, y: '100%', ease: 'power1.inOut', scrollTrigger: '#experience'});
    gsap.from('#contact', {duration: 1, opacity: 0, ease: 'power1.inOut', scrollTrigger: '#contact'});

    // Three.js for 3D Effects
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#hero-canvas'), alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xff6347, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    function animate() {
        requestAnimationFrame(animate);

        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
