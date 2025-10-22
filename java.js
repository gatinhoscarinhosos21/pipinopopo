 // Cliente.java
public class Cliente {
    private String nome;
    private String email;
    private String telefone;

    // Construtor vazio
    public Cliente() {}

    // Construtor com campos
    public Cliente(String nome, String email, String telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    // Getters e Setters (necessários para Spring e frameworks)
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }

    @Override
    public String toString() {
        return "Cliente [nome=" + nome + ", email=" + email + ", telefone=" + telefone + "]";
    }
}