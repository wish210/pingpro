// Wait for DOM before attaching listeners
document.addEventListener('DOMContentLoaded', function () {

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return; // skip dead links
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Contact form submission via Formspree
var contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = this.querySelector('button[type="submit"]');
        var form = this;

        // Basic client-side validation
        var email = form.querySelector('input[type="email"]');
        if (email && !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            email.focus();
            return;
        }

        btn.textContent = 'Sending...';
        btn.disabled = true;

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(function (response) {
            if (response.ok) {
                btn.textContent = "You're on the list!";
                btn.style.background = '#2a9d8f';
                form.reset();
            } else {
                btn.textContent = 'Error — try again';
                btn.style.background = '#e63946';
            }
            btn.disabled = false;
            setTimeout(function () {
                btn.textContent = 'Notify Me';
                btn.style.background = '';
            }, 3000);
        }).catch(function () {
            btn.textContent = 'Error — try again';
            btn.style.background = '#e63946';
            btn.disabled = false;
            setTimeout(function () {
                btn.textContent = 'Notify Me';
                btn.style.background = '';
            }, 3000);
        });
    });
}

// Navbar background on scroll
var navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// Animate elements on scroll (only if IntersectionObserver is supported)
if ('IntersectionObserver' in window) {
    var observerOptions = { threshold: 0.1 };
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .feature, .testimonial').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Blade Finder Quiz
const quizData = {
    answers: {},
    currentStep: 1,
    totalSteps: 4
};

const recommendations = {
    // Advanced + loop/attack + high budget
    'advanced-loop-high': {
        name: 'DHS Hurricane Long 5',
        desc: 'Maximum power for your loops. Stiff ALC structure rewards strong technique with explosive speed. Pair with boosted Hurricane 3 for the full pro setup.',
        price: '$129.99'
    },
    'advanced-attack-high': {
        name: 'DHS Hurricane Long 5',
        desc: 'Built for aggressive play. The stiffness translates flat hits into winners. Ma Long\'s weapon of choice.',
        price: '$129.99'
    },
    // Advanced + mid/high budget
    'advanced-loop-mid': {
        name: 'Yinhe V14 Pro (ALC)',
        desc: 'The sweet spot for advanced loopers. 5+2 ALC gives you Viscaria-level performance at a fraction of the cost. Fast, spinny, controlled.',
        price: '$69.99'
    },
    'advanced-attack-mid': {
        name: 'Yinhe V14 Pro (ALC)',
        desc: 'Fast enough for smashes, controlled enough for placement. The ALC flex adds dwell time without sacrificing speed.',
        price: '$69.99'
    },
    'advanced-allround-mid': {
        name: 'Sanwei 75 ALC',
        desc: 'Slightly softer than V14 Pro — better touch on short game while keeping offensive capability. Great for versatile advanced players.',
        price: '$59.99'
    },
    'advanced-allround-high': {
        name: 'Sanwei 75 ALC',
        desc: 'All-round blade with ALC power on demand. Softer feel gives you better control on serves and receives.',
        price: '$59.99'
    },
    'advanced-chop-mid': {
        name: 'Sanwei 75 ALC',
        desc: 'The softer ALC structure helps with chop variation while still allowing counter-attacks. Good balance for modern defenders.',
        price: '$59.99'
    },
    'advanced-chop-high': {
        name: 'Sanwei 75 ALC',
        desc: 'Control-oriented ALC blade. Enough flex for heavy backspin, enough speed for the counter-attack when the opportunity comes.',
        price: '$59.99'
    },
    // Intermediate players
    'intermediate-loop-mid': {
        name: 'LOKI Arthur Asia',
        desc: 'Perfect step-up blade. ALC carbon gives you a taste of pro-level speed without being uncontrollable. You\'ll grow into this blade.',
        price: '$64.99'
    },
    'intermediate-loop-high': {
        name: 'Yinhe V14 Pro (ALC)',
        desc: 'A blade you won\'t outgrow for years. The ALC structure is forgiving enough for developing technique but rewarding for clean strokes.',
        price: '$69.99'
    },
    'intermediate-attack-mid': {
        name: 'LOKI Arthur Asia',
        desc: 'Fast and direct. The ALC structure boosts your flat hits and counter-drives without feeling wild. Great value.',
        price: '$64.99'
    },
    'intermediate-attack-high': {
        name: 'Yinhe V14 Pro (ALC)',
        desc: 'Extra speed for your attacks with enough control for developing consistency. A serious weapon at any club.',
        price: '$69.99'
    },
    'intermediate-allround-mid': {
        name: 'LOKI Arthur Asia',
        desc: 'Balanced carbon blade for developing all-round players. Fast enough to win points, forgiving enough to learn with.',
        price: '$64.99'
    },
    'intermediate-allround-high': {
        name: 'Sanwei 75 ALC',
        desc: 'Soft-feeling ALC that won\'t overwhelm your touch. Great for building an all-round game with carbon-level speed available when you need it.',
        price: '$59.99'
    },
    'intermediate-chop-mid': {
        name: 'LOKI Arthur Asia',
        desc: 'If you\'re developing a chop game with counter-attack, this gives you enough control for defense and enough speed to punish weak returns.',
        price: '$64.99'
    },
    'intermediate-chop-high': {
        name: 'Sanwei 75 ALC',
        desc: 'Softer blade for chop consistency. The ALC is subtle here — it helps your attacks without making your chops fly long.',
        price: '$59.99'
    }
};

// Default recommendation for combinations not explicitly mapped
const defaultRecs = {
    'beginner': {
        name: 'Start with an all-wood blade',
        desc: 'At the beginner level, carbon blades are too fast and hide technique flaws. We recommend starting with a quality 5-ply all-wood blade to build proper form. Join our email list — we\'re adding beginner blades soon.',
        price: 'Coming soon'
    },
    'budget': {
        name: 'LOKI Arthur Asia',
        desc: 'Best value in our lineup. ALC performance at the lowest price point. Hard to beat for the money.',
        price: '$64.99'
    }
};

function getRecommendation(answers) {
    if (answers.level === 'beginner') {
        return defaultRecs['beginner'];
    }

    const key = `${answers.level}-${answers.style}-${answers.budget}`;

    if (recommendations[key]) {
        return recommendations[key];
    }

    // Fallback
    if (answers.budget === 'budget') {
        return defaultRecs['budget'];
    }

    return recommendations[`${answers.level}-loop-mid`] || defaultRecs['budget'];
}

// Quiz interaction
document.querySelectorAll('.quiz-option').forEach(function (option) {
    option.addEventListener('click', function () {
        var step = this.closest('.quiz-step');
        if (!step) return;
        var stepNum = parseInt(step.dataset.step);

        // Prevent double-clicks during transition
        if (option.dataset.clicked) return;
        option.dataset.clicked = 'true';
        setTimeout(function () { delete option.dataset.clicked; }, 500);

        // Mark selected
        step.querySelectorAll('.quiz-option').forEach(function (o) { o.classList.remove('selected'); });
        this.classList.add('selected');

        // Store answer
        var fields = ['level', 'style', 'budget', 'handle'];
        quizData.answers[fields[stepNum - 1]] = this.dataset.value;

        // Advance after brief delay
        setTimeout(function () {
            if (stepNum < quizData.totalSteps) {
                step.classList.remove('active');
                var nextStep = document.querySelector('[data-step="' + (stepNum + 1) + '"]');
                if (nextStep) nextStep.classList.add('active');
            } else {
                // Show result
                step.classList.remove('active');
                var result = document.getElementById('quiz-result');
                if (result) {
                    result.classList.add('active');
                    var rec = getRecommendation(quizData.answers);
                    var handleLabel = quizData.answers.handle === 'fl' ? 'Flared' : quizData.answers.handle === 'st' ? 'Straight' : 'Penhold';
                    document.getElementById('recommendation').innerHTML =
                        '<h4>' + rec.name + '</h4>' +
                        '<p>' + rec.desc + '</p>' +
                        '<p style="margin-top: 0.8rem; font-weight: 600; color: var(--primary);">' + rec.price + '</p>' +
                        '<p style="margin-top: 0.5rem; font-size: 0.85rem; color: #888;">Handle: ' + handleLabel + '</p>';
                }
            }
        }, 300);
    });
});

}); // end DOMContentLoaded
