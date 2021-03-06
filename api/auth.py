import functools

from flask import (
    Blueprint, flash, g, redirect, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash

from db import get_db

bp = Blueprint('auth', __name__, url_prefix='/auth')


@bp.route('/register_guest', methods=['POST'])
def register_guest():
    guest_name = request.json['name']
    phone_number = request.json['phoneNumber']
    db = get_db()
    error = None

    if not guest_name:
        error = 'Guest Name is required.'
    elif not phone_number:
        error = 'Phone Number is required.'
    elif db.execute(
        'SELECT GuestId FROM Guests WHERE Name = ?', (guest_name,)
    ).fetchone() is not None:
        error = 'Guest {} is already registered.'.format(guest_name)

    if error is None:
        db.execute(
            'INSERT INTO Guests (Name, PhoneNumber) VALUES (?, ?)',
            (guest_name, phone_number)
        )
        db.commit()

    flash(error)

    return "Sucess"

# NEED TO REVIEW THE FOLLOWING:

# @bp.route('/login', methods=('GET', 'POST'))
# def login():
#     if request.method == 'POST':
#         guest_name = request.form['guest_name']
#         phone_number = request.form['phone_number']
#         db = get_db()
#         error = None
#         guest = db.execute(
#             'SELECT * FROM Guests WHERE Name = ?', (guest_name,)
#         ).fetchone()

#         if guest_name is None:
#             error = 'Incorrect Guest Name.'
#         elif phone_number is None:
#             error = 'Incorrect Phone Number.'

#         if error is None:
#             session.clear()
#             session['guest_id'] = guest['GuestId']
#             return redirect(url_for('index'))

#         flash(error)


# @bp.route('/logout')
# def logout():
#     session.clear()
#     return redirect(url_for('index'))
