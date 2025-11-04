// Get all project thumbnails and modals
const projectThumbnails = document.querySelectorAll('.project-thumbnail');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

// Open modal when thumbnail is clicked
projectThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const modal = document.getElementById(`projectModal${projectId}`);
        
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal when close button is clicked
closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        closeAllModals();
    });
});

// Close modal when clicking outside the content
modals.forEach(modal => {
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeAllModals();
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllModals();
    }
});

function closeAllModals() {
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
    
    // Pause all videos when closing modals
    const videos = document.querySelectorAll('.gallery-video');
    videos.forEach(video => {
        video.pause();
    });
}

modals.forEach(modal => {
    modal.addEventListener('wheel', function(event) {
        event.stopPropagation();
    });
});
// Animate skill bars when section comes into view
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('.skills-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const level = bar.getAttribute('data-level');
                    bar.style.width = level + '%';
                });
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    animateSkillBars();
    
    // Add hover effects for skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
