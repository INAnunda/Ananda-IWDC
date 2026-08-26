let selectedProfile = ""; 

const profiles = ['profile1', 'profile2', 'profile3'];

profiles.forEach(id => {
    const imgElement = document.getElementById(id);
    
    if (imgElement) {
        imgElement.addEventListener('click', function() {
            profiles.forEach(pId => {
                const element = document.getElementById(pId);
                if (element) element.classList.remove('selected');
            });

            this.classList.add('selected');

            selectedProfile = this.src;
            console.log("Selected Profile ID:", id); 
        });
    }
});

function SaveAccout() {

    localStorage.clear(); 
    
    const nameInput = document.querySelector('.add-name-user input').value.trim();

    if (nameInput === "") {
        Swal.fire({ 
            title: 'Name Required!', 
            text: 'Please enter your name before starting your Architectural Heritage Records journey.', 
            icon: 'warning',
            confirmButtonColor: '#FFB800'
        });
        return;
    }

    if (selectedProfile === "") {
        Swal.fire({ 
            title: 'Select a Profile', 
            text: 'Please choose your preferred profile icon to continue.', 
            icon: 'info',
            confirmButtonColor: '#FFB800'
        });
        return;
    }

    localStorage.setItem('userName', nameInput);
    localStorage.setItem('userProfile', selectedProfile);

    localStorage.setItem('userCoins', 0);
    localStorage.setItem('collectedPlaces', JSON.stringify([]));

    window.location.href = "./Html/Main_Theme.html";
}