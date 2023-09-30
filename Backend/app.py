from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return  render_template("Homepage.html")

@app.route('/Regstration')
def Regstration():
    return render_template("Regstration.html")


