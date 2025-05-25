// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const searchInput = document.getElementById('search-input');
const booksGrid = document.getElementById('books-grid');
const reviewsGrid = document.getElementById('reviews-grid');

// Global Data
let booksData = [];
let reviewsData = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    try {
        // Load data
        await loadBooksData();
        await loadReviewsData();
        
        // Render content
        renderFeaturedBooks();
        renderRecentReviews();
        
        // Setup event listeners
        setupEventListeners();
        
        console.log('App initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// Data Loading Functions
async function loadBooksData() {
    try {
        const response = await fetch('./data/books.json');
        const data = await response.json();
        booksData = data.books;
    } catch (error) {
        console.error('Error loading books data:', error);
        // Fallback to sample data
        booksData = getSampleBooks();
    }
}

async function loadReviewsData() {
    try {
        const response = await fetch('./data/reviews.json');
        const data = await response.json();
        reviewsData = data.reviews;
    } catch (error) {
        console.error('Error loading reviews data:', error);
        // Fallback to sample data
        reviewsData = getSampleReviews();
    }
}

// Sample Data (Fallback)
function getSampleBooks() {
    return [
        {
            id: 1,
            title: "The Seven Husbands of Evelyn Hugo",
            author: "Taylor Jenkins Reid",
            cover_image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
            genre: "Historical Fiction",
            average_rating: 4.8,
            total_reviews: 1247,
            description: "A captivating novel about a reclusive Hollywood icon who finally decides to tell her story.",
            featured_review: "An absolutely mesmerizing tale that kept me turning pages until 3 AM. Reid's storytelling is phenomenal!"
        },
        {
            id: 2,
            title: "Educated",
            author: "Tara Westover",
            cover_image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
            genre: "Memoir",
            average_rating: 4.6,
            total_reviews: 892,
            description: "A powerful memoir about education, transformation, and the struggle between loyalty and independence.",
            featured_review: "This memoir is both heartbreaking and inspiring. Westover's journey from isolation to education is remarkable."
        },
        {
            id: 3,
            title: "The Midnight Library",
            author: "Matt Haig",
            cover_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
            genre: "Fiction",
            average_rating: 4.4,
            total_reviews: 654,
            description: "A thought-provoking novel about life's infinite possibilities and the choices we make.",
            featured_review: "A beautiful exploration of what could have been. Made me reflect on my own life choices deeply."
        },
        {
            id: 4,
            title: "Atomic Habits",
            author: "James Clear",
            cover_image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
            genre: "Self-Help",
            average_rating: 4.7,
            total_reviews: 1156,
            description: "A practical guide to building good habits and breaking bad ones through small changes.",
            featured_review: "Changed my entire approach to productivity. The 1% better every day concept is life-changing!"
        },
        {
            id: 5,
            title: "Klara and the Sun",
            author: "Kazuo Ishiguro",
            cover_image: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=400&h=600&fit=crop",
            genre: "Science Fiction",
            average_rating: 4.2,
            total_reviews: 423,
            description: "A touching story told from the perspective of an artificial friend observing human nature.",
            featured_review: "Ishiguro's prose is beautiful as always. Klara's perspective on humanity is both unique and moving."
        },
        {
            id: 6,
            title: "Project Hail Mary",
            author: "Andy Weir",
            cover_image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
            genre: "Science Fiction",
            average_rating: 4.9,
            total_reviews: 987,
            description: "A thrilling space adventure about humanity's last hope for survival.",
            featured_review: "The best sci-fi I've read in years! Weir perfectly balances science, humor, and heart."
        }
    ];
}

function getSampleReviews() {
    return [
        {
            id: 1,
            book_id: 1,
            book_title: "The Seven Husbands of Evelyn Hugo",
            reviewer_name: "Sarah M.",
            rating: 5,
            review_text: "This book completely blew me away! Taylor Jenkins Reid has crafted such a compelling character in Evelyn Hugo. The story spans decades and kept me absolutely riveted from start to finish. The twists and turns were unexpected, and the emotional depth was incredible. I found myself completely invested in Evelyn's journey and the secrets she's kept hidden for so long. This is definitely going on my list of all-time favorites!",
            date: "2025-05-20",
            featured: true
        },
        {
            id: 2,
            book_id: 4,
            book_title: "Atomic Habits",
            reviewer_name: "Mike R.",
            rating: 5,
            review_text: "As someone who has struggled with building consistent habits, this book was exactly what I needed. Clear's approach is so practical and actionable. The concept of focusing on systems rather than goals really resonated with me. I've already started implementing the habit stacking technique and I'm seeing real results. The 1% better every day mindset has completely changed how I approach personal development.",
            date: "2025-05-18",
            featured: true
        },
        {
            id: 3,
            book_id: 6,
            book_title: "Project Hail Mary",
            reviewer_name: "Alex Chen",
            rating: 5,
            review_text: "Andy Weir has done it again! This book is the perfect blend of hard science, humor, and heart. The protagonist's journey of discovery is absolutely thrilling, and the friendship that develops is so touching. I love how Weir makes complex scientific concepts accessible without dumbing them down. The problem-solving aspects kept me on the edge of my seat, and I genuinely cared about the outcome.",
            date: "2025-05-15",
            featured: true
        },
        {
            id: 4,
            book_id: 2,
            book_title: "Educated",
            reviewer_name: "Jennifer K.",
            rating: 4,
            review_text: "Tara Westover's memoir is both heartbreaking and inspiring. Her journey from a survivalist family to earning a PhD is remarkable. The writing is beautiful and raw, and she doesn't shy away from the difficult aspects of her story. While some parts were hard to read due to the abuse described, the overall message about the power of education and self-determination is powerful. This book will stay with me for a long time.",
            date: "2025-05-12",
            featured: true
        }
    ];
}

// Rendering Functions
function renderFeaturedBooks() {
    if (!booksData || booksData.length === 0) {
        booksGrid.innerHTML = '<p>No books available at the moment.</p>';
        return;
    }

    const featuredBooks = booksData.slice(0, 6); // Show first 6 books
    
    booksGrid.innerHTML = featuredBooks.map(book => `
        <div class="book-card" data-book-id="${book.id}">
            <div class="book-card-image" style="background-image: url('${book.cover_image}')">
                <div class="book-rating">
                    ${generateStars(book.average_rating)} ${book.average_rating}
                </div>
            </div>
            <div class="book-card-content">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <p class="book-excerpt">"${book.featured_review}"</p>
                <a href="#" class="read-reviews-btn" onclick="viewBookReviews(${book.id})">
                    Read Reviews (${book.total_reviews})
                </a>
            </div>
        </div>
    `).join('');
}

function renderRecentReviews() {
    if (!reviewsData || reviewsData.length === 0) {
        reviewsGrid.innerHTML = '<p>No reviews available at the moment.</p>';
        return;
    }

    const recentReviews = reviewsData.filter(review => review.featured).slice(0, 4);
    
    reviewsGrid.innerHTML = recentReviews.map(review => `
        <div class="review-card" data-review-id="${review.id}">
            <div class="review-header">
                <div class="reviewer-avatar">
                    ${review.reviewer_name.charAt(0).toUpperCase()}
                </div>
                <div>
                    <div class="reviewer-name">${review.reviewer_name}</div>
                    <div class="review-book">${review.book_title}</div>
                </div>
            </div>
            <div class="review-rating">
                <span class="stars">${generateStars(review.rating)}</span>
            </div>
            <p class="review-text">
                ${truncateText(review.review_text, 150)}
            </p>
            <a href="#" class="read-full-review" onclick="viewFullReview(${review.id})">
                Read Full Review
            </a>
        </div>
    `).join('');
}

// Utility Functions
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    
    if (hasHalfStar) {
        stars += '☆';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Event Listeners
function setupEventListeners() {
    // Mobile navigation toggle
    navToggle.addEventListener('click', toggleMobileNav);
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMobileNav();
                }
            }
        });
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSignup);
    }
}

function toggleMobileNav() {
    navMenu.classList.toggle('active');
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        renderFeaturedBooks(); // Show all books if search is empty
        return;
    }
    
    const filteredBooks = booksData.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
    );
    
    if (filteredBooks.length === 0) {
        booksGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <h3>No books found</h3>
                <p>Try searching for a different title, author, or genre.</p>
            </div>
        `;
        return;
    }
    
    // Render filtered results
    booksGrid.innerHTML = filteredBooks.map(book => `
        <div class="book-card" data-book-id="${book.id}">
            <div class="book-card-image" style="background-image: url('${book.cover_image}')">
                <div class="book-rating">
                    ${generateStars(book.average_rating)} ${book.average_rating}
                </div>
            </div>
            <div class="book-card-content">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <p class="book-excerpt">"${book.featured_review}"</p>
                <a href="#" class="read-reviews-btn" onclick="viewBookReviews(${book.id})">
                    Read Reviews (${book.total_reviews})
                </a>
            </div>
        </div>
    `).join('');
}

function handleNewsletterSignup(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (!email) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate newsletter signup
    alert('Thank you for subscribing! You\'ll receive updates about new books and features.');
    e.target.querySelector('input[type="email"]').value = '';
}

// Interactive Functions
function viewBookReviews(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    alert(`Feature coming soon! You clicked to view reviews for "${book.title}" by ${book.author}.`);
}

function viewFullReview(reviewId) {
    const review = reviewsData.find(r => r.id === reviewId);
    if (!review) return;
    
    // Create a modal or detailed view for the full review
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 1rem;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 15px; max-width: 600px; max-height: 80vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h3>${review.book_title}</h3>
                <button onclick="this.closest('div[style*=\"position: fixed\"]').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            <div style="margin-bottom: 1rem;">
                <strong>${review.reviewer_name}</strong> - ${generateStars(review.rating)} (${review.rating}/5)
            </div>
            <p style="line-height: 1.6; color: #555;">${review.review_text}</p>
            <div style="margin-top: 1rem; color: #888; font-size: 0.9rem;">
                Reviewed on ${new Date(review.date).toLocaleDateString()}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Performance optimization: Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
const debouncedSearch = debounce(handleSearch, 300);
if (searchInput) {
    searchInput.removeEventListener('input', handleSearch);
    searchInput.addEventListener('input', debouncedSearch);
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--background-light)';
        header.style.backdropFilter = 'none';
    }
});

// Console welcome message
console.log(`
🔖 Welcome to BookReviews!
📚 Discover your next great read through authentic reviews.
🚀 Built with HTML, CSS, and JavaScript
`);