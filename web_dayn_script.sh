
# Create the web_dynamic directory if it doesn't exist
sudo mkdir -p web_dynamic

# Copy the necessary files from web_flask to web_dynamic
sudo cp -r web_flask/static web_dynamic/
sudo cp web_flask/templates/100-hbnb.html web_dynamic/templates/0-hbnb.html
sudo cp web_flask/__init__.py web_dynamic/
sudo cp web_flask/100-hbnb.py web_dynamic/0-hbnb.py
