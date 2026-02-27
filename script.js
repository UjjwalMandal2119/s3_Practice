// Folder click interactions
document.addEventListener('DOMContentLoaded', function() {
    const folders = document.querySelectorAll('.folder');
    
    folders.forEach(folder => {
        folder.addEventListener('click', function() {
            const folderType = this.dataset.folder;
            this.style.background = '#4299e1';
            this.style.color = 'white';
            this.style.transform = 'scale(0.95)';
            
            // Folder-specific actions
            switch(folderType) {
                case 'basics':
                    alert('📁 Basics Folder:\n• Buckets & Objects\n• Storage Classes\n• Access Patterns');
                    break;
                case 'advanced':
                    alert('⚙️ Advanced Folder:\n• Versioning\n• Lifecycle Policies\n• IAM & Security');
                    break;
                case 'deploy':
                    alert('🌐 Deploy Folder:\n• Static Hosting Steps\n• Bucket Policy\n• Upload Guide');
                    break;
            }
            
            setTimeout(() => {
                this.style.background = 'white';
                this.style.color = '#333';
                this.style.transform = 'translateY(-10px)';
            }, 200);
        });
    });

    // Animate concept cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    document.querySelectorAll('.concept-card').forEach(card => {
        observer.observe(card);
    });

    // Smooth scroll for anchor links (future expansion)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
