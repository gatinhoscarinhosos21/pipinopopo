 from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permitir requisições do frontend

clientes = []

@app.route('/api/clientes', methods=['POST'])
def cadastrar_cliente():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')

    if not name or not email or not phone:
        return jsonify({'error': 'Todos os campos são obrigatórios.'}), 400

    # Aqui poderia salvar num banco de dados, por simplicidade vai na lista
    clientes.append({
        'name': name,
        'email': email,
        'phone': phone
    })

    return jsonify({'message': 'Cliente cadastrado com sucesso!'}), 201

if __name__ == '__main__':
    app.run(debug=True)
