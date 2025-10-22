from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

clientes = []

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/cadastro', methods=['POST'])
def cadastro():
    data = request.json
    nome = data.get('nome')
    email = data.get('email')
    telefone = data.get('telefone')

    if not nome or not email or not telefone:
        return jsonify({'error': 'Todos os campos são obrigatórios!'}), 400

    cliente = {
        'nome': nome,
        'email': email,
        'telefone': telefone
    }
    clientes.append(cliente)
    return jsonify({'message': 'Cliente cadastrado com sucesso!', 'cliente': cliente}), 200

@app.route('/clientes')
def listar_clientes():
    return jsonify(clientes)

if __name__ == '__main__':
    app.run(debug=True)
