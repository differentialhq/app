rm -rf speedrun-app

git clone git@github.com:differentialhq/app.git speedrun-app && \
cd speedrun-app && \
npm run setup && \
npm i -g tsx

tsx src/run/hello-service.ts &

output=$(tsx src/commands/greet.ts)

echo $output

has_hello=$(echo $output | grep "Hello World!")

if [ -z "$has_hello" ]; then
  echo "Test failed"
  exit 1
else
  echo "Test passed"
  exit 0
fi
```