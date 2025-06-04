import Layout from '../components/layout';
import Navigator from './components/navigator';
import PlaygroundWrapper from './components/playground/components/wrapper';
import style from './my.module.scss';

export default function My() {
  return (
    <Layout>
      <div className={style.wrapper}>
        <Navigator />

        <PlaygroundWrapper />
      </div>
    </Layout>
  )
}
