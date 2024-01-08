commit:
	@read -p "Enter your custom commit message: " message; \
	git add .; \
	git commit -m "$${message}" || true; \
	echo "Committed with message: $$message"