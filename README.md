### Configurar o projeto
 `git clone https://github.com/fllaviacorreia/taugor-test.git`
 
 `npm i`

 Configurar o arquivo .env com as variáveis. 

 
### Rodar o projeto
 `npm start`


### Rodar os testes
 `npm test`



### TesteTaugor2023 
 > Prova técnica para cargo de desenvolvedor na empresa Taugor 
  


### Especificações 
  
- CADASTRO DE FUNCIONÁRIO: 
   - Manipulação de documento (PDF); 
   - Sincronização de componentes; 
   - Formulário com campos relacionados ao funcionário. 
      - Informações de Contato: Nome, Sexo, Endereço, Telefone, Foto de Perfil, Data de aniversário 
      - Informações do Funcionário: Cargo, Data de Admissão, Setor, Salário. 
   - Validação de campos. 

- ATUALIZAÇÃO DE FUNCIONÁRIO: 
   - Possibilidades de atualização de funcionário: 
      - Atualizar informações de contato 
      - Promover funcionário 
      - Demitir ou terminar contrato com funcionário 
   - Histórico do funcionário



### Pré-requisitos 

1. O Front-End deve ser em React JS; 
2. Os componentes devem ser function components, utilizando hooks; 
3. Utilize os seguintes recursos do Firebase (Google): 
   - Firestore- banco de dados; 
   - Storage- armazenamento de arquivos; 
   - Authentication- para cadastro e login de usuário. 
4. Não é necessário utilizar Redux, mas pode usar se desejar; 
5. Utilize pelo menos 1 componente em Material UI; 
6. Pode-se optar por pré-compiladores de CSS, como SASS/SCSS, LESS, etc., mas é necessário utilizar pelo menos um arquivo CSS para customização; 
7. Pode-se utilizar TypeScript, mas no mínimo JavaScript ES6; 
8. Utilize uma lib externa para manipulação de documentos (PDF). 
   - utilizando @react-pdf/renderer



### Regras de negócio 

- Usuário mestre: 
   - administrador@taugor.teste.com
   - deve estar já cadastrado através do console do Firebase
   - único que pode criar novos usuários 
   - único que pode alterar o nível de acesso de minimum para médium.

- Usuários do tipo minimum não possuem conta;

- Usuários do tipo medium possuem conta e apenas eles podem excluir suas contas;


<!-- ## 📝 Licença --> 
  
 <!-- Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes. --> 

  
 [⬆ Voltar ao topo](#nome-do-projeto)<br>
