const episodeData = [
    {
        id: 'food',
        navTitle: 'FOOD',
        title: 'Fuel for the Hunt',
        description: 'Every hunter needs their fuel. From spicy ramen that ignites your spirit to sweet treats that celebrate a victory, discover the essential eats that power the world\'s greatest demon hunters.',
        images: [
            "./images/sub4/sub4_3.avif",
            "./images/sub4/sub4_4.avif",
            "./images/sub4/sub4_4.avif"
        ]
    },
    {
        id: 'couple',
        navTitle: 'COUPLE',
        title: 'Partners in Destiny',
        description: 'Two souls, one mission. Explore the powerful bonds and dynamic synergies between hunters who fight side-by-side against the encroaching darkness.',
        images: [
            "./images/sub4/sub4_7.avif",
            "./images/sub4/sub4_8.avif",
            "./images/sub4/sub4_8.avif"
        ]
    },
    {
        id: 'voice',
        navTitle: 'VOICE',
        title: 'Echoes of Power',
        description: 'A hunter\'s voice can be their greatest weapon. Listen to the battle cries, secret whispers, and powerful incantations that turn the tide of any fight.',
        images: [
            "./images/sub4/sub4_9.avif",
            "./images/sub4/sub4_10.avif",
            "./images/sub4/sub4_10.avif"
        ]
    }
];



document.addEventListener("DOMContentLoaded", function () {


    const tabMenu = document.querySelector(".sub_nav");
    const contentArea = document.getElementById("episodes_content");

    function createMenu() {
        episodeData.forEach(function (episode, index) {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.href = "#";
            a.textContent = episode.navTitle;
            a.dataset.episodeId = episode.id;

            if (index === 0) {
                a.classList.add("current");
            }

            li.appendChild(a);
            tabMenu.appendChild(li);
        });
    }

    function updateContent(episodeId) {
        const selectedEpisode = episodeData.find(function (ep) {
            return ep.id === episodeId;
        });
        if (!selectedEpisode) return;

        contentArea.innerHTML = "";



        const p = document.createElement('p');
        p.textContent = selectedEpisode.description;

        const imgGallery = document.createElement('div');
        imgGallery.className = 'episode-images';

        selectedEpisode.images.forEach(function (imagePath) {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'episode-image';
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = `${selectedEpisode.title} image`;
            imgContainer.appendChild(img);
            imgGallery.appendChild(imgContainer);
        });

        contentArea.appendChild(p);
        contentArea.appendChild(imgGallery);
    }

    // 3. 이벤트 처리
    tabMenu.addEventListener('click', function (event) {

        if (event.target.tagName !== 'A') return;

        event.preventDefault();


        tabMenu.querySelectorAll('a').forEach(function (link) { link.classList.remove('current') });

        event.target.classList.add('current');

        const selectedId = event.target.dataset.episodeId;

        updateContent(selectedId);
    });


    createMenu();
    updateContent(episodeData[0].id);
}); 