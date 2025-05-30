const devPic = document.querySelector('.devPic');

    devPic.addEventListener('mousemove', (e) => {
        const rect = devPic.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        devPic.style.setProperty('--x', `${x}%`);
        devPic.style.setProperty('--y', `${y}%`);
    });