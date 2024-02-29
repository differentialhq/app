echo "Setting up the project..."

echo "Installing dependencies..."
npm install

echo "Obtaining API secret..."
API_SECRET=$(curl https://api.differential.dev/demo/token)

# tired of making sed work on both mac and linux
echo "Setting API secret..."
SECRET=$API_SECRET node scripts/replace-secret.cjs

echo "Setup complete! 🎉"