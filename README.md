# Metrics2Impact Website

A professional consulting firm website built with Next.js, Tailwind CSS, and Docker for international M&E consulting services.

## 🚀 Quick Start with Docker

### Prerequisites
- Docker and Docker Compose installed
- Git

### Setup Instructions

1. **Clone and navigate to the project:**
   ```bash
   cd /home/john/Desktop/M8I-Website
   ```

2. **Create environment file:**
   ```bash
   cp env.example .env
   ```

3. **Build and start the application:**
   ```bash
   # For production
   docker-compose up --build

   # For development (with hot reload)
   docker-compose up app-dev --build
   ```

4. **Access the application:**
   - Production: http://localhost:3000
   - Development: http://localhost:3001

### Database Setup

1. **Generate Prisma client:**
   ```bash
   docker-compose exec app npx prisma generate
   ```

2. **Run database migrations:**
   ```bash
   docker-compose exec app npx prisma db push
   ```

3. **Seed database with sample data:**
   ```bash
   docker-compose exec app npm run db:seed
   ```

4. **Open Prisma Studio (optional):**
   ```bash
   docker-compose exec app npx prisma studio
   ```

### Quick Database Setup

**Option 1: SQLite (Easiest)**
For a quick setup with SQLite database:
```bash
./setup-sqlite.sh
```

**Option 2: PostgreSQL with Docker**
For production setup with PostgreSQL:
```bash
./setup-database.sh
```

Both options will:
- Generate Prisma client
- Create database schema
- Seed with sample data (team members, projects, publications, clients)

## 🛠️ Development

### Local Development (without Docker)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment:**
   ```bash
   cp env.example .env
   ```

3. **Start PostgreSQL database:**
   ```bash
   docker-compose up postgres -d
   ```

4. **Generate Prisma client:**
   ```bash
   npx prisma generate
   ```

5. **Run database migrations:**
   ```bash
   npx prisma db push
   ```

6. **Start development server:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services overview
│   ├── ImpactNumbers.tsx  # Statistics section
│   ├── ClientLogos.tsx    # Client showcase
│   ├── Testimonials.tsx   # Client testimonials
│   └── CTA.tsx            # Call-to-action
├── prisma/                # Database schema
│   └── schema.prisma      # Prisma schema
├── Dockerfile             # Production Docker image
├── Dockerfile.dev         # Development Docker image
├── docker-compose.yml     # Docker Compose configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6) - Professional, trustworthy
- **Secondary**: Green (#22c55e) - Growth, sustainability
- **Accent**: Purple (#a855f7) - Gender equality, innovation

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, professional

### Components
- **Buttons**: Primary (blue), Secondary (outline)
- **Cards**: Clean, minimal shadows
- **Navigation**: Responsive, accessible

## 📊 Features

### Core Pages
- **Homepage**: Hero, services, impact numbers, testimonials
- **About**: Company story, values, team
- **Services**: Detailed service descriptions
- **Team**: Professional profiles
- **Projects**: Case studies and results
- **Contact**: Contact form and information

### Technical Features
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, structured data
- **Performance**: Fast loading, optimized images
- **Accessibility**: WCAG 2.1 AA compliance
- **International**: Multilingual ready

## 🗄️ Database Schema

### Models
- **TeamMember**: Consultant profiles
- **Project**: Case studies and results
- **Publication**: Research reports and articles
- **Client**: Organization information
- **Contact**: Contact form submissions

### Sample Data Included
The database comes pre-populated with realistic sample data:

- **4 Team Members**: Including Nhung Nguyen (Founder) and 3 senior consultants
- **5 Clients**: IFC, UNICEF, World Bank, GIZ, NIRAS
- **5 Projects**: Detailed case studies with challenges, solutions, and results
- **5 Publications**: Reports, articles, whitepapers, and blog posts
- **3 Sample Contacts**: Example inquiries from potential clients

## 🚀 Deployment

### Production Build
```bash
docker-compose up --build
```

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_URL`: Application URL
- `NEXTAUTH_SECRET`: Authentication secret

## 📝 Content Management

The website is designed to be easily maintainable with:
- **Static Content**: Hardcoded in components
- **Dynamic Content**: Database-driven (team, projects, publications)
- **Future CMS**: Ready for Strapi or Contentful integration

## 🔧 Customization

### Adding New Services
1. Update `components/Services.tsx`
2. Create service page in `app/services/`
3. Update navigation in `components/Header.tsx`

### Adding Team Members
1. Use Prisma Studio or database client
2. Add to `TeamMember` model
3. Update `components/Team.tsx`

### Styling Changes
1. Modify `tailwind.config.js` for colors/fonts
2. Update `app/globals.css` for custom styles
3. Use Tailwind classes in components

## 📞 Support

For questions or support:
- Check the documentation
- Review the code comments
- Contact the development team

## 📄 License

This project is proprietary software for Metrics2Impact.
