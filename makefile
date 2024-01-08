commit:
	@read -p "Enter your custom commit message: " message; \
	git add .; \
	git commit -m "$${message}" || true; \
	git push origin
	echo "Committed with message: $$message"

gtc:
	git pull --no-ff
	make commit

gm:
	git checkout main
	git pull

gmc:
	make gm
	git checkout -
