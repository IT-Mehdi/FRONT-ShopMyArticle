# Front-End Shop My Article

## Comment installer le front-end ?
- Si vous ne l'avez pas fait, vous pouvez cloner le repo pour initier votre application : `git clone https://github.com/IT-Mehdi/FRONT-ShopMyArticle.git`
- Installation des dépendances et démarrage du boilerplate : 
```shell
cd FRONT-ShopMyArticle # (ou le nom donné au répertoire de votre projet)
npm i # (equivalent de npm install)
npm start
```

## Utilisation du fichier env de React
- Attention pour utiliser notre Application vous devez spécifier les données relatives à Stripe & Paypal
- Pour se faire, vous devez créer un fichier .env à la racine du repository et y mettre les données suivantes
```shell
REACT_APP_STRIPE_KEY=<Public Key>
REACT_APP_PAYPAL_CLIENT_ID=<Client ID>
```

## Comment utiliser le front-end ?

- Il faut d'abord démarrer le back-end que vous trouvez à cette adresse -> https://github.com/IT-Mehdi/BACK-ShopMyArticle
- Puis il faut démarrer le front-end