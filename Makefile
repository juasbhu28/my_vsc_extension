SHELL := /bin/bash
PROJECT_NAME := "juanse-vsc-extension"

build:
	@echo "Building $(PROJECT_NAME)..."
	@npm run compile

test:
	@echo "Testing $(PROJECT_NAME)..."
	@npm run test
	
publish:
	@echo "Publishing $(PROJECT_NAME)..."
	@npm run vscode:prepublish

watch:
	@echo "Watching $(PROJECT_NAME)..."
	@npm run watch

pretest:
	@echo "Pretesting $(PROJECT_NAME)..."
	@npm run pretest

lint:
	@echo "Linting $(PROJECT_NAME)..."
	@npm run lint