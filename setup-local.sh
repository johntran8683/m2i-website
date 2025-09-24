#!/bin/bash

echo "🚀 Setting up Metrics2Impact Database (Local)..."
echo ""

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp env.example .env
    echo "✅ .env file created"
else
    echo "✅ .env file already exists"
fi

echo ""
echo "🔧 Generating Prisma client..."
npx prisma generate

echo ""
echo "📊 Pushing database schema..."
echo "Note: Make sure PostgreSQL is running locally on port 5432"
echo "Database: impact_insights"
echo "User: postgres"
echo "Password: postgres"
echo ""

# Check if database exists, if not create it
echo "🗄️ Setting up database..."
npx prisma db push

echo ""
echo "🌱 Seeding database with sample data..."
npm run db:seed

echo ""
echo "✅ Database setup complete!"
echo ""
echo "📋 What was created:"
echo "   - 4 Team members (including Nhung Nguyen)"
echo "   - 5 Clients (IFC, UNICEF, World Bank, GIZ, NIRAS)"
echo "   - 5 Projects with detailed case studies"
echo "   - 5 Publications (reports, articles, whitepapers)"
echo "   - 3 Sample contact inquiries"
echo ""
echo "🌐 You can now start the application with:"
echo "   npm run dev"
echo ""
echo "🔍 Or view the data with Prisma Studio:"
echo "   npm run db:studio"
echo ""
echo "📝 Database connection details:"
echo "   Host: localhost"
echo "   Port: 5432"
echo "   Database: impact_insights"
echo "   User: postgres"
echo "   Password: postgres"

