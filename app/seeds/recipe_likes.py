from app.models import db, User, environment, SCHEMA, Recipe
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_likes():
    user1 = User.query.get(1)
    user2 = User.query.get(2)
    user3 = User.query.get(3)
    user4 = User.query.get(4)

    recipe1 = Recipe.query.get(1)
    recipe2 = Recipe.query.get(2)
    recipe3 = Recipe.query.get(3)
    recipe4 = Recipe.query.get(4)
    recipe5 = Recipe.query.get(5)
    recipe6 = Recipe.query.get(6)
    recipe7 = Recipe.query.get(7)
    recipe8 = Recipe.query.get(8)
    recipe9 = Recipe.query.get(9)
    recipe10 = Recipe.query.get(10)
    recipe11 = Recipe.query.get(11)
    recipe12 = Recipe.query.get(12)
    recipe13 = Recipe.query.get(13)
    recipe14 = Recipe.query.get(14)
    recipe15 = Recipe.query.get(15)
    recipe16 = Recipe.query.get(16)
    recipe17 = Recipe.query.get(17)
    recipe18 = Recipe.query.get(18)
    recipe19 = Recipe.query.get(19)
    recipe20 = Recipe.query.get(20)
    recipe21 = Recipe.query.get(21)
    recipe22 = Recipe.query.get(22)
    recipe23 = Recipe.query.get(23)
    recipe24 = Recipe.query.get(24)
    recipe25 = Recipe.query.get(25)
    recipe26 = Recipe.query.get(26)
    recipe27 = Recipe.query.get(27)
    recipe28 = Recipe.query.get(28)
    recipe29 = Recipe.query.get(29)
    recipe30 = Recipe.query.get(30)
    recipe31 = Recipe.query.get(31)
    recipe32 = Recipe.query.get(32)
    recipe33 = Recipe.query.get(33)
    recipe34 = Recipe.query.get(34)
    recipe35 = Recipe.query.get(35)
    recipe36 = Recipe.query.get(36)
    recipe37 = Recipe.query.get(37)
    recipe38 = Recipe.query.get(38)
    recipe39 = Recipe.query.get(39)
    recipe40 = Recipe.query.get(40)
    recipe41 = Recipe.query.get(41)
    recipe42 = Recipe.query.get(42)
    recipe43 = Recipe.query.get(43)
    recipe44 = Recipe.query.get(44)
    recipe45 = Recipe.query.get(45)
    recipe46 = Recipe.query.get(46)
    recipe47 = Recipe.query.get(47)
    recipe48 = Recipe.query.get(48)
    recipe49 = Recipe.query.get(49)
    recipe50 = Recipe.query.get(50)
    recipe51 = Recipe.query.get(51)
    recipe52 = Recipe.query.get(52)
    recipe53 = Recipe.query.get(53)
    recipe54 = Recipe.query.get(54)
    recipe55 = Recipe.query.get(55)

    user1.user_likes.append(recipe1)
    user2.user_likes.append(recipe1)
    user3.user_likes.append(recipe1)
    user4.user_likes.append(recipe1)
    user2.user_likes.append(recipe2)
    user3.user_likes.append(recipe2)
    user4.user_likes.append(recipe2)
    user2.user_likes.append(recipe3)
    user3.user_likes.append(recipe3)
    user4.user_likes.append(recipe3)
    user1.user_likes.append(recipe4)
    user2.user_likes.append(recipe4)
    user3.user_likes.append(recipe4)
    user4.user_likes.append(recipe4)
    user1.user_likes.append(recipe5)
    user2.user_likes.append(recipe5)
    user3.user_likes.append(recipe5)
    user4.user_likes.append(recipe5)
    user1.user_likes.append(recipe6)
    user2.user_likes.append(recipe6)
    user3.user_likes.append(recipe6)
    user4.user_likes.append(recipe6)
    user1.user_likes.append(recipe7)
    user2.user_likes.append(recipe7)
    user3.user_likes.append(recipe7)
    user4.user_likes.append(recipe7)
    user2.user_likes.append(recipe8)
    user3.user_likes.append(recipe8)
    user4.user_likes.append(recipe8)
    user1.user_likes.append(recipe9)
    user2.user_likes.append(recipe9)
    user3.user_likes.append(recipe9)
    user4.user_likes.append(recipe9)
    user1.user_likes.append(recipe10)
    user2.user_likes.append(recipe10)
    user3.user_likes.append(recipe10)
    user4.user_likes.append(recipe10)
    user2.user_likes.append(recipe11)
    user3.user_likes.append(recipe11)
    user4.user_likes.append(recipe11)
    user2.user_likes.append(recipe12)
    user3.user_likes.append(recipe12)
    user4.user_likes.append(recipe12)
    user1.user_likes.append(recipe13)
    user2.user_likes.append(recipe13)
    user3.user_likes.append(recipe13)
    user4.user_likes.append(recipe13)
    user2.user_likes.append(recipe14)
    user3.user_likes.append(recipe14)
    user4.user_likes.append(recipe14)
    user2.user_likes.append(recipe15)
    user3.user_likes.append(recipe15)
    user4.user_likes.append(recipe15)
    user1.user_likes.append(recipe16)
    user2.user_likes.append(recipe16)
    user3.user_likes.append(recipe16)
    user4.user_likes.append(recipe16)
    user2.user_likes.append(recipe17)
    user3.user_likes.append(recipe17)
    user4.user_likes.append(recipe17)
    user2.user_likes.append(recipe18)
    user3.user_likes.append(recipe18)
    user4.user_likes.append(recipe18)
    user2.user_likes.append(recipe19)
    user3.user_likes.append(recipe19)
    user4.user_likes.append(recipe19)
    user1.user_likes.append(recipe20)
    user2.user_likes.append(recipe20)
    user3.user_likes.append(recipe20)
    user4.user_likes.append(recipe20)
    user2.user_likes.append(recipe21)
    user3.user_likes.append(recipe21)
    user4.user_likes.append(recipe21)
    user2.user_likes.append(recipe22)
    user3.user_likes.append(recipe22)
    user4.user_likes.append(recipe22)
    user2.user_likes.append(recipe23)
    user3.user_likes.append(recipe23)
    user4.user_likes.append(recipe23)
    user2.user_likes.append(recipe24)
    user3.user_likes.append(recipe24)
    user4.user_likes.append(recipe24)
    user2.user_likes.append(recipe25)
    user3.user_likes.append(recipe25)
    user4.user_likes.append(recipe25)
    user2.user_likes.append(recipe26)
    user3.user_likes.append(recipe26)
    user4.user_likes.append(recipe26)
    user1.user_likes.append(recipe27)
    user2.user_likes.append(recipe27)
    user3.user_likes.append(recipe27)
    user4.user_likes.append(recipe27)
    user2.user_likes.append(recipe28)
    user3.user_likes.append(recipe28)
    user4.user_likes.append(recipe28)
    user1.user_likes.append(recipe29)
    user2.user_likes.append(recipe29)
    user3.user_likes.append(recipe29)
    user4.user_likes.append(recipe29)
    user1.user_likes.append(recipe30)
    user2.user_likes.append(recipe30)
    user3.user_likes.append(recipe30)
    user4.user_likes.append(recipe30)
    user2.user_likes.append(recipe31)
    user3.user_likes.append(recipe31)
    user4.user_likes.append(recipe31)
    user2.user_likes.append(recipe32)
    user3.user_likes.append(recipe32)
    user4.user_likes.append(recipe32)
    user2.user_likes.append(recipe33)
    user3.user_likes.append(recipe33)
    user4.user_likes.append(recipe33)
    user2.user_likes.append(recipe34)
    user3.user_likes.append(recipe34)
    user4.user_likes.append(recipe34)
    user2.user_likes.append(recipe35)
    user3.user_likes.append(recipe35)
    user4.user_likes.append(recipe35)
    user2.user_likes.append(recipe36)
    user3.user_likes.append(recipe36)
    user4.user_likes.append(recipe36)
    user2.user_likes.append(recipe37)
    user3.user_likes.append(recipe37)
    user4.user_likes.append(recipe37)
    user2.user_likes.append(recipe38)
    user3.user_likes.append(recipe38)
    user4.user_likes.append(recipe38)
    user2.user_likes.append(recipe39)
    user3.user_likes.append(recipe39)
    user4.user_likes.append(recipe39)
    user2.user_likes.append(recipe40)
    user3.user_likes.append(recipe40)
    user4.user_likes.append(recipe40)
    user2.user_likes.append(recipe41)
    user3.user_likes.append(recipe41)
    user4.user_likes.append(recipe41)
    user2.user_likes.append(recipe42)
    user3.user_likes.append(recipe42)
    user4.user_likes.append(recipe42)
    user2.user_likes.append(recipe43)
    user3.user_likes.append(recipe43)
    user4.user_likes.append(recipe43)
    user2.user_likes.append(recipe44)
    user3.user_likes.append(recipe44)
    user4.user_likes.append(recipe44)
    user2.user_likes.append(recipe45)
    user3.user_likes.append(recipe45)
    user4.user_likes.append(recipe45)
    user2.user_likes.append(recipe46)
    user3.user_likes.append(recipe46)
    user4.user_likes.append(recipe46)
    user2.user_likes.append(recipe47)
    user3.user_likes.append(recipe47)
    user4.user_likes.append(recipe47)
    user2.user_likes.append(recipe48)
    user3.user_likes.append(recipe48)
    user4.user_likes.append(recipe48)
    user2.user_likes.append(recipe49)
    user3.user_likes.append(recipe49)
    user4.user_likes.append(recipe49)
    user1.user_likes.append(recipe50)
    user2.user_likes.append(recipe50)
    user3.user_likes.append(recipe50)
    user4.user_likes.append(recipe50)
    user2.user_likes.append(recipe51)
    user3.user_likes.append(recipe51)
    user4.user_likes.append(recipe51)
    user1.user_likes.append(recipe52)
    user2.user_likes.append(recipe52)
    user3.user_likes.append(recipe52)
    user4.user_likes.append(recipe52)
    user2.user_likes.append(recipe53)
    user3.user_likes.append(recipe53)
    user4.user_likes.append(recipe53)
    user2.user_likes.append(recipe54)
    user3.user_likes.append(recipe54)
    user4.user_likes.append(recipe54)
    user1.user_likes.append(recipe55)
    user2.user_likes.append(recipe55)
    user3.user_likes.append(recipe55)
    user4.user_likes.append(recipe55)

    db.session.commit()

def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM likes"))

    db.session.commit()
