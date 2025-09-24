#!/bin/bash

echo "🚀 Setting up Metrics2Impact Database..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Start PostgreSQL database
echo "📦 Starting PostgreSQL database..."
docker-compose up postgres -d

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
sleep 10

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npm run db:generate

# Push database schema
echo "📊 Pushing database schema..."
npm run db:push

# Seed database with sample data
echo "🌱 Seeding database with sample data..."
npm run db:seed

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
echo "   docker-compose up app --build"
echo ""
echo "🔍 Or view the data with Prisma Studio:"
echo "   npm run db:studio"

