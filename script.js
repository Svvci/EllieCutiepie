document.addEventListener('DOMContentLoaded', () => {
    const doors = document.querySelectorAll('.door');
    const doorsContainer = document.querySelector('.doors-container');
    const title = document.querySelector('.title');
    const backBtns = document.querySelectorAll('.back-btn');
    const contents = document.querySelectorAll('.content-container');

    doors.forEach((door, index) => {
        door.addEventListener('click', () => {

            // Close any previously opened door
            doors.forEach(d => d.classList.remove('open'));

            // Open clicked door
            door.classList.add('open');

            // Hide all content first (clean reset)
            contents.forEach(c => c.classList.remove('visible'));

            setTimeout(() => {
                doorsContainer.classList.add('hidden');
                title.style.opacity = '0';

                const targetContent = document.getElementById(`content${index + 1}`);
                targetContent.classList.add('visible');

                // 🔥 If it's the black door → restart video
                if (index === 0) {
                    const video = targetContent.querySelector('video');
                    if (video) {
                        video.currentTime = 0;
                        video.play();
                    }
                }

            }, 700);
        });
    });

    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            // Hide all content
            contents.forEach(content => {
                content.classList.remove('visible');
            });

            // Stop video when going back
            const videos = document.querySelectorAll('video');
            videos.forEach(v => v.pause());

            setTimeout(() => {
                title.style.opacity = '1';
                doorsContainer.classList.remove('hidden');

                // Reset doors
                doors.forEach(door => {
                    door.classList.remove('open');
                });
            }, 500);
        });
    });
});