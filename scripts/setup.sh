echo "Setting up the project..."

echo "Installing dependencies..."
npm install

echo "Obtaining API secret..."
API_SECRET=$(curl https://api.differential.dev/demo/token)

# replace the API_SECRET with the string REPLACE_ME in src/d.ts file.
sed -i '' "s/REPLACE_ME/$API_SECRET/g" src/d.ts

echo "Setup complete! 🎉"

echo "To play with the demo, run the following commands:"
echo "  👉 Running the service: npm run service --name hello"
echo "  👉 Running the consumer: npm run command --name greet"