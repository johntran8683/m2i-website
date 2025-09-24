#!/bin/bash

echo "🚀 Setting up Metrics2Impact Database (SQLite)..."
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
echo "🔄 Switching to SQLite database for easier setup..."

# Backup original schema
if [ -f prisma/schema.prisma ]; then
    cp prisma/schema.prisma prisma/schema-postgres.prisma
fi

# Use SQLite schema
cp prisma/schema-sqlite.prisma prisma/schema.prisma

echo ""
echo "🔧 Generating Prisma client..."
npx prisma generate

echo ""
echo "📊 Creating SQLite database..."
npx prisma db push

echo ""
echo "🌱 Seeding database with sample data..."
npx tsx prisma/seed-sqlite.ts

echo ""
echo "✅ SQLite database setup complete!"
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
echo "📁 Database file: prisma/dev.db"
echo ""
echo "💡 To switch back to PostgreSQL later:"
echo "   cp prisma/schema-postgres.prisma prisma/schema.prisma"
echo "   npx prisma generate"
echo "   npx prisma db push"

