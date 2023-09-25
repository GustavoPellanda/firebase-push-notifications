<h1 align="center">Push Notifications com Firebase</h1>

<p>Esse é o aplicativo criado em React para testar a funcionalidade de envio de notificações aos usuários disponibilizada pelo Firebase.</p>

<h2>Explicação</h2>

<p>As configurações necessárias para a inicialização do Firebase estão em Firebase.js, que exporta a função StartsFirebase. A chamada dessa função está no index.js.</p>

<p>O componente AllowButton, quando clicado, executa a função AsksForPermission, definida em NotificationPermission.js. Ela é responsável por requisitar permissão do usuário para exibir notificações.</p>

<p>Com a autorização fornecida, o usuário recebe um token. Esse token identifica para quem o Firebase irá entregar as notificações.</p>

<h2>Teste de envio de notificações pelo Postman:</h2>

{
  "notification": {
    "title": "Blix Aplicativos",
    "body": "Confira o Instagram da Blix!",
    "click_action": "https://www.instagram.com/blix.aplicativos/"
  },
  "to":"[token do usuário]"
}