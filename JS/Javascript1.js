/**
 * ==========================================
 * 1. ระบบจัดการเสียง (Sound Management)
 * ==========================================
 */
const hoverWind = new Audio('../Sound/Wind.mp3');
const hoverWatchai = new Audio('../Sound/WatChai.mp3');
const hoverPalace = new Audio('../Sound/throne-hall.mp3');
const hoverCity = new Audio('../Sound/mahanakhon.mp3');
const hoverWatarun = new Audio('../Sound/wat-arun.mp3');
const hoverTryping = new Audio('../Sound/Typing.mp3');
const hoverPickItem = new Audio('../Sound/Ticket.mp3');
const coinSound = new Audio('../Sound/Coin.mp3');
const takecoinSound = new Audio('../Sound/TakeCoin.mp3');
const clickSound = new Audio('../Sound/click.mp3');
const cancelSound = new Audio('../Sound/Cancel.mp3');
const postSound = new Audio('../Sound/Post.mp3');
const purchaseSound = new Audio('../Sound/item-purchase.mp3');
const checkbillSound = new Audio('../Sound/cash_register_open.mp3');
const openMapSound = new Audio('../Sound/openMap.mp3');
const openLockedSound = new Audio('../Sound/Unlock.mp3');
const takeKeySound = new Audio('../Sound/Get-key.mp3');
const clickLockedSound = new Audio('../Sound/ClickLockedSound.mp3');
const winGameSound = new Audio('../Sound/Win-game.mp3.mp3');

// ฟังก์ชันเริ่มเล่นเสียงลม
function startHoverWindSound() {
    hoverWind.currentTime = 0;
    hoverWind.volume = 0.5;
    hoverWind.play().catch(err => console.log("Sound blocked:", err));
}

// ฟังก์ชันเริ่มเล่นหยิบไอเทม
function startHoverPickItemSound() {
    hoverPickItem.currentTime = 0;
    hoverPickItem.volume = 0.5;
    hoverPickItem.play().catch(err => console.log("Sound blocked:", err));
}

// ฟังก์ชันเริ่มเล่นเสียงวัดไชยวัฒนาราม
function startHoverWatchaiSound() {
    hoverWatchai.currentTime = 0;
    hoverWatchai.volume = 0.5;
    hoverWatchai.play().catch(err => console.log("Sound blocked:", err));
}

// ฟังก์ชันเริ่มเล่นเสียงพระที่นั่ง
function startHoverPalaceSound() {
    hoverPalace.currentTime = 0;
    hoverPalace.volume = 0.5;
    hoverPalace.play().catch(err => console.log("Sound blocked:", err));
}

// ฟังก์ชันเริ่มเล่นเสียงตึกมหานคร
function startHoverCitySound() {
    hoverCity.currentTime = 0;
    hoverCity.volume = 0.5;
    hoverCity.play().catch(err => console.log("Sound blocked:", err));
}

// ฟังก์ชันเริ่มเล่นเสียงวัดอรุณ
function startHoverWatarunSound() {
    hoverWatarun.currentTime = 0;
    hoverWatarun.volume = 0.5;
    hoverWatarun.play().catch(err => console.log("Sound blocked:", err));
}

// ฟังก์ชันเริ่มเล่นเสียงการพิมพ์
function startHoverTrypingSound() {
    hoverTryping.currentTime = 0;
    hoverTryping.volume = 0.5;
    hoverTryping.play().catch(err => console.log("Sound blocked:", err));
}

// ฟังก์ชันหยุดเล่นเสียงลม
function stopHoverWindSound() {
    hoverWind.pause();
    hoverWind.currentTime = 0;
}

// ฟังก์ชันหยุดเล่นหยิบไอเทม
function stopHoverPickItemSound() {
    hoverPickItem.pause();
    hoverPickItem.currentTime = 0;
}

// ฟังก์ชันหยุดเล่นเสียงวัดไชยวัฒนาราม
function stopHoverWatchaiSound() {
    hoverWatchai.pause();
    hoverWatchai.currentTime = 0;
}

// ฟังก์ชันหยุดเล่นเสียงพระที่นั่ง
function stopHoverPalaceSound() {
    hoverPalace.pause();
    hoverPalace.currentTime = 0;
}

// ฟังก์ชันหยุดเล่นเสียงตึกมหานคร
function stopHoverCitySound() {
    hoverCity.pause();
    hoverCity.currentTime = 0;
}

// ฟังก์ชันหยุดเล่นเสียงวัดอรุณ
function stopHoverWatarunSound() {
    hoverWatarun.pause();
    hoverWatarun.currentTime = 0;
}

// ฟังก์ชันหยุดเล่นเสียงการพิมพ์
function stopHoverTrypingSound() {
    hoverTryping.pause();
    hoverTryping.currentTime = 0;
}

// ฟังก์ชันเล่นเสียงคลิกทั่วไป
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

// ฟังก์ชันเล่นเสียงรับเหรียญ
function playTakeCoinSound() {
    takecoinSound.currentTime = 0;
    takecoinSound.play();
}

// ฟังก์ชันเล่นเสียงชนะเกม
function playWinGameSound() {
    winGameSound.currentTime = 0;
    winGameSound.play();
}

// ฟังก์ชันเล่นเสียงเหรียญ
function playCoinSound() {
    coinSound.currentTime = 0;
    coinSound.play();
}

// ฟังก์ชันเล่นเสียงเมื่อยกเลิกหรือเกิดข้อผิดพลาด
function playCancelSound() {
    cancelSound.currentTime = 0;
    cancelSound.play();
}

// ฟังก์ชันเล่นเสียงเมื่อทำการโพสต์สำเร็จ
function playPostSound() {
    postSound.currentTime = 0;
    postSound.play();
}

// ฟังก์ชันเล่นเสียงเมื่อซื้อตั๋วสำเร็จ
function playPurchase(){
    purchaseSound.currentTime = 0;
    purchaseSound.play();
}

// ฟังก์ชันเล่นเสียงเมื่อเช็คบิลสำเร็จ
function playCheckbillSound(){
    checkbillSound.currentTime = 0;
    checkbillSound.play();
}

// ฟังก์ชันเล่นเสียงเปิดเเมพ
function playOpenMapSound(){
    openMapSound.currentTime = 0;
    openMapSound.play();
}

// ฟังก์ชันเล่นเสียงเก็บกุญเเจ
function playTakeKeySound() {
    takeKeySound.currentTime = 0;
    takeKeySound.play()
}

// ฟังก์ชันเล่นเสียงเปิดกุญเเจ
function playOpenLockedSound() {
    openLockedSound.currentTime = 0;
    openLockedSound.play()
}

// ฟังก์ชันเล่นเสียงจับเเม่กุญเเจ
function playClickLockedSound() {
    clickLockedSound.currentTime = 0;
    clickLockedSound.play()
}

/**
 * ==========================================
 * 2. ระบบแอนิเมชันและ UI (Scroll & Tooltip)
 * ==========================================
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const container = entry.target.querySelector('.Community-Container');
            if (container) {
                container.classList.add('appear');
            }
            entry.target.classList.add('appear');
            
            if (typeof flashOverlay !== 'undefined') {
                setTimeout(() => {
                    flashOverlay.classList.remove('active');
                }, 150);
            }
        } else {
            entry.target.classList.remove('appear');
        }   
    });
}, { threshold: 0.5 });

// ฟังก์ชันตรวจจับการเลื่อนหน้าจอเพื่อแสดงแอนิเมชัน
document.querySelectorAll('.Section-Theme').forEach((section) => {
    observer.observe(section);
});

// ฟังก์ชันจัดการ Tooltip ให้วิ่งตามตำแหน่งเมาส์
window.addEventListener('DOMContentLoaded', () => {
    const slideItems = document.querySelectorAll('.Slide-Item');
    slideItems.forEach(item => {
        const tooltip = item.querySelector('.stamp-tooltip');
        if (tooltip) {
            item.addEventListener('mousemove', (e) => {
                tooltip.style.left = (e.clientX + 10) + 'px';
                tooltip.style.top = (e.clientY + 10) + 'px';
            });
        }
    });
});

/**
 * ==========================================
 * 3. ระบบ Community (Post & Preview)
 * ==========================================
 */

// ฟังก์ชันแสดงตัวอย่างรูปภาพก่อนอัปโหลด
function previewFile() {
    const preview = document.getElementById('preview-img');
    const file = document.getElementById('file-input').files[0];
    const text = document.getElementById('preview-text');
    const reader = new FileReader();

    reader.onloadend = function () {
        if (preview) preview.src = reader.result;
        if (text) text.innerText = "Change Image";
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        if (preview) preview.src = "../IMG/Placeholder-camera.png";
    }
}

// ฟังก์ชันจัดการการโพสต์รูปภาพและข้อความ
function simulatePost(placeId) {
    const fileInput = document.getElementById('file-input');
    const commentInput = document.getElementById('user-comment');
    const previewImg = document.getElementById('preview-img');

    if (!fileInput || !previewImg) {
        console.error("Post elements not found!");
        return;
    }

    if (fileInput.files.length === 0) {
        Swal.fire({
            title: 'No Image Selected!',
            text: 'Please select an image from your device before posting.',
            icon: 'error',
            confirmButtonColor: '#d33'
        });
        return;
    }

    Swal.fire({
        title: 'Confirm Post?',
        text: "Would you like to share this photo in the Community?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#007bff',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        reverseButtons: true
    }).then((result) => {
        playPostSound();
        if (result.isConfirmed) {
            const commentText = commentInput ? (commentInput.value.trim() || "Visited this place!") : "Visited this place!";
            const timeStamp = getCurrentTimestamp();
            const imageData = previewImg.src;

            let allPosts = JSON.parse(localStorage.getItem('community_posts')) || {};
            if (!allPosts[placeId]) allPosts[placeId] = [];
            allPosts[placeId].push({
                text: commentText,
                time: timeStamp,
                image: imageData
            });
            localStorage.setItem('community_posts', JSON.stringify(allPosts));

            let postedPlaces = JSON.parse(localStorage.getItem('postedPlaces')) || [];
            if (!postedPlaces.includes(placeId)) {
                postedPlaces.push(placeId);
                localStorage.setItem('postedPlaces', JSON.stringify(postedPlaces));
            }

            Swal.fire({
                title: 'Upload Successful!',
                text: 'Updating your community feed...',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                location.reload();
            });
        }
    });
}

// ฟังก์ชันคลิกเลือกรูปในหน้า Login
function selectProfile(profileId) {
    const profilePath = `../IMG/${profileId}.png`;
    localStorage.setItem('userProfile', profilePath);
}

// ฟังก์ชันโหลดข้อมูลโพสต์จาก LocalStorage มาแสดงผล
function loadLocalPosts(placeId) {
    const miniFeed = document.getElementById('mini-feed-' + placeId);
    if (!miniFeed) return;

    const currentUserProfile = localStorage.getItem('userProfile') || '../IMG/profile1.png';
    const currentUsername = localStorage.getItem('userName') || 'You';

    let allPosts = JSON.parse(localStorage.getItem('community_posts')) || {};
    let localPosts = allPosts[placeId] || [];

    miniFeed.innerHTML = '';

    localPosts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.className = 'Feed-Item';
        
        postItem.innerHTML = `
            <img src="${currentUserProfile}" class="Avatar">
            <div class="Post-Body">
                <p><strong>${currentUsername}:</strong> ${post.text}</p>
                <div class="Post-Content">
                    <span class="Post-Time">${post.time}</span>
                    <div class="Post-Image-Container">
                        <img src="${post.image}" class="Post-Preview-In-Feed">
                    </div>
                </div>
            </div>
        `;
        miniFeed.prepend(postItem);
    });
}

/**
 * ==========================================
 * 4. ระบบเหรียญและรางวัล (Coin & Stamps)
 * ==========================================
 */

// ฟังก์ชันอัปเดตการแสดงผลเหรียญในส่วนหน้าจอ
function updateCoinUI() {
    const coinDisplay = document.getElementById('Coin-Display');
    if (!coinDisplay) return;

    let savedCoins = localStorage.getItem('userCoins') || 0;
    let currentCoins = parseInt(savedCoins);

    coinDisplay.innerHTML = ''; 

    for (let i = 1; i <= 3; i++) {
        const coinImg = document.createElement('img');
        if (i <= currentCoins) {
            coinImg.src = '../IMG/Coin.png'; 
        } else {
            coinImg.src = '../IMG/Coin.png'; 
            coinImg.style.filter = 'grayscale(100%) opacity(1)'; 
        }
        coinImg.alt = 'Coin Status';
        coinDisplay.appendChild(coinImg);
    }
}

// ฟังก์ชันจัดการการเก็บเหรียญสำหรับสถานที่ทั่วไป
function collectCoin(placeId) {
    let postedPlaces = JSON.parse(localStorage.getItem('postedPlaces')) || [];

    if (!postedPlaces.includes(placeId)) {
        Swal.fire({
            title: 'Action Required!',
            text: 'Please share a photo in the Community feed below to confirm your visit.',
            icon: 'warning',
            confirmButtonColor: '#FFB800'
        });

        const communityElement = document.getElementById('community-' + placeId);
        if (communityElement) {
            communityElement.scrollIntoView({ behavior: 'smooth' });
        }

        playCancelSound();
        return;
    }

    let savedCoins = localStorage.getItem('userCoins') || 0;
    let currentCoins = parseInt(savedCoins);
    let savedPlaces = localStorage.getItem('collectedPlaces') || "[]";
    let collectedPlaces = JSON.parse(savedPlaces);

    if (!collectedPlaces.includes(placeId)) {
        currentCoins += 1;
        collectedPlaces.push(placeId);
        
        localStorage.setItem('userCoins', currentCoins);
        localStorage.setItem('collectedPlaces', JSON.stringify(collectedPlaces));

        updateCoinUI();
        playTakeCoinSound();
        
        Swal.fire({
            title: 'Congratulations!',
            text: 'You have collected an architectural record. 1 coin earned!',
            icon: 'success',
            confirmButtonText: 'Next',
            confirmButtonColor: '#FFB800'
        }).then((result) => {
            handleNavigation(placeId, currentCoins);
        });
    } else {
        handleNavigation(placeId, currentCoins);
    }
}

// ฟังก์ชันจัดการการเก็บเหรียญสุดท้าย
function LastcollectCoin(placeId) {
    let postedPlaces = JSON.parse(localStorage.getItem('postedPlaces')) || [];

    if (!postedPlaces.includes(placeId)) {
        Swal.fire({
            title: 'Action Required!',
            text: 'Please share a photo in the Community feed below to confirm your visit.',
            icon: 'warning',
            confirmButtonColor: '#ffe100'
        });

        const communityElement = document.getElementById('community-' + placeId);
        if (communityElement) {
            communityElement.scrollIntoView({ behavior: 'smooth' });
        }
        playCancelSound();
        return;
    }

    let savedCoins = localStorage.getItem('userCoins') || 0;
    let currentCoins = parseInt(savedCoins);
    let savedPlaces = localStorage.getItem('collectedPlaces') || "[]";
    let collectedPlaces = JSON.parse(savedPlaces);


    if (!collectedPlaces.includes(placeId)) {
        currentCoins += 1;
        collectedPlaces.push(placeId);
        
        localStorage.setItem('userCoins', currentCoins);
        localStorage.setItem('collectedPlaces', JSON.stringify(collectedPlaces));

        updateCoinUI();
    
        Swal.fire({
            title: 'Amazing!',
            text: 'You have completed the collection. The Final Coin is yours!',
            icon: 'success',
            background: '#ddb0ff',
            timer: 3000,
            timerProgressBar: true
        }).then((result) => {
        
            setTimeout(() => {
                window.location.href = "EndPage.html";
            }, 500);
        });

    } else {
        window.location.href = "EndPage.html";
    }
}

// ฟังก์ชันควบคุมการเปลี่ยนหน้าตามจำนวนเหรียญหรือ ID
function handleNavigation(placeId, currentCoins) {
    if (currentCoins === 3) {
        window.location.href = "Summary.html";
        return;
    }

    if (placeId === 'theme1' || placeId === 'theme2' || placeId === 'theme3') {
        window.location.href = "Main_Theme.html";
    }

    if (currentCoins === 4){
        window.location.href = "EndPage.html";
    }
}

// ฟังก์ชันแสดงสแตมป์บนรูปภาพเมื่อทำภารกิจสำเร็จ
function checkAndDisplayStamp() {
    let savedPlaces = localStorage.getItem('collectedPlaces') || "[]";
    let collectedPlaces = JSON.parse(savedPlaces);

    const stampConfig = {
        'theme1': 'isStamp-place1',
        'theme2': 'isStamp-place2',
        'theme3': 'isStamp-place3',
        'theme4': 'isStamp-place4'
    };

    Object.keys(stampConfig).forEach(placeId => {
        const stampElement = document.getElementById(stampConfig[placeId]);
        
        if (stampElement) {
            if (collectedPlaces.includes(placeId)) {
                stampElement.style.display = 'block';
                stampElement.classList.add('stamp-appear');
            } else {
                stampElement.style.display = 'none';
            }
        }
    });
}

/**
 * ==========================================
 * 5. ระบบตั๋วและไอเทม (Tickets & Inventory)
 * ==========================================
 */

// ฟังก์ชันแลกซื้อตั๋วโดยหักเหรียญจากระบบ
function collectTicket(ticketId) {
    let currentCoins = parseInt(localStorage.getItem('userCoins')) || 0;
    let userTickets = JSON.parse(localStorage.getItem('user_tickets')) || [];

    if (userTickets.includes(ticketId)) {
        Swal.fire({
            title: 'Item Already Owned',
            text: 'You have already purchased this ticket.',
            icon: 'info',
            confirmButtonColor: '#6c757d'
        });
        return;
    }

    if (currentCoins >= 3) {
        playCheckbillSound()
        
        Swal.fire({
            title: 'Confirm Exchange?',
            text: "This ticket costs 3 coins. Do you wish to proceed?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FFB800',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Spend 3 Coins',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                currentCoins -= 3;
                localStorage.setItem('userCoins', currentCoins);
                
                userTickets.push(ticketId);
                localStorage.setItem('user_tickets', JSON.stringify(userTickets));

                if (typeof playCoinSound === 'function') playCoinSound();

                updateCoinUI(); 

                Swal.fire({
                    title: 'Purchase Successful!',
                    text: '3 coins have been deducted. Ticket added to inventory.',
                    icon: 'success',
                    confirmButtonColor: '#FFB800'
                });

                playPurchase();
                document.getElementById(ticketId).classList.add('collected');
            }
        });
    } else {
        if (typeof playCancelSound === 'function') playCancelSound();
        
        Swal.fire({
            title: 'Not Enough Coins!',
            text: `You need at least 3 coins (Current balance: ${currentCoins}).`,
            icon: 'error',
            confirmButtonColor: '#d33'
        });
    }
}

// ฟังก์ชันตรวจสอบสถานะความเป็นเจ้าของตั๋วในหน้ากระเป๋าหรือร้านค้า
document.addEventListener('DOMContentLoaded', () => {
    const userTickets = JSON.parse(localStorage.getItem('user_tickets')) || [];
    const isBagPage = document.getElementById('Item1') || document.getElementById('Item2');

    if (isBagPage) {
        const allItems = ['Item1', 'Item2', 'Item3', 'Item4'];
        allItems.forEach(itemId => {
            const itemElement = document.getElementById(itemId);
            if (itemElement) {
                const ticketName = itemId.replace('Item', 'Ticket');
                if (userTickets.includes(ticketName) || userTickets.includes(itemId)) {
                    itemElement.classList.remove('not-owned');
                } else {
                    itemElement.classList.add('not-owned');
                }
            }
        });
    } else {
        const tickets = document.querySelectorAll('.Ticket-Item');
        tickets.forEach(ticket => {
            const id = ticket.id;
            if (userTickets.includes(id)) {
                ticket.classList.add('collected');
            }
            ticket.addEventListener('click', () => {
                collectTicket(id);
            });
        });
    }
});

/**
 * ==========================================
 * 6. ระบบสไลด์ภาพอัตโนมัติ (Auto Slider)
 * ==========================================
 */
let scrollInterval;
const track = document.querySelector('.Slider-Window');
const btnStop = document.getElementById('btn-stop');
const btnPlay = document.getElementById('btn-play');

// ฟังก์ชันเริ่มการเลื่อนสไลด์อัตโนมัติ
function startAutoScroll() {
    if (!track) return; 
    scrollInterval = setInterval(() => {
        track.scrollLeft += 1.3;
        if (track.scrollLeft >= (track.scrollWidth - track.clientWidth)) {
            track.scrollLeft = 0;
        }
    }, 20);
}

// จัดการเหตุการณ์เมื่อคลิกปุ่มหยุดหรือเริ่มสไลด์
if (btnStop && btnPlay) {
    btnStop.onclick = function() {
        clearInterval(scrollInterval);
        btnStop.style.display = 'none';
        btnPlay.style.display = 'inline-block';
        playClickSound();
    };

    btnPlay.onclick = function() {
        startAutoScroll();
        btnPlay.style.display = 'none';
        btnStop.style.display = 'inline-block';
        playClickSound();
    };
}

/**
 * ==========================================
 * 7. ฟังก์ชันเสริมอื่นๆ (Utility Functions)
 * ==========================================
 */

function takeSecretKey() {
    playTakeKeySound();
    localStorage.setItem('hasSecretKey', 'true'); 
    
    Swal.fire({
        title: 'Secret Key Received!',
        text: 'You can now unlock the hidden destination.',
        icon: 'success',
        showConfirmButton: false, 
        timer: 1500,
        timerProgressBar: true 
    });

    setTimeout(() => {
        window.location.href = "Main_Theme.html";
    }, 2000);
}

// ฟังก์ชันสำหรับสร้างฉากกั้น (Locked Overlay) เฉพาะ Theme 4
function createLockedOverlay() {
    const theme4 = document.getElementById('theme4');
    if (!theme4 || localStorage.getItem('isUnlocked') === 'true') return;

    const overlay = document.createElement('div');
    overlay.id = 'lockedOverlay';
    overlay.className = 'Locked-Place';

    overlay.innerHTML = `
        <div class="Locked-container">
            <button type="button" class="Key-Unlock-Btn" onclick="checkUnlockKey()">
                <img src="../IMG/Locked.png" alt="Unlock">
            </button>
            <p>Hidden Location<br>Secret Key Required</p>
        </div>
    `;

    theme4.style.position = 'relative';
    theme4.appendChild(overlay);
}

// ฟังก์ชันสำหรับอัปเดตสถานะการแสดงผลกุญแจ
function updateKeyDisplay() {
    const keyDisplay = document.querySelector('#Key-Display img');
    if (!keyDisplay) return;

    const hasKey = localStorage.getItem('hasSecretKey');

    if (hasKey === 'true') {
        keyDisplay.classList.remove('key-locked');
    } else {
        keyDisplay.classList.add('key-locked');
    }
}

// ฟังก์ชันเช็คกุญแจและบันทึกสถานะ
function checkUnlockKey() {
    playClickLockedSound();
    
    const hasKey = localStorage.getItem('hasSecretKey');
    const overlay = document.getElementById('lockedOverlay');
    const lockImg = overlay ? overlay.querySelector('img') : null;

    if (hasKey === 'true') {
        
        if (lockImg) {
            lockImg.classList.add('key-vibrating')
        }

        setTimeout(() => {
            
            playOpenLockedSound();

            Swal.fire({
                title: 'Unlock Successful!',
                text: 'The hidden location has been revealed.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                localStorage.setItem('isUnlocked', 'true');

                if (overlay) {
                    overlay.style.transition = "opacity 1s ease";
                    overlay.style.opacity = '0';
                    
                    setTimeout(() => overlay.remove(), 1000);
                }
            });

        }, 2000);

    } else {
        if (lockImg) {
            lockImg.classList.add('key-vibrating');
            setTimeout(() => lockImg.classList.remove('key-vibrating'), 500);
        }

        setTimeout(() =>{{
                Swal.fire({
                title: 'Access Denied!',
                text: 'Secret Key required. Complete your collection to earn it.',
                icon: 'error',
                confirmButtonColor: '#d33'
            });
        }}, 300);
        
    }
}

// ฟังก์ชันตรวจสอบสิทธิ์เข้าหน้าสถานที่ลับ
function checkSecretPlace() {
    let savedCoins = localStorage.getItem('userCoins');
    let currentCoins = parseInt(savedCoins) || 0;

    if (currentCoins >= 3) {
        window.location.href = "Secret_Place.html";
    } else {
        alert("Collection incomplete! Please explore other locations first.");
    }
}

// ฟังก์ชันดึงวันเวลาปัจจุบันรูปแบบไทย
function getCurrentTimestamp() {
    const now = new Date();
    const options = { 
        day: '2-digit', 
        month: 'short', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    return now.toLocaleDateString('en-US', options);
}

// ฟังก์ชันสรุปจำนวนเหรียญในหน้า Summary
function renderSummary() {
    const coinContainer = document.getElementById('Final-Coins');
    const coinText = document.getElementById('Coin-Count');
    if (!coinContainer) return;

    let savedCoins = localStorage.getItem('userCoins') || 0;
    let currentCoins = parseInt(savedCoins);
    
    coinText.innerText = currentCoins;
    coinContainer.innerHTML = '';

    for (let i = 0; i < currentCoins; i++) {
        const img = document.createElement('img');
        img.src = '../IMG/Coin.png';
        img.classList.add('stamp-appear');
        coinContainer.appendChild(img);
    }
}

// ฟังก์ชันสำหรับออกจากระบบและล้างข้อมูลทั้งหมด
function LogoutProfile(){
    Swal.fire({
        title: 'Logout and Restart?',
        text: "Your progress and collected items will be cleared.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FFB800',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear(); 
            
            window.location.href = "../index.html";
        }
    });
}

/**
 * ==========================================
 * 8. การทำงานเมื่อโหลดหน้าเว็บ (Initialization)
 * ==========================================
 */
window.onload = function() {
    const savedName = localStorage.getItem('userName');
    const savedImg = localStorage.getItem('userProfile');

    if (savedName) {
        document.querySelector('.Username').innerText = savedName;
    }
    if (savedImg) {
        document.querySelector('.UserProfileImage').src = savedImg;
    }

    updateKeyDisplay();
    createLockedOverlay();
    updateCoinUI();
    checkAndDisplayStamp();
    renderSummary();

    if (document.getElementById('theme1')) loadLocalPosts('theme1');
    if (document.getElementById('theme2')) loadLocalPosts('theme2');
    if (document.getElementById('theme3')) loadLocalPosts('theme3');
    if (document.getElementById('theme4')) loadLocalPosts('theme4');

    if (document.querySelector('.Slider-Window')) {
        startAutoScroll();
    }
};