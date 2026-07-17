document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 1500);
    });

    // 2. Typing Effect for Tagline
    const text = document.getElementById('typewriter').innerText;
    const box = document.getElementById('typewriter');
    box.innerText = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            box.innerText += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            box.style.borderRight = "none";
        }
    }
    setTimeout(type, 2000);

    // 3. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        const scrollProgress = document.getElementById('scroll-progress');
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollPx / winHeightPx) * 100;

        scrollProgress.style.width = `${scrolled}%`;

        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    // 4. Background Canvas Animation
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let dots = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < 40; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(59, 130, 246, 0.2)";
        dots.forEach(d => {
            d.x += d.vx;
            d.y += d.vy;
            if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
            if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
            ctx.beginPath();
            ctx.arc(d.x, d.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();

    // 5. Scroll Reveal
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });

    // 6. Current Year
    document.getElementById('year').innerText = new Date().getFullYear();
});