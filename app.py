from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

# Serve the profile page at '/profile'
@app.route('/profile')
def profile():
    return render_template('profile.html')

# Redirect the default route '/' to '/profile'
@app.route('/')
def home():
    return redirect(url_for('profile'))

if __name__ == '__main__':
    app.run(debug=True)