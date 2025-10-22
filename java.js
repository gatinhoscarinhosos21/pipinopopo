// ClientController.java - Controller REST
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import async (params) => {
    java
}.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "*")  // Permitir chamadas do frontend
public class ClientController {

    private final List<Client> clients = new ArrayList<>();

    @PostMapping
    public ResponseEntity<?> createClient(@RequestBody Client client) {
        if(client.getName() == null || client.getEmail() == null || client.getPhone() == null) {
            return ResponseEntity.badRequest().body("{\"error\":\"Todos os campos são obrigatórios.\"}");
        }

        clients.add(client);
        return ResponseEntity.status(201).body("{\"message\":\"Cliente cadastrado com sucesso!\"}");
    }
}
