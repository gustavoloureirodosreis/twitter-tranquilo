import hashlib

def gravatar_url(email):
    meu_hash = hashlib.md5(email.lower().encode('utf-8')).hexdigest()
    return f"https://www.gravatar.com/avatar/{meu_hash}?d=identicon&s=500"
