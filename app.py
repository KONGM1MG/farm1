from flask import Flask, request, jsonify, redirect, url_for, render_template, session, send_file
import pymysql

# 连接数据库
conn = pymysql.connect(
    host='localhost',  # MySQL 服务器主机名，如果 MySQL 服务器在本地，可以使用 'localhost' 或 '127.0.0.1'
    user='root',  # MySQL 用户名
    password='root',  # MySQL 密码
    db='farm',  # 要连接的数据库名称
    charset='utf8mb4',  # 字符集，根据你的数据库设置调整
    cursorclass=pymysql.cursors.DictCursor  # 返回字典类型的游标，方便操作结果集
)

# 创建 Flask 应用

app = Flask(__name__)
app.config['STATIC_FOLDER'] = '/static'

# 设置会话密钥
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # 首先查找用户是否存在
        with conn.cursor() as cursor:
            cursor.execute('SELECT * FROM user WHERE username = %s', (username,))
            user = cursor.fetchone()

        if user:
            # 如果用户存在，检查密码是否正确
            if user['password'] == password:
                # 登录成功，将用户信息保存到 session 中
                session['user'] = user
                return redirect(url_for('maininfo'))
            else:
                return '密码错误'
        else:
            return '用户不存在'

    return render_template('login.html')


@app.route('/welcome/<username>')
def welcome(username):
    return render_template('welcome.html', username=username)


# 水下页面
@app.route('/underwater')
def underwater():
    return render_template('underwater.html')


# 主要信息页面
@app.route('/maininfo')
def maininfo():
    return render_template('maininfo.html')


# 数据中心页面
@app.route('/datacenter')
def datacenter():
    return render_template('datacenter.html')


# 智能中心页面
@app.route('/techcenter')
def techcenter():
    return render_template('techcenter.html')


# 管理员界面
@app.route('/admin')
def admin():
    return render_template('admin.html')


if __name__ == '__main__':
    app.run(debug=True)

# soft aaa