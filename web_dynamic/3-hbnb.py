#!/usr/bin/python3
""" Starts a Flash Web Application """
from models import storage
from models.state import State
from models.city import City
from models.amenity import Amenity
from models.place import Place
from os import environ
from flask import Flask, render_template
import uuid

app = Flask(__name__)
app.jinja_env.trim_blocks = True
app.jinja_env.lstrip_blocks = True

@app.route('/3-hbnb/', strict_slashes=False)
def hbnb():
    """ Route to display the home page with hbnb Amienitiese """
    cache_id = uuid.uuid4()
    amenities = storage.all('Amenity')
    return render_template('3-hbnb.html', cache_id=cache_id, amenities=amenities)


@app.teardown_appcontext
def close_db(error):
    """ Remove the current SQLAlchemy Session """
    storage.close()


if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5000)
