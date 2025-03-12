class Background3D {
    constructor() {
        this.canvas = document.getElementById('bg-canvas');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });

        this.init();
        this.animate();
    }

    init() {
        // 设置渲染器
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // 设置相机位置
        this.camera.position.z = 30;

        // 创建粒子系统
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 100;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // 创建粒子材质
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.15,
            color: '#4A90E2',
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        // 创建粒子系统
        this.particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particlesMesh);

        // 添加第二个粒子系统
        const particles2Geometry = new THREE.BufferGeometry();
        const particles2Count = 2000;
        const pos2Array = new Float32Array(particles2Count * 3);

        for (let i = 0; i < particles2Count * 3; i++) {
            pos2Array[i] = (Math.random() - 0.5) * 100;
        }

        particles2Geometry.setAttribute('position', new THREE.BufferAttribute(pos2Array, 3));

        const particles2Material = new THREE.PointsMaterial({
            size: 0.1,
            color: '#00C1D4',
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });

        this.particles2Mesh = new THREE.Points(particles2Geometry, particles2Material);
        this.scene.add(this.particles2Mesh);

        // 添加事件监听
        window.addEventListener('resize', this.onWindowResize.bind(this));
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(event) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        this.particlesMesh.rotation.x += mouseY * 0.001;
        this.particlesMesh.rotation.y += mouseX * 0.001;
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        // 旋转粒子系统
        this.particlesMesh.rotation.x += 0.0005;
        this.particlesMesh.rotation.y += 0.0005;

        this.renderer.render(this.scene, this.camera);
    }
}

// 初始化背景
new Background3D(); 