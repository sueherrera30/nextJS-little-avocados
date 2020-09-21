import { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps ) {
    //como que quiro que todas las vistas lo tenga lo llamamos aqui:
    return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    );
  }
// aqui , si vas a usar propiedades o caracteristicas de render dell srvidor, que para eso es lo que estaba comentado arriba de : import App from 'next/app'
// ten cuidado que podrias bloquear la data y renderizado de este componente.

  export default MyApp;