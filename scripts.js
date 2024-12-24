function showGreeting() {  
    const username = document.getElementById('username').value;  
    if (username.trim() === "") {  
        alert("Vui lòng nhập tên của bạn!");  
        return;  
    }  

    const greetings = [  
        `Chúc ${username} một Giáng sinh ấm áp và tràn đầy hạnh phúc! 🎅`,  
        `${username}, mong bạn có một mùa Giáng sinh tuyệt vời! ❄️`,  
        `🎄 ${username}, chúc bạn luôn vui vẻ và ngập tràn yêu thương trong dịp Giáng sinh này! 🎁`  
    ];  

    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];  
    document.getElementById('greeting').textContent = randomGreeting;  

    document.getElementById('step1').classList.add('hidden');  
    document.getElementById('step2').classList.remove('hidden');  

    createSnowflakes(50); // Tạo 50 bông tuyết  
}  

function restart() {  
    document.getElementById('username').value = "";  
    document.getElementById('step2').classList.add('hidden');  
    document.getElementById('step1').classList.remove('hidden');  
    document.getElementById('snowflakes').innerHTML = ""; // Xóa bông tuyết  
}  

function createSnowflakes(num) {  
    const snowflakesContainer = document.getElementById('snowflakes');  
    for (let i = 0; i < num; i++) {  
        const snowflake = document.createElement('div');  
        snowflake.className = 'snowflake';  
        snowflake.innerHTML = '❄️';  

        const leftPosition = Math.random() * 100; // Vị trí trái ngẫu nhiên  
        snowflake.style.left = leftPosition + 'vw';   
        snowflake.style.fontSize = Math.random() * 1 + 0.5 + 'em'; // Kích thước ngẫu nhiên  

        snowflakesContainer.appendChild(snowflake);  

        // Hiệu ứng rơi tự do  
        setTimeout(() => {  
            snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Thay đổi tốc độ rơi  
            snowflake.style.transform = 'translateY(100vh)';  
        }, 10);  

        // Sau khi kết thúc hiệu ứng, xóa bông tuyết  
        snowflake.addEventListener('animationend', () => {  
            snowflake.remove();  
        });  
    }  
}
