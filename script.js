function toggleMenu() {
    var NavLinks = document.querySelector('.NavLinks');
    NavLinks.classList.toggle('active');
}

document.querySelectorAll('.NavLinks a').forEach(function(link) {
    link.addEventListener('click', function() {
        var NavLinks = document.querySelector('.NavLinks');
        NavLinks.classList.remove('active');
    });
});

window.addEventListener('scroll', function() {
    var NavBar = document.getElementById('NavBar');
    if (window.scrollY > 50) {
        NavBar.style.boxShadow = '0 1px 10px rgba(0,0,0,0.04)';
    } else {
        NavBar.style.boxShadow = 'none';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var TargetId = this.getAttribute('href');
        var TargetEl = document.querySelector(TargetId);
        if (TargetEl) {
            var NavHeight = 65;
            var TopPos = TargetEl.getBoundingClientRect().top + window.pageYOffset - NavHeight;
            window.scrollTo({ top: TopPos, behavior: 'smooth' });
        }
    });
});

var AllSections = document.querySelectorAll('section');
var NavAnchors = document.querySelectorAll('.NavLinks a');

window.addEventListener('scroll', function() {
    var Current = '';
    AllSections.forEach(function(section) {
        var SectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= SectionTop) {
            Current = section.getAttribute('id');
        }
    });
    NavAnchors.forEach(function(a) {
        a.style.color = '';
        if (a.getAttribute('href') === '#' + Current) {
            a.style.color = '#1a1a1a';
            a.style.fontWeight = '600';
        } else {
            a.style.fontWeight = '400';
        }
    });
});

var CertItems = document.querySelectorAll('.CertItem');
CertItems.forEach(function(item, index) {
    item.style.opacity = '0';
    item.style.transform = 'translateY(10px)';
    item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
});

var CertObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var Items = entry.target.querySelectorAll('.CertItem');
            Items.forEach(function(item, i) {
                setTimeout(function() {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, i * 40);
            });
            CertObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

var CertsGrid = document.querySelector('.CertsGrid');
if (CertsGrid) {
    CertObserver.observe(CertsGrid);
}

var SkillBoxes = document.querySelectorAll('.SkillBox');
SkillBoxes.forEach(function(box) {
    box.style.opacity = '0';
    box.style.transform = 'translateY(8px)';
    box.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
});

var SkillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var Boxes = entry.target.querySelectorAll('.SkillBox');
            Boxes.forEach(function(box, i) {
                setTimeout(function() {
                    box.style.opacity = '1';
                    box.style.transform = 'translateY(0)';
                }, i * 60);
            });
            SkillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.SkillsBlock').forEach(function(block) {
    SkillObserver.observe(block);
});

var ProjectCards = document.querySelectorAll('.ProjectCard');
ProjectCards.forEach(function(card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

var ProjectObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            ProjectObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

ProjectCards.forEach(function(card) {
    ProjectObserver.observe(card);
});
