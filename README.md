# BookReviews - Landing Page

A clean, responsive landing page for a book review website built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with smooth transitions across all devices
- **Interactive Search**: Real-time book and author search functionality
- **Dynamic Content**: Books and reviews loaded from JSON data
- **Modern UI**: Clean design with smooth animations and hover effects
- **Fast Performance**: Optimized for sub-3-second load times
- **Accessible**: Proper semantic markup and keyboard navigation support

## 📁 Project Structure

```
bookreviews/
├── index.html              # Main HTML file
├── styles.css              # CSS styles
├── main.js                 # JavaScript functionality
├── data/
│   ├── books.json         # Sample books data
│   └── reviews.json       # Sample reviews data
└── README.md              # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: Interactive functionality
- **JSON**: Data storage for books and reviews
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Typography (Merriweather + Open Sans)

## 🎨 Design Features

### Color Scheme
- **Primary**: Deep blue (#2c3e50) for headings and navigation
- **Secondary**: Orange (#e67e22) for call-to-action elements
- **Accent**: Golden yellow (#f39c12) for highlights and ratings
- **Background**: Clean whites and light grays for readability

### Typography
- **Headings**: Merriweather (serif) for elegance
- **Body Text**: Open Sans (sans-serif) for readability
- **Responsive scaling**: Fluid typography across all devices

### Interactive Elements
- Hover effects on cards and buttons
- Smooth scrolling navigation
- Mobile hamburger menu
- Star rating system
- Search autocomplete functionality

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## ⚡ Performance Optimizations

- Optimized images using Unsplash URLs
- Debounced search functionality
- Lazy loading of content
- Minimal HTTP requests
- Compressed and minified assets ready

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Create the data directory** and add the JSON files
3. **Open `index.html`** in your browser
4. **For development**: Use a local server (like Live Server in VS Code)

### Local Development Server

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📊 Sample Data

The landing page includes sample data for:
- **8 Featured Books** across various genres
- **8 Sample Reviews** from different users
- **Star ratings and review counts**
- **Book cover images** from Unsplash

## 🔧 Customization

### Adding New Books

Edit `data/books.json`:

```json
{
  "id": 9,
  "title": "Your Book Title",
  "author": "Author Name",
  "cover_image": "https://your-image-url.jpg",
  "genre": "Fiction",
  "average_rating": 4.5,
  "total_reviews": 123,
  "description": "Book description...",
  "featured_