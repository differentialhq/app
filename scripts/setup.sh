echo "Setting up the project..."

echo "Installing dependencies..."
npm install

echo "Obtaining API secret..."
API_SECRET=$(curl https://api.differential.dev/demo/token)

# replace the API_SECRET with the string REPLACE_ME in src/d.ts file.
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  sed -i "s/REPLACE_ME/$API_SECRET/g" src/d.ts
elif [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' "s/REPLACE_ME/$API_SECRET/g" src/d.ts
fi

echo "Setup complete! 🎉"