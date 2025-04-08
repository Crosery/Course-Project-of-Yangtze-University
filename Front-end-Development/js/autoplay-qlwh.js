window.onload = function() {
    // 使用 document.body 或 document.documentElement 触发事件
    const event = new Event('click');
    document.body.dispatchEvent(event);

    // 创建音频并播放
    const audio = new Audio('music/千恋万花.mp3');
    audio.play().catch(e => {
        // 备选方案：用户交互后播放
        document.addEventListener('click', () => {
            audio.play();
        }, { once: true });
    });
}