.SILENT:
.ONESHELL:
.PHONY: backend frontend pitch

all: backend frontend pitch

BACKEND_LOCK_FILE=bundle.installed

BACKEND_INIT=backend/$(BACKEND_LOCK_FILE)
FRONTEND_INIT=frontend/node_modules
PITCH_INIT=pitch/node_modules


$(BACKEND_INIT):
	echo "initializing backend"
	cd backend/
	bundle install
	touch $(BACKEND_LOCK_FILE)

backend: $(BACKEND_INIT) $(FRONTEND_INIT)
	echo "running backend"
	cd backend/
	rackup


$(FRONTEND_INIT):
	echo "initializing frontend"
	cd frontend/
	npm install
	gulp

frontend: $(FRONTEND_INIT)
	echo "watching frontend"
	cd frontend/
	gulp watch


$(PITCH_INIT):
	echo "initializing pitch"
	cd pitch/
	npm install

pitch: $(PITCH_INIT)
	echo "running pitch"
	cd pitch/
	npm run reveal
