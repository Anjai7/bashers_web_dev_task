// Add interactivity if needed
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const title = document.querySelector('.title');
    const creatorName = document.querySelector('.creator-name');

    // Example: Add a click event to the card
    card.addEventListener('click', () => {
        console.log('Card clicked!');
    });

    // Example: Add hover effects using JavaScript (optional)
    title.addEventListener('mouseenter', () => {
        title.style.color = 'hsl(178, 100%, 50%)';
    });

    title.addEventListener('mouseleave', () => {
        title.style.color = 'hsl(0, 0%, 100%)';
    });

    creatorName.addEventListener('mouseenter', () => {
        creatorName.style.color = 'hsl(178, 100%, 50%)';
    });

    creatorName.addEventListener('mouseleave', () => {
        creatorName.style.color = 'hsl(0, 0%, 100%)';
    });
});
